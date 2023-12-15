import { Badge } from "@mui/material";
import { dateFormat } from "../utils";
import { PickersDay } from "@mui/x-date-pickers";

export const IconDay = (props) => {
  const { writtenDays = [], day, outsideCurrentMonth, ...other } = props;
  let formattedDay = dateFormat(day.$d);
  const content = writtenDays.find((day) => day.date === formattedDay);
  return (
    <Badge
      overlap="circular"
      badgeContent={content !== undefined ? content.icon.value : undefined}
    >
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
      ></PickersDay>
    </Badge>
  );
};
