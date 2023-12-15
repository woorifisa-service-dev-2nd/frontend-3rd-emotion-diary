import React, { useState } from "react";
import DefaultLayouts from "./layouts/DefaultLayouts";
import { icons } from "./constants/icons";
import ListContainer from "./components/ListContainer";
import EditorContainer from "./components/EditorContainer";
import { useDiary } from "./diaryContext";
import { Calendar } from "./components/Calendar";
import { dateFormat } from "./utils";

function App() {
  const [diaries] = useDiary();

  //currentDiary: 캘린더에서 클릭한 날짜의 일기 데이터
  const [currentDiary, setDiary] = useState(undefined);

  const onChangeDate = (e) => {
    //step 01. 클릭한 날짜를 알아온다.
    const date = dateFormat(e.$d);

    //step 02. dummydata에서 클릭한 날짜와 비교한다.
    const target = diaries.find((item) => item.date === date);

    //step 03. 있으면 setDiary()에 넣어주고 아니면 추가창
    target === undefined
      ? setDiary({
          id: self.crypto.randomUUID(),
          date,
          icon: icons[1],
          title: "",
          content: "",
        })
      : setDiary(target);
  };

  return (
    <>
      <DefaultLayouts>
        <Calendar onChangeDate={onChangeDate} />
        <div className="list-or-editor">
          {currentDiary === undefined ? (
            <ListContainer />
          ) : (
            <EditorContainer currentDiary={currentDiary} setDiary={setDiary} />
          )}
        </div>
      </DefaultLayouts>
    </>
  );
}

export default App;
