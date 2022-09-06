import { getEventsList, createEvent } from "./withGateway.js";
import { setItem } from "./storage.js ";
import { renderEvents } from "./renderEvents.js";

export const popupElem = document.querySelector(".pop-up");

export const handleExitBtnClick = () => {
  popupElem.style.visibility = "hidden";
};

const popupTitleElem = document.querySelector(".pop-up__title");
const popupCommentsElem = document.querySelector(".pop-up__comment");
const timeDateElem = document.querySelector(".time-set__date");
const startDateElem = document.querySelector(".time-set__start");
const endDateElem = document.querySelector(".time-set__end");

export const handleCreateEventAction = () => {
  const title = popupTitleElem.value;
  const date = timeDateElem.value;
  const startingTime = startDateElem.value;
  const endingTime = endDateElem.value;
  const comment = popupCommentsElem.value;
  if (startingTime >= endingTime) {
    alert("your starting point can't be bigger or equal to the ending one");
    return;
  } else if (!(date && startingTime && endingTime)) {
    return;
  }

  const newEvent = {
    title,
    startingTime,
    endingTime,
    comment,
    date,
  };

  popupTitleElem.value = "";
  timeDateElem.value = "";
  startDateElem.value = "";
  endDateElem.value = "";
  popupCommentsElem.value = "";

  createEvent(newEvent)
    .then(getEventsList)
    .then((newEventsList) => {
      setItem("eventsList", newEventsList);
      renderEvents();
    });

  popupElem.style.visibility = "hidden";
};
