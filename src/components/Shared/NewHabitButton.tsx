import { FC } from "react";
import { Box } from '@mui/material';
import { MeasurementModal } from "../Habits/Modals/MeasurementModal";


export const NewHabitButton: FC = () => {

  return (
    <Box sx={{ position: 'fixed', bottom: 80,right: 13 }}>
      <MeasurementModal></MeasurementModal>
    </Box>
  );

}
