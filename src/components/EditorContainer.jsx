import { TextField, MenuItem, Select, Button } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { checkSentence } from '../api';
import { icons } from '../constants/icons';
import { useDiary } from '../diaryContext';

const EditorContainer = ({ currentDiary, setDiary }) => {
  const [diaries, dispatch] = useDiary();
  const onSave = () => {
    if (diaries.find((item) => item.id === currentDiary.id) !== undefined) {
      dispatch({ type: 'UPDATE', newDiary: currentDiary });
    } else {
      dispatch({ type: 'ADD', newDiary: currentDiary });
    }
    setDiary(undefined);
  };
  const onDelete = () => {
    dispatch({ type: 'DELETE', id: currentDiary.id });
    setDiary(undefined);
  };
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
    console.log(result);
    setDiary({
      ...currentDiary,
      content: result,
    });
  };
  const onCancel = () => {
    setDiary(undefined);
  };
  return (
    <>
      <div>
        <TextField
          sx={{
            display: 'inline-flex',
            width: 'calc(100% - 86px)',
            height: '65px',
            marginRight: '16px',
            marginBottom: '16px',
          }}
          value={currentDiary.title}
          id='outlined-basic'
          placeholder='제목을 입력하세요'
          variant='outlined'
          onChange={onChangeTitle}
        />
        <Select value={currentDiary.icon} onChange={onChangeIcon} sx={{ width: '70px', height: '60px' }}>
          {icons.map((emoji) => {
            return (
              <MenuItem key={emoji.name} value={emoji} sx={{ fontSize: '3rem' }}>
                {emoji.value}
              </MenuItem>
            );
          })}
        </Select>
        <TextField
          sx={{ display: 'block', marginBottom: '16px', width: '100%' }}
          id='outlined-multiline-static'
          multiline
          placeholder='내용을 입력하세요'
          rows={12}
          value={currentDiary.content}
          onChange={onChangeContent}
        />
        <div className='flex justify-between'>
          <Button
            sx={{ fontSize: '1.5rem' }}
            variant='outlined'
            onClick={onCancel}
            startIcon={<KeyboardBackspaceIcon />}
            size='large'
          >
            취소
          </Button>
          <Button
            sx={{ fontSize: '1.5rem' }}
            variant='outlined'
            onClick={onSave}
            startIcon={<SaveAltIcon />}
            size='large'
          >
            저장
          </Button>
          <Button
            sx={{ fontSize: '1.5rem' }}
            variant='outlined'
            onClick={onDelete}
            startIcon={<DeleteIcon />}
            size='large'
          >
            삭제
          </Button>
          <Button
            sx={{ fontSize: '1.5rem' }}
            variant='outlined'
            onClick={onCheck}
            startIcon={<CheckCircleIcon />}
            size='large'
          >
            맞춤법검사
          </Button>
        </div>
      </div>
    </>
  );
};

export default EditorContainer;
