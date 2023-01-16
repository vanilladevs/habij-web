import { FC, useState, useEffect } from "react";
import { Box } from '@mui/material';
import { CalendarTile } from "./CalendarTile";
import dayjs from 'dayjs';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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

interface CalendarProps{
  selectedDay: (event: string)=> void
}

export const Calendar: FC<CalendarProps> = ({selectedDay}) => {
  const[selected, setSelected] = useState(getToday());

  const chooseDate = (fulldate:string) => {
    if(fulldate !== selected) setSelected(fulldate)
  }

  useEffect(() => {
    selectedDay(selected)
  }, [selected])

  return (
    <Box mt={2} onClick={getWeekDays} sx={{ width: "100%", display: "block" }}>
      <Slider slidesToShow={19} dots={false} initialSlide={13}
      infinite={true} arrows={false}
       slidesToScroll={7}
       responsive={[        {
        breakpoint: 1260,
        settings: {
          slidesToShow: 15,
          dots: false
        }
      },
      {
        breakpoint: 915,
        settings: {
          slidesToShow: 10,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 7,
        }
      },
      {
        breakpoint: 445,
        settings: {
          slidesToShow: 5,
        }
      }]}>

      {
        getWeekDays().map((fullDate) => 
        (<CalendarTile onClick={() => chooseDate(fullDate)} key={fullDate} date={fullDate} isSelected={fullDate === selected} ></CalendarTile>))
      }
      </Slider>
      
    </Box>
  )
}
