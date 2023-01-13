import { FC, Fragment, useState } from "react";
import { Dialog, DialogTitle, DialogContent, Typography, TextField, ListItemButton, Box, Button, ListItemText, MenuItem, Drawer, FormControl, Grid } from '@mui/material';
import { DaysOfWeek } from "../DaysOfWeek";
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const NumericModal: FC = () => {
  const [open, setOpen] = useState(false);
  const [dropDownValue, setDropDownValue] = useState('');

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


  const handleChange = (event: SelectChangeEvent) => {
    setDropDownValue(event.target.value as string);
  };
  return (
    <Fragment>
      <ListItemButton onClick={toggleDrawer(true)} sx={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #0E0E0E", boxShadow: "", borderRadius: 2, mt: 1 }}>
        <ListItemText primary="Numeric" secondary={<Fragment><Typography color={"secondary.light"} variant="caption">e.g. How many pages did you read today? How many miles did you run today?</Typography></Fragment>} />
      </ListItemButton>
      <Drawer
        anchor="bottom"
        open={open}
        sx={{ borderRadius: "40px" }}
        onClose={toggleDrawer(false)}>
        <Box
          p={2} sx={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212" }} role="presentation"
        >
          <Box mb={4} sx={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212" }}>
            Create Habit
            <Typography color={"secondary.light"} sx={{ display: "block" }} variant="caption">Let’s define your habit</Typography>
          </Box>
          <Box sx={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212" }}>

            <TextField
              fullWidth
              placeholder="e.g. Excercise"
              focused
              id="standard-basic"
              label={
                <Fragment>
                  <Typography color={"secondary.light"} variant="subtitle2">
                    Title
                  </Typography>
                </Fragment>
              }
              variant="standard"
            />

            <Grid container spacing={2} mt={.5}>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={'atleast'}
                    onChange={handleChange}
                    sx={{ color: "secondary.light" }}
                  >
                    <MenuItem value={'atleast'}>At Least</MenuItem>
                    <MenuItem value={'lessthan'}>Less Than</MenuItem>
                    <MenuItem value={'exactly'}>Exactly</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth placeholder="Goal" variant="outlined" />

              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth placeholder="Unit" variant="outlined" />

              </Grid>
              <Grid item xs={6} alignSelf={"center"}>
                a day.
              </Grid>
              <Grid item xs={12}>
                <Typography color={"secondary.light"} variant="subtitle1" textAlign={"center"}>At least 2 pages a day.</Typography>
              </Grid>
            </Grid>

            <DaysOfWeek></DaysOfWeek>
            <Box mt={4} sx={{ display: "flex", justifyContent: "space-between", background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212" }}>
              <Button variant="outlined">BACK</Button>
              <Button variant="contained" autoFocus>
                SAVE
              </Button>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Fragment>


  )
}
