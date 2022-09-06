import { renderCalendarColumn } from "./layout/calendarColumn.js";
import { renderWeekLine } from "./layout/weekLine.js";
import { setEventListeners } from "./headerActions.js";
import { setTitle } from "./title.js";
import { startingDate, getMondayDate, today } from "./date.js";
import { renderEvents } from "./events/renderEvents.js";
import { moveRedline, renderRedlineElem } from "./redline.js";

export const renderLayout = (startingDate) => {
  const mondayDate = getMondayDate(startingDate);
  renderWeekLine(startingDate);
  renderCalendarColumn(mondayDate);
  setTitle(mondayDate);
  renderEvents();
  renderRedlineElem(today);
  moveRedline(today);
};

document.addEventListener("DOMContentLoaded", () => {
  renderLayout(startingDate);
  setEventListeners();
});
