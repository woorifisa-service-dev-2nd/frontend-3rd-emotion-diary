import { useReducer, useContext } from "react";
import { createContext } from "react";
import { icons } from "./constants/icons";

const dummy = [
  {
    id: self.crypto.randomUUID(),
    date: "2023-12-11",
    icon: icons[0],
    title: "제목1",
    content: "내용1",
  },
  {
    id: self.crypto.randomUUID(),
    date: "2023-12-12",
    icon: icons[1],
    title: "제목2",
    content: "내용2",
  },
  {
    id: self.crypto.randomUUID(),
    date: "2023-12-13",
    icon: icons[2],
    title: "제목3",
    content: "내용3",
  },
];

export const DiaryContext = createContext();
export const useDiary = () => useContext(DiaryContext);

export const DiaryProvider = ({ children }) => {
  const [diaries, dispatch] = useReducer(reducer, dummy);

  return (
    <DiaryContext.Provider value={[diaries, dispatch]}>
      {children}
    </DiaryContext.Provider>
  );
};

const reducer = (diaries, action) => {
  switch (action.type) {
    case "ADD":
      return [...diaries, action.newDiary];
    case "DELETE":
      return diaries.filter((item) => item.id !== action.id);
    case "UPDATE":
      return diaries.map((item) => {
        if (item.id === action.newDiary.id) {
          return {
            ...item,
            title: action.newDiary.title,
            content: action.newDiary.content,
            icon: action.newDiary.icon,
          };
        } else {
          return item;
        }
      });
  }
};
