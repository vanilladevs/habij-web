import { FC } from "react";
import { AppBar, Box, Toolbar, Typography, IconButton, List, ListItemButton, ListItemText } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ClearIcon from '@mui/icons-material/Clear';
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
