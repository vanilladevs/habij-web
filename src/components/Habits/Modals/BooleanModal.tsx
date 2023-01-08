import { FC, Fragment, useState } from "react";
import { Dialog, DialogTitle, DialogContent, Typography, TextField, ListItemButton, ListItemText, DialogActions, Button } from '@mui/material';
import { DaysOfWeek } from "../DaysOfWeek";

export const BooleanModal: FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <ListItemButton onClick={handleClickOpen} sx={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #0E0E0E", boxShadow: "", borderRadius: 2, mt: 1 }}>
        <ListItemText primary="Yes or No" secondary={<Fragment><Typography color={"secondary.light"} variant="caption">e.g. Did you brush your teeth today? Did you take a shower today?</Typography></Fragment>} />
      </ListItemButton>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle sx={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212" }}>
          Create Habit
          <Typography color={"secondary.light"} sx={{display: "block"}} variant="caption">Let’s define your habit</Typography>
        </DialogTitle>
        <DialogContent sx={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212" }}>
        <TextField fullWidth placeholder="e.g. Excercise" focused id="standard-basic" label={<Fragment><Typography color={"secondary.light"} variant="subtitle2">Title</Typography></Fragment>} variant="standard" />
        <DaysOfWeek></DaysOfWeek>
        </DialogContent>
        <DialogActions sx={{ display: "flex", px: 3, justifyContent: "space-between", background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212" }}>
          <Button onClick={handleClose} variant="outlined">BACK</Button>
          <Button onClick={handleClose} variant="contained" autoFocus>
            SAVE
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>


  )
}
