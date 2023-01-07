import { FC } from "react";
import { Box, List } from '@mui/material';
import { NumericHabit } from "./NumericHabit";
import { BooleanHabit } from "./BooleanHabit";

export const Lists: FC = () => {
  return (
    <Box px={2}>
        <List>
          <NumericHabit></NumericHabit>
          <BooleanHabit></BooleanHabit>
        </List>
    </Box>
  )
}
