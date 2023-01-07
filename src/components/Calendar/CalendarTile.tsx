import { FC } from "react";
import { Typography, Paper, Button } from '@mui/material';
import "./Calendar";

interface CalendarTileProps {
  isSelected?: boolean
  date: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const CalendarTile: FC<CalendarTileProps> = ({ isSelected, date, onClick }) => {
  const [dayName, dayNumber] = date.split(',');
  return (
    <Button onClick={onClick} sx={{p:0}}>

    <Paper className="item" variant="outlined" sx={{ color: isSelected ? 'text.primary' : 'primary.light', bgcolor: isSelected ? 'primary.light' : '', borderColor: 'primary.light', p: 1, minHeight: 66, textAlign: "center", minWidth: 55, m: .5, cursor: "pointer" }}>
      <Typography variant="body2" gutterBottom> {dayName} </Typography>
      <Typography variant="h6" gutterBottom> {dayNumber} </Typography>
    </Paper>
    </Button>
  )
}
