import { FC, Fragment, useState } from "react";
import { IconButton, Button, ListItemButton, ListItemText, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export const NumericHabit: FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <ListItemButton onClick={handleClickOpen} sx={{ background: "#1e1e1e", boxShadow: "", borderRadius: 2, mt: 1 }}>
        <ListItemText primary="salam" secondary={<Fragment><Typography color={"secondary.light"} variant="caption">2 Pages</Typography></Fragment>} />
        <IconButton edge="end" aria-label="delete">
          <CheckIcon sx={{ color: "green" }} />
        </IconButton>
      </ListItemButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter a Value</DialogTitle>
        <DialogContent>
          <DialogContentText>
           how much blah blah?
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="number"
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Fragment>


  )
}
