export let startingDate = new Date();
export const today = new Date();
export const calendarDays = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
export const calendarMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const getMondayDate = (startingDate) => {
  let mondayDate = new Date(startingDate.getTime());
  while (mondayDate.getDay() !== 1) {
    mondayDate.setDate(mondayDate.getDate() - 1);
  }
  return mondayDate;
};
