import { generateNumbersArray } from "../common.js";
import { startingDate, getMondayDate } from "../date.js";

const calendarColumnElem = document.querySelector(".calendar-column");

const fixTimeAppearance = (number) =>
  number >= 10 ? `${number}:00` : `0${number}:00`;

const createTimeColumn = () => {
  return generateNumbersArray(1, 23)
    .map((hour) => {
      return `<div 
        class="time-column__line" 
        data-line-number="${hour}">
        ${fixTimeAppearance(hour)}
        </div>`;
    })
    .join("");
};

const createHoursSection = () => {
  return generateNumbersArray(0, 23)
    .map((sectionNumber) => {
      return `<div 
      class="calendar-section__item"
      data-line-number="${sectionNumber}">
      </div>`;
    })
    .join("");
};

const createDaysSection = (currentMondayDate) => {
  return generateNumbersArray(0, 6)
    .map((day) => {
      const currentDay = new Date(currentMondayDate.getTime());
      currentDay.setDate(currentDay.getDate() + day);
      return `
      <div class="calendar-section"
      data-date-number="${currentDay.getDate()}"
      data-month-number="${currentDay.getMonth()}">
        ${createHoursSection()}
      </div>
      `;
    })
    .join("");
};

export const renderCalendarColumn = (currentMondayDate) => {
  const timeColumn = createTimeColumn();
  const daysSection = createDaysSection(currentMondayDate);
  let currentColumnNumber = getMondayDate(startingDate).getFullYear();

  const calendarColumnChildrenElem = `
  <div class="time-column" data-column-number="${currentColumnNumber}">
    ${timeColumn}
  </div>
  <div 
  class="calendar-table"
  data-column-number="${currentColumnNumber}">
    ${daysSection}
  </div>
  `;
  calendarColumnElem.innerHTML = calendarColumnChildrenElem;
};
