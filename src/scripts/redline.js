const redlineContainerElem = document.createElement("div");
redlineContainerElem.setAttribute("id", "redlineId");
redlineContainerElem.classList.add("redline");

const redlineBallElem = document.createElement("span");
redlineBallElem.classList.add("redline__ball");

const redlineLineElem = document.createElement("span");
redlineLineElem.classList.add("redline__line");

redlineContainerElem.append(redlineBallElem, redlineLineElem);

export const renderRedlineElem = (today) => {
  const currentDayColumn = document.querySelector(
    `div[data-date-number="${today.getDate()}"][data-month-number="${today.getMonth()}"]`
  );
  const hourSections = currentDayColumn.querySelectorAll(
    "div[data-line-number]"
  );

  for (let hourSection of hourSections) {
    if (+hourSection.getAttribute("data-line-number") === today.getHours()) {
      hourSection.append(redlineContainerElem);
    }
  }

  redlineContainerElem.style.paddingTop = `${today.getMinutes()}px`;
};

export const moveRedline = () => {
  setInterval(() => renderRedlineElem(new Date()), 60000);
};
