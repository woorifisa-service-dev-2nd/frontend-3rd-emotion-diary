import { useState } from "react";
import "./App.css";
import { checkSentence } from "./api";
import DefaultLayouts from "./layouts/DefaultLayouts";

import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { constants } from "./constants/constants";
import dayjs from "dayjs";
import { icons } from "./constants/icons";
import ListContainer from "./components/ListContainer";
import EditorContainer from "./components/EditorContainer";

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

function App() {
  //currentDiary: 캘린더에서 클릭한 날짜의 일기 데이터
  const [currentDiary, setDiary] = useState(undefined);
  const onChangeDate = (e) => {
    let day = dayjs(e.$d).format("YYYY-MM-DD");
    //step 01. 클릭한 날짜를 알아온다.
    //step 02. dummydata에서 클릭한 날짜와 비교한다.
    //step 03. 있으면 setDiary()에 넣어주고 아니면 추가창
    const findDay = dummy.find((item) => item.date === day);
    findDay === undefined
      ? setDiary({
          id: self.crypto.randomUUID(),
          date: day,
          icon: icons[1],
          title: "",
          content: "",
        })
      : setDiary(findDay);
  };

  return (
    <>
      <DefaultLayouts>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            onChange={onChangeDate}
            sx={{ width: "500px", height: "500px", margin: 0 }}
          />
        </LocalizationProvider>
        <div>
          {currentDiary === undefined ? (
            <ListContainer data={dummy} />
          ) : (
            <div>
              <EditorContainer
                currentDiary={currentDiary}
                setDiary={setDiary}
              />
            </div>
          )}
        </div>
      </DefaultLayouts>
    </>
  );
}

export default App;
