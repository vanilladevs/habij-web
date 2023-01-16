import { FC, useEffect, useState } from "react";
import { Box, List } from '@mui/material';
import { NumericHabit } from "./NumericHabit";
import { BooleanHabit } from "./BooleanHabit";
import { Calendar } from "../Calendar/Calendar";
import { HabitWithId, MeasurmentType } from "../../types/habit";

export const Lists: FC = () => {
  const [ habits, setHabits ] = useState<HabitWithId[]>([]);
  const [ selectedDay, setSelectedDay ] = useState("");
  
  const compareDate = (date: string) => {
    const fulldate = date.split(",");
    setSelectedDay(fulldate[0])
  }

  const checkDay = (days: object) => {
    for (const [key, value] of Object.entries(days)) {
      if(key === selectedDay){
        return value;
      }
    }
  }

  useEffect(() => {
    async function getHabits() {
      const res = await fetch('http://localhost:3004/habits').then(res => res.json())
      setHabits(res);
    }
    getHabits();
  }, [])


  return (
    <Box px={2} mb={7}>
      <Calendar selectedDay={(selectedDay)=> compareDate(selectedDay)}></Calendar>
      <List>
        {
          habits.map((item)=> {
            if(item.measurmentType === MeasurmentType.NumericHabit && checkDay(item.days)){
              return <NumericHabit key={item.id} habitData={item}></NumericHabit>
            }
            else if(checkDay(item.days)) {
              return <BooleanHabit key={item.id} habitData={item}></BooleanHabit>
            }
          })
        }
      </List>
    </Box>
  )
}
