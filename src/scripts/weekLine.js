import { generateNumbersArray } from "./common.js";

const weekLineElem = document.querySelector(".week-line");

const today = new Date();

const calendarDays = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

const getDateClassName = (currentDate, className) => {
  return today.toLocaleDateString() !== currentDate.toLocaleDateString()
    ? className
    : `${className} ${className}-today`;
};

const getMondayDate = (startingDate) => {
  let mondayDate = new Date(startingDate.getTime());
  while (mondayDate.getDay() !== 1) {
    mondayDate.setDate(mondayDate.getDate() - 1);
  }
  return mondayDate;
};

const createWeekLine = (mondayDate) => {
  let currentDate;
  let currentDateDay;
  return generateNumbersArray(0, 6)
    .map((day) => {
      currentDate = new Date(
        new Date(mondayDate).setDate(mondayDate.getDate() + day)
      );
      currentDateDay = currentDate.getDate();
      return `
    <div 
      class="${getDateClassName(currentDate, "box-day")}">
    <span 
      class="${getDateClassName(currentDate, "box-day__week-day")}"
      data-day-number="${day}">
      ${calendarDays[day]}
    </span>
    <span 
      class="${getDateClassName(currentDate, "box-day__date")}"
      data-date-number="${currentDateDay}">
      ${currentDateDay}
    </span>
    </div>`;
    })
    .join("");
};

export const renderWeekLine = (startingDate) => {
  const mondayDate = getMondayDate(startingDate);
  const weekLineChildrenElem = createWeekLine(mondayDate);

  weekLineElem.innerHTML = `${weekLineChildrenElem}`;
};
