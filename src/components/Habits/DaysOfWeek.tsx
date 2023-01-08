import { FC, useState } from "react";
import { Box, FormGroup, FormControlLabel, Typography, Checkbox, Grid, FormControl } from '@mui/material';


export const DaysOfWeek: FC = () => {
  const [state, setState] = useState({
    Monday: true,
    Tuesday: true,
    Wednesday: true,
    Thursday: true,
    Friday: true,
    Saturday: true,
    Sunday: true,
  });
  const { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = state;
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  

  return (
    <Box mt={2}>
      <Typography color={"secondary.light"} variant="body2">Days of week</Typography>
      <Typography variant="subtitle1">
      {
        Object.values(state).some((value) =>  !value) ? Object.entries(state).reduce((prev, [key, value]) => {
          if(!value) return prev;
          return prev + ' ' + key;
        }, "") : 'Everyday'
      }
        
      </Typography>
      <FormControl>

      </FormControl>
      <Grid container spacing={2}>
        <Grid item xs={4}>
            <FormControlLabel control={<Checkbox onChange={handleChange} checked={Monday} name="Monday" />} label="Monday" />
        </Grid>
        <Grid item xs={4}>
            <FormControlLabel control={<Checkbox onChange={handleChange}  checked={Tuesday} name="Tuesday" />} label="Tuesday" />
        </Grid>
        <Grid item xs={4}>
            <FormControlLabel control={<Checkbox onChange={handleChange}  checked={Wednesday} name="Wednesday" />} label="Wednesday" />
        </Grid>
        <Grid item xs={4}>
            <FormControlLabel control={<Checkbox onChange={handleChange}  checked={Thursday} name="Thursday" />} label="Thursday" />
        </Grid>
        <Grid item xs={4}>
            <FormControlLabel control={<Checkbox onChange={handleChange}  checked={Friday} name="Friday" />} label="Friday" />
        </Grid>
        <Grid item xs={4}>
            <FormControlLabel control={<Checkbox onChange={handleChange}  checked={Saturday} name="Saturday" />} label="Saturday" />
        </Grid>
        <Grid item xs={4}>
            <FormControlLabel control={<Checkbox onChange={handleChange}  checked={Sunday} name="Sunday" />} label="Sunday" />
        </Grid>
      </Grid>
    </Box>
  )
}
