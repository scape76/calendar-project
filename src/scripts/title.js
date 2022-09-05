import { calendarMonths } from "./date.js";

const titleElem = document.querySelector(".title");
const sixDaysInMilliseconds = 5.184e8;

const getTitleName = (sDate, eDate) => {
  const sMonth = sDate.getMonth();
  const sYear = sDate.getFullYear();
  const eMonth = eDate.getMonth();
  const eYear = eDate.getFullYear();
  const monthTitle =
    sMonth === eMonth
      ? calendarMonths[sMonth]
      : calendarMonths[sMonth] + " - " + calendarMonths[eMonth];
  const yearTitle = sYear === eYear ? `${sYear}` : sYear + " - " + eYear;
  if (yearTitle === sYear + " - " + eYear) {
    // set Title name like Dec 2022 - Jan 2023 instead of Dec - Jav 2022 - 2023
    return (
      calendarMonths[sMonth] +
      " " +
      sYear +
      " - " +
      calendarMonths[eMonth] +
      " " +
      eYear
    );
  } else return monthTitle + " " + yearTitle;
};

export const setTitle = (mondayDate) => {
  const startingWeekDate = new Date(mondayDate.getTime());
  const endingWeekDate = new Date(mondayDate.getTime() + sixDaysInMilliseconds);
  const title = getTitleName(startingWeekDate, endingWeekDate);
  titleElem.textContent = title;
};
