import { FC, Fragment, useState } from "react";
import { Dialog, DialogTitle, DialogContent, Typography, TextField, ListItemButton, ListItemText, DialogActions, Button, Drawer } from '@mui/material';
import { DaysOfWeek } from "../DaysOfWeek";
import { Box } from "@mui/system";

export const BooleanModal: FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setOpen(open);
      };
  return (
    <Fragment>
      <ListItemButton onClick={toggleDrawer(true)} sx={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #0E0E0E", boxShadow: "", borderRadius: 2, mt: 1 }}>
        <ListItemText primary="Yes or No" secondary={<Fragment><Typography color={"secondary.light"} variant="caption">e.g. Did you brush your teeth today? Did you take a shower today?</Typography></Fragment>} />
      </ListItemButton>
      <Drawer 
      anchor="bottom"
      open={open}
      sx={{ borderRadius: "40px" }}
      onClose={toggleDrawer(false)}>
        <Box
        p={2} sx={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212" }} role="presentation"
        >
        <Box sx={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212" }}>
          Create Habit
          <Typography color={"secondary.light"} sx={{display: "block"}} variant="caption">Let’s define your habit</Typography>
        </Box>
        <Box sx={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212" }}>
        <TextField fullWidth placeholder="e.g. Excercise" focused id="standard-basic" label={<Fragment><Typography color={"secondary.light"} variant="subtitle2">Title</Typography></Fragment>} variant="standard" />
        <DaysOfWeek></DaysOfWeek>
        </Box>
        <Box sx={{ display: "flex", px: 3, justifyContent: "space-between", background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212" }}>
          <Button onClick={toggleDrawer(true)} variant="outlined">BACK</Button>
          <Button onClick={toggleDrawer(true)} variant="contained" autoFocus>
            SAVE
          </Button>
        </Box>
        </Box>
      </Drawer>
    </Fragment>


  )
}
