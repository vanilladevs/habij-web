import { FC, Fragment, useState } from "react";
import { Dialog, DialogTitle, DialogContent, Typography, TextField, ListItemButton, ListItemText } from '@mui/material';

export const TimeModal: FC = () => {
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
              <ListItemText primary="Timer" secondary={<Fragment><Typography color={"secondary.light"} variant="caption">Timer let’s you time how many hours your spending on your habit</Typography></Fragment>} />
            </ListItemButton>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle sx={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212" }}>
          Create Habit
          <Typography color={"secondary.light"} sx={{display: "block"}} variant="caption">Let’s define your habit</Typography>
        </DialogTitle>
        <DialogContent sx={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212" }}>
        <TextField placeholder="e.g. Excercise" focused id="standard-basic" label={<Fragment><Typography color={"secondary.light"} variant="subtitle2">Title</Typography></Fragment>} variant="standard" />
        </DialogContent>
      </Dialog>
    </Fragment>


  )
}
