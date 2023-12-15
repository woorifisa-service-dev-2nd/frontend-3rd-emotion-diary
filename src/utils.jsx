import dayjs from "dayjs";

export const dateSort = (dateList) => {
  return dateList.sort((a, b) => {
    return dayjs(a.date) - dayjs(b.date);
  });
};

export const dateFormat = (date) => {
  return dayjs(date).format("YYYY-MM-DD");
};
