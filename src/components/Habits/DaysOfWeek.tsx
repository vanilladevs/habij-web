import { FC, useEffect, useState } from "react";
import { Box, FormGroup, FormControlLabel, Typography, Checkbox, Grid, FormControl } from '@mui/material';

interface DaysProps {
  onSelected: (event: {[k in string]: boolean}) => void
}
export const DaysOfWeek: FC<DaysProps> = ({onSelected}) => {
  const [state, setState] = useState({
    Mon: true,
    Tue: true,
    Wed: true,
    Thu: true,
    Fri: true,
    Sat: true,
    Sun: true,
  });
  const { Mon, Tue, Wed, Thu, Fri, Sat, Sun } = state;
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(prev => ({
      ...prev,
      [event.target.name]: event.target.checked,
    }));
  };
  
  useEffect(() => {
    onSelected(state)
  }, [state])

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
            <FormControlLabel control={<Checkbox onChange={handleChange} checked={Mon} name="Mon" />} label="Monday" />
        </Grid>
        <Grid item xs={4}>
            <FormControlLabel control={<Checkbox onChange={handleChange}  checked={Tue} name="Tue" />} label="Tuesday" />
        </Grid>
        <Grid item xs={4}>
            <FormControlLabel control={<Checkbox onChange={handleChange}  checked={Wed} name="Wed" />} label="Wednesday" />
        </Grid>
        <Grid item xs={4}>
            <FormControlLabel control={<Checkbox onChange={handleChange}  checked={Thu} name="Thu" />} label="Thursday" />
        </Grid>
        <Grid item xs={4}>
            <FormControlLabel control={<Checkbox onChange={handleChange}  checked={Fri} name="Fri" />} label="Friday" />
        </Grid>
        <Grid item xs={4}>
            <FormControlLabel control={<Checkbox onChange={handleChange}  checked={Sat} name="Sat" />} label="Saturday" />
        </Grid>
        <Grid item xs={4}>
            <FormControlLabel control={<Checkbox onChange={handleChange}  checked={Sun} name="Sun" />} label="Sunday" />
        </Grid>
      </Grid>
    </Box>
  )
}
