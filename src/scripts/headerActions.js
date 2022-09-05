import { renderLayout } from "./index.js";
import { startingDate } from "./date.js";

export const navigationLeftButton = document.querySelector(".btn-left");
export const navigationRightButton = document.querySelector(".btn-right");
export const navigationTodayButton = document.querySelector(".today-btn");

export const handleNavigationLeftBtnClick = () => {
  startingDate.setDate(startingDate.getDate() - 7);
  renderLayout(startingDate);
};

export const handleNavigationRightBtnClick = () => {
  startingDate.setDate(startingDate.getDate() + 7);
  renderLayout(startingDate);
};

export const handleNavigationTodayBtnClick = () => {
  let startingDate = new Date();
  renderLayout(startingDate);
};

export const setEventListeners = () => {
  navigationLeftButton.addEventListener("click", handleNavigationLeftBtnClick);
  navigationRightButton.addEventListener(
    "click",
    handleNavigationRightBtnClick
  );
  navigationTodayButton.addEventListener(
    "click",
    handleNavigationTodayBtnClick
  );
};
