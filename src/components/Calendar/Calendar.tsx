import { FC, useState } from "react";
import { Box } from '@mui/material';
import { CalendarTile } from "./CalendarTile";
import dayjs from 'dayjs';


// get date as input and change range based on selected date
// const getWeekDays = (start, range)
const getWeekDays = () => {
  const today = dayjs();

  const monthDaysAfter = new Array(15).fill(today).map(
    (day, ind) => day.add(ind, 'day').format('ddd,DD,MMM,YYYY')
  )

  const monthDaysBefore = new Array(15).fill(today).map(
    (day, ind) => day.add(-ind - 1, 'day').format('ddd,DD,MMM,YYYY')
  )

  const past30Days = [...monthDaysBefore.reverse(), ...monthDaysAfter];

  return past30Days;
}


function getToday() {
  const today = dayjs();
  return today.format('ddd,DD,MMM,YYYY');
}

export const Calendar: FC = () => {
  const[selected, setSelected] = useState(getToday());

  const chooseDate = (fulldate:string) => {
    if(fulldate !== selected) setSelected(fulldate)
  }

  return (
    <Box px={2} mt={2} sx={{ display: "flex", overflow: "hidden", overflowX: "overlay" }} onClick={getWeekDays}>

      {
        getWeekDays().map((fullDate) => 
        (<CalendarTile onClick={() => chooseDate(fullDate)} key={fullDate} date={fullDate} isSelected={fullDate === selected} ></CalendarTile>))
      }
      
    </Box>
  )
}
