import { FC, Fragment, useState } from "react";
import { Dialog, DialogTitle, DialogContent, Button, Typography, List, Drawer, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { BooleanModal } from "./BooleanModal";
import { NumericModal } from "./NumericModal";
import { TimeModal } from "./TimeModal";


export const MeasurementModal: FC = () => {
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
      <Button variant="contained" endIcon={<AddIcon />} onClick={toggleDrawer(true)} sx={{ borderRadius: 64 }} >
        Habit
      </Button>
      <Drawer 
      anchor="bottom"
      open={open}
      sx={{ borderRadius: "40px" }}
      onClose={toggleDrawer(false)}>
        <Box p={2} sx={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212" }} role="presentation"
      >

      <Box sx={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212" }}>
          Measurement
          <Typography color={"secondary.light"} sx={{display: "block"}} variant="caption">How do you want to measure your progress?</Typography>
        </Box>
        <Box sx={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212" }}>
          <List>
            <BooleanModal closeDrawer={(close)=> setOpen(close)}></BooleanModal>
            <NumericModal closeDrawer={(close)=> setOpen(close)}></NumericModal>
            <TimeModal></TimeModal>
          </List>
        </Box>
        </Box>
      </Drawer>
    </Fragment>
  )
}
