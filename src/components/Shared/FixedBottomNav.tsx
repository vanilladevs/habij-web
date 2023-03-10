import React, { FC } from 'react';
import { Box, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import { Lists } from '../Habits/Lists';
import { Calendar } from '../Calendar/Calendar';

export const FixedBottomNav: FC = () => {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <Calendar></Calendar>
      <Lists></Lists>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction sx={{color: "text.primary"}} label="Today" icon={<HomeIcon />} />
          <BottomNavigationAction sx={{color: "text.primary"}} label="Habits" icon={<FavoriteIcon />} />
          <BottomNavigationAction sx={{color: "text.primary"}} label="Settings" icon={<SettingsIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
