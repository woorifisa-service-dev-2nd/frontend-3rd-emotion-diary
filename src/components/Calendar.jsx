import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDiary } from "../diaryContext";
import { IconDay } from "./IconDay";

export const Calendar = ({ onChangeDate }) => {
  const [diareis] = useDiary();

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
          width: "714px",
          minWidth: "714px",
          height: "100%",
          minHeight: "550px",
          maxHeight: "none",
          boxSizing: "border-box",
          padding: "36px",
        }}
      />
    </LocalizationProvider>
  );
};
