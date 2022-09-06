import { renderCalendarColumn } from "./calendarColumn.js";
import { renderWeekLine } from "./weekLine.js";
import { setEventListeners } from "./headerActions.js";
import { setTitle } from "./title.js";
import { startingDate, getMondayDate } from "./date.js";
import { renderEvents } from "./renderEvents.js";

export const renderLayout = (startingDate) => {
  const mondayDate = getMondayDate(startingDate);
  renderWeekLine(startingDate);
  renderCalendarColumn(mondayDate);
  setTitle(mondayDate);
  renderEvents();
};

document.addEventListener("DOMContentLoaded", () => {
  renderLayout(startingDate);
  setEventListeners();
});
