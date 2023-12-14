import {
  FormControl,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  Button,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { checkSentence } from "../api";
import { icons } from "../constants/icons";

const EditorContainer = ({ currentDiary, setDiary }) => {
  const onChangeTitle = (e) => {
    setDiary({
      ...currentDiary,
      title: e.target.value,
    });
  };
  const onChangeContent = (e) => {
    setDiary({
      ...currentDiary,
      content: e.target.value,
    });
  };
  const onChangeIcon = (e) => {
    setDiary({
      ...currentDiary,
      icon: e.target.value,
    });
    console.log(e.target.value);
  };
  const onCheck = async () => {
    //step 01. 버튼 클릭시 텍스트 가져오기 (currentDiary.content)
    //step 02. checkSentence() 함수의 인자로 위의 텍스트를 넣어서 호출
    //step 03. 받아온 값으로 setDiary() 업데이트
    const result = await checkSentence(currentDiary.content);
    // console.log(result);
  };
  return (
    <div>
      <TextField
        sx={{ display: "block" }}
        value={currentDiary.title}
        id="outlined-basic"
        placeholder="제목을 입력하세요"
        variant="outlined"
        onChange={onChangeTitle}
      />
      <TextField
        id="outlined-multiline-static"
        multiline
        placeholder="내용을 입력하세요"
        rows={4}
        value={currentDiary.content}
        onChange={onChangeContent}
      />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">감정</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currentDiary.icon}
          onChange={onChangeIcon}
        >
          {icons.map((emoji) => {
            return (
              <MenuItem key={emoji.name} value={emoji}>
                {emoji.value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <Button variant="outlined">취소</Button>
      <Button variant="outlined">저장</Button>
      <Button variant="outlined">삭제</Button>
      <Button variant="outlined" onClick={onCheck}>
        맞춤법검사
      </Button>
    </div>
  );
};

export default EditorContainer;
