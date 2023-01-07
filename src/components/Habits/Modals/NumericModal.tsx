import { FC, Fragment, useState } from "react";
import { Dialog, DialogTitle, DialogContent, Typography, TextField, ListItemButton, ListItemText } from '@mui/material';

export const NumericModal: FC = () => {
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
              <ListItemText primary="Numeric" secondary={<Fragment><Typography color={"secondary.light"} variant="caption">e.g. How many pages did you read today? How many miles did you run today?</Typography></Fragment>} />
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
