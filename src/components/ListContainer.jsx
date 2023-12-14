import React from "react";
import ListItems from "./ListItems";

const ListContainer = ({ data }) => {
  return data.map((item) => {
    return <ListItems key={item.id} item={item} />;
  });
};

export default ListContainer;
