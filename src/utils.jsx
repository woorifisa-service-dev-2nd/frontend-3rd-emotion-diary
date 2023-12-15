import dayjs from "dayjs";

export const dateSort = (dateList) => {
  return dateList.sort((a, b) => {
    // console.log("a", a.date, a.date > b.date);
    // console.log("b", b.date);
    return a.date > b.date ? 1 : -1;
  });
};

export const dateFormat = (date) => {
  return dayjs(date).format("YYYY-MM-DD");
};
