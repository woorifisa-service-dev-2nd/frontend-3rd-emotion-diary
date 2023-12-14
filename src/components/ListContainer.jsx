import dayjs from "dayjs";
import React from "react";
import { useDiary } from "../diaryContext";
import ListItems from "./ListItems";

const ListContainer = () => {
  const [diaries] = useDiary();
  console.log(diaries);
  return diaries
    .sort((a, b) => {
      return dayjs(a.date) - dayjs(b.date);
    })
    .map((item) => {
      return <ListItems key={item.id} item={item} />;
    });
};

export default ListContainer;
