import { renderLayout } from "./index.js";
import { startingDate } from "./date.js";
import {
  popupElem,
  handleExitBtnClick,
  handleCreateEventAction,
} from "./createEvent.js";

const navigationLeftButton = document.querySelector(".btn-left");
const navigationRightButton = document.querySelector(".btn-right");
const navigationTodayButton = document.querySelector(".today-btn");
const createBtnElem = document.querySelector(".create-btn");
const exitBtnElem = document.querySelector(".exit-btn");
const saveBtnElem = document.querySelector(".save-btn");

const handleCreateBtnClick = () => {
  popupElem.style.visibility = "visible";
  exitBtnElem.addEventListener("click", handleExitBtnClick);
  saveBtnElem.addEventListener("click", handleCreateEventAction);
};

const handleNavigationLeftBtnClick = () => {
  startingDate.setDate(startingDate.getDate() - 7);
  renderLayout(startingDate);
};

const handleNavigationRightBtnClick = () => {
  startingDate.setDate(startingDate.getDate() + 7);
  renderLayout(startingDate);
};

const handleNavigationTodayBtnClick = () => {
  startingDate.setTime(new Date().getTime());
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
  createBtnElem.addEventListener("click", handleCreateBtnClick);
};
