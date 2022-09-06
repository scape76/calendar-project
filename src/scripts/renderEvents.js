import { getItem } from "./storage.js";
import { handleEventElemClick } from "./deleteEvent.js";

const clearTableFromEvents = () => {
  const events = document.querySelectorAll(".event");
  events.forEach((e) => {
    e.remove();
  });
};

export const renderEvents = () => {
  clearTableFromEvents();

  const eventsList = getItem("eventsList") || [];

  let eventHeight;
  let dayColumn;

  const eventElems = eventsList.map(
    ({ title, startingTime, endingTime, comment, date, id }) => {
      const eventDate = new Date(date).getDate();
      const eventMonth = new Date(date).getMonth();
      const eventYear = new Date(date).getFullYear();
      const startingTimeHour = +startingTime.split(":")[0];
      const startingTimeMinutes = +startingTime.split(":")[1];
      dayColumn = document.querySelector(
        `div[data-date-number = "${eventDate}"][data-month-number = "${eventMonth}"]`
      );

      const endingTimeHour = +endingTime.split(":")[0];
      const endingTimeMinutes = +endingTime.split(":")[1];

      const startingTimeInMinutes = startingTimeHour * 60 + startingTimeMinutes;
      eventHeight =
        (endingTimeHour - startingTimeHour) * 60 +
        (endingTimeMinutes - startingTimeMinutes);

      const eventElem = document.createElement("div");
      eventElem.classList.add("event");
      eventElem.setAttribute("id", `${id}`);

      const eventTitleElem = document.createElement("span");
      eventTitleElem.append(title);
      eventHeight >= 80
        ? (eventTitleElem.style.fontSize = "1rem")
        : (eventTitleElem.style.fontSize = "0.5rem");

      const eventTimeElem = document.createElement("span");
      eventTimeElem.append(`${startingTime} - ${endingTime}`);
      eventTimeElem.style.fontWeight = "700";

      const eventCommentElem = document.createElement("span");
      eventCommentElem.append(comment);

      eventElem.append(eventTitleElem, eventTimeElem, eventCommentElem);

      eventElem.style.top =
        startingTime === "00:00" ? `0px` : `${startingTimeInMinutes}px`;
      eventElem.style.height = `${eventHeight}px`;

      const deleteBtn = document.createElement("div");
      deleteBtn.classList.add("deleteBtn");
      deleteBtn.style.top = `${eventHeight + 2}px`;
      deleteBtn.innerText = "delete";
      deleteBtn.style.visibility = "hidden";

      eventElem.addEventListener("click", () =>
        handleEventElemClick(deleteBtn, id)
      );

      eventElem.append(deleteBtn);
      for (let table of document.querySelectorAll(".calendar-table")) {
        for (let section of document.querySelectorAll(".calendar-section")) {
          if (
            +eventMonth === +section.getAttribute("data-month-number") &&
            +eventDate === +section.getAttribute("data-date-number") &&
            +eventYear === +table.getAttribute("data-column-number")
          ) {
            return dayColumn.append(eventElem);
          }
        }
      }
    }
  );
  return eventElems;
};
