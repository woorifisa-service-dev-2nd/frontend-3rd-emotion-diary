import { Badge } from '@mui/material';
import { DateCalendar, LocalizationProvider, PickersDay } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useDiary } from '../diaryContext';
import dayjs from 'dayjs';

export const Calendar = ({ onChangeDate }) => {
  const [diareis] = useDiary();
  const IconDay = (props) => {
    const { writtenDays = [], day, outsideCurrentMonth, ...other } = props;
    let formattedDay = dayjs(day.$d).format('YYYY-MM-DD');
    const content = writtenDays.find((day) => day.date === formattedDay);
    return (
      <Badge overlap='circular' badgeContent={content !== undefined ? content.icon.value : undefined}>
        <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day}></PickersDay>
      </Badge>
    );
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        onChange={onChangeDate}
        slots={{
          day: IconDay,
        }}
        slotProps={{
          day: {
            writtenDays: diareis,
          },
        }}
        sx={{
          width: '50%',
          minWidth: '550px',
          height: '100%',
          minHeight: '550px',
          maxHeight: 'none',
          boxSizing: 'border-box',
          padding: '36px',
        }}
      />
    </LocalizationProvider>
  );
};
