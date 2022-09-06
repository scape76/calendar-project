import { deleteEvent, getEventsList } from "./withGateway.js";
import { renderEvents } from "./renderEvents.js";
import { setItem } from "./storage.js";

const handleDeleteEventClick = (id) => {
  deleteEvent(id)
    .then(getEventsList)
    .then((newEventsList) => {
      setItem("eventsList", newEventsList);
      renderEvents();
    });
};

export const handleEventElemClick = (deleteBtn, id) => {
  deleteBtn.style.visibility =
    deleteBtn.style.visibility === "hidden" ? "visible" : "hidden";
  deleteBtn.addEventListener("click", () => handleDeleteEventClick(id));
};
