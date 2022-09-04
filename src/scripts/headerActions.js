import { startingDate } from "./index.js";
import { renderWeekLine } from "./weekLine.js";

export const navigationLeftButton = document.querySelector(".btn-left");
export const navigationRightButton = document.querySelector(".btn-right");
export const navigationTodayButton = document.querySelector(".today-btn");

export const handleNavigationLeftBtnClick = () => {
  startingDate.setDate(startingDate.getDate() - 7);
  renderWeekLine(startingDate);
};

export const handleNavigationRightBtnClick = () => {
  startingDate.setDate(startingDate.getDate() + 7);
  renderWeekLine(startingDate);
};

export const handleNavigationTodayBtnClick = () => {
  let startingDate = new Date();
  renderWeekLine(startingDate);
};
