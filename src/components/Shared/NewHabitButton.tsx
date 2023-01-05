import { FC, useState } from "react";
import { Button, Dialog, DialogTitle, DialogContentText, DialogContent, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


export const NewHabitButton: FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 80,right: 13 }}>
      <Button variant="contained" endIcon={<AddIcon />} onClick={handleClickOpen} sx={{ borderRadius: 64 }} >
        Habit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Modal"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            put content here!
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Box>
  );

}
