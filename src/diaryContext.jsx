import { useReducer, useContext } from "react";
import { createContext } from "react";
import { icons } from "./constants/icons";

const dummy = [
  {
    id: self.crypto.randomUUID(),
    date: "2023-12-11",
    icon: icons[0],
    title: "오늘은 월요일",
    content: "오늘은 월요일이다. 주말까지 5일이나 남았다. 나는 화가난다.",
  },
  {
    id: self.crypto.randomUUID(),
    date: "2023-12-12",
    icon: icons[6],
    title: "따뜻한 하루",
    content:
      "겨울인데 너무 따뜻했다. 롱패딩을 괜히 입었다. 이제는 숏패딩입어야지~",
  },
  {
    id: self.crypto.randomUUID(),
    date: "2023-12-14",
    icon: icons[2],
    title: "프로젝트",
    content:
      "오늘은 프로젝트를 하는 날이다. 우리팀은 1명이 없어서 둘이서 진행했다. 명하가 다 가르쳐줬다. 고마워 :)",
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
