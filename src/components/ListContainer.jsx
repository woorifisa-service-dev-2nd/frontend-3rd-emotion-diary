import React from "react";
import { useDiary } from "../diaryContext";
import ListItems from "./ListItems";
import { dateSort } from "../utils";

const ListContainer = () => {
  const [diaries] = useDiary();

  return dateSort(diaries).map((item) => {
    return <ListItems key={item.id} item={item} />;
  });
};

export default ListContainer;
