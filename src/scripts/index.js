import { renderCalendarColumn } from "./calendarColumn.js";
import { renderWeekLine } from "./weekLine.js";
import {
  navigationLeftButton,
  handleNavigationLeftBtnClick,
  navigationRightButton,
  handleNavigationRightBtnClick,
  navigationTodayButton,
  handleNavigationTodayBtnClick,
} from "./headerActions.js";

export let startingDate = new Date();

document.addEventListener("DOMContentLoaded", () => {
  renderCalendarColumn();
  renderWeekLine(startingDate);
  navigationLeftButton.addEventListener("click", handleNavigationLeftBtnClick);
  navigationRightButton.addEventListener(
    "click",
    handleNavigationRightBtnClick
  );
  navigationTodayButton.addEventListener(
    "click",
    handleNavigationTodayBtnClick
  );
});
