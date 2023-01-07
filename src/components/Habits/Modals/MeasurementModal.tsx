import { FC, Fragment, useState } from "react";
import { Dialog, DialogTitle, DialogContent, Button, Typography, List } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { BooleanModal } from "./BooleanModal";
import { NumericModal } from "./NumericModal";
import { TimeModal } from "./TimeModal";


export const MeasurementModal: FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <Button variant="contained" endIcon={<AddIcon />} onClick={handleClickOpen} sx={{ borderRadius: 64 }} >
        Habit
      </Button>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle sx={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212" }}>
          Measurement
          <Typography color={"secondary.light"} sx={{display: "block"}} variant="caption">How do you want to measure your progress?</Typography>
        </DialogTitle>
        <DialogContent sx={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212" }}>
          <List>
            <BooleanModal></BooleanModal>
            <NumericModal></NumericModal>
            <TimeModal></TimeModal>
          </List>
        </DialogContent>
      </Dialog>
    </Fragment>
  )
}
