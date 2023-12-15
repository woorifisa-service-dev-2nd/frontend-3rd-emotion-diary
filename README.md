# 😄frontend-3rd-emotion-diary🤬

![header](https://capsule-render.vercel.app/api?type=shark&color=auto&height=250&section=header&text=Emotion%20Diary&fontSize=70&animation=scaleIn)

## 👩‍💻 활용 기술

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shiel ds.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## 😌 주제 및 팀원 소개

이모티콘으로 그날의 감정과 일기를 기록해보세요!

👱:‍ 나경률<br/>
👩:‍ 조명하

## 사용 라이브러리 : MUI

- MUI 고른 이유

1. 무료인 캘린더 컴포넌트가 있다.
2. 날짜 커스터마이징이 가능하다.
3. 디자인이 심플하다.

## 🧑‍🔧 기능 시연

1. 이미 일기 쓴 날

   - 취소 버튼
   - 일기 편집 : 제목, 내용, 이모티콘 수정
   - 일기 삭제<br>

2. 아직 일기 안 쓴 날
   - 일기 추가
   - 맞춤법 검사

## 👩‍🏫 구현 설명

### 1. CustomButton 컴포넌트

CustomButton MUI의 컴포넌트를 사용했습니다.
똑같은 컴포넌트를 사용하는 경우가 많았기 때문에 스타일을 적용해서 컴포넌트로 따로 분리했습니다.

```javascript
import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ onClick, text, icon }) => {
  return (
    <Button
      sx={{ fontSize: "1.5rem" }}
      variant="outlined"
      onClick={onClick}
      startIcon={icon}
      size="large"
    >
      {text}
    </Button>
  );
};

export default CustomButton;
```

### 2. List, Editor창 전환

App.jsx에서 currentDiary와 setDiary를 사용해서 창을 전환한다.
undefined이면 List, 객체가 들어와있으면 Editor 창을 보여준다.

```javascript
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
```

## 😩 트러블슈팅

### 1. 날짜 정렬<br>

```javascript
export const dateSort = (dateList) => {
  return dateList.sort((a, b) => {
    // console.log(a.date - b.date); NaN 출력
    // console.log(a.date > b.date); true, false 출력
    return a.date > b.date ? 1 : -1; //1, -1 출력으로 정렬 가능
  });
};
```

step 01. date 빼기 연산은 문자열이라서 NaN이 나왔다. <br>
step 02. 그래서 sort(a,b) 함수를 사용해서 a.date와 b.date의 대소 비교를 했다. 그런데 true, false로 리턴한다. <br>
step 03. sort() 함수는 리턴값이 음수인지 아닌지를 기준으로 정렬하기 때문에 a.date > b.date 라면 1을, 아니라면 -1을 줘서 정렬 기준을 맞춘다.

### 2. 맞춤법 검사<br>

```javascript
//server에 POST 요청을 보내는 코드
export const checkSentence = async (text) => {
  let result = await fetch(
    "http://localhost:3000/check",

    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: text }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      //console.log(data.suggestions[0]); und
      return data.errnum === 0 ? text : data.suggestions[0];
    })
    .catch((error) => console.log("실패입니다."));
  return result;
};
```

올바르지 않은 문장을 입력하고 맞춤법 검사를 하는 경우에는 data.suggestions[0]이 올바른 문장을 출력해주었다. 하지만 올바른 문장을 입력하니 아무것도 반환하지 않았다. 그래서 data.errnum이 0인 경우, 즉 올바른 문장일 경우 입력한 text를 그대로 반환하고, 1인 경우 고친 올바른 문장을 반환하도록 했다.

## 🧐 회고

👱 나경률: react를 활용해서 하루만에 일기장을 만들 수 있는 좋은 시간이었다. 라이브러리를 찾아서 쓰고 useReducer와 context를 사용하는 부분에서 어려움이 많았지만 팀원과의 협업을 통해 많이 배울 수 있는 의미있는 시간이었다. 그리고 라이브러리의 컴포넌트를 커스터마이징 할 때 문서를 보지않고 하다가 적용이 안되서 문서를 보고 해결했다. 이를 통해, 앞으로 프로젝트를 진행할 때는 사용하는 라이브러리에서 문서를 잘 확인하면서 사용해야겠다는 생각이 들었다.<br><br>

👩 조명하:
readme를 작성하면서 프로젝트를 진행하는 동안 겪었던 문제들을 다시 떠올려 봤는데, 잘 기억이 나지 않았다. 뭔가 문제가 생겼을 때 다 해결하고 나서야 커밋을 하다 보니 깃허브에는 문제가 없는 코드만 있어서 기억을 되짚는 게 힘들었다. 앞으로의 프로젝트에서는 문제가 생기면 해결하기 전에 먼저 어떤 문제가 발생했는지 기록을 해야겠다. 그리고 mui를 커스터마이징하면서 기술 문서를 찾아봤는데, mui의 디자인 시스템을 알고 있어야 이해할 수 있도록 되어 있어서 학습하는 데 시간이 좀 걸렸다. 쉬는 시간도 없이 8시간 내내 고생해준 팀원 감사합니다!
