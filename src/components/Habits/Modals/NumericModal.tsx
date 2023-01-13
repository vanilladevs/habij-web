import { FC, Fragment, useState } from "react";
import { Dialog, DialogTitle, DialogContent, Typography, TextField, ListItemButton, Box, Button, ListItemText, MenuItem, Drawer, FormControl, Grid } from '@mui/material';
import { DaysOfWeek } from "../DaysOfWeek";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ErrorSharp } from "@mui/icons-material";

export const NumericModal: FC = () => {
  const [open, setOpen] = useState(false);
  const [dropDownValue, setDropDownValue] = useState('At Least');
  const [errors, setErrors] = useState<string[]>([]);
  const [form, setForm] = useState({
    unit: "",
    goal: "",
    habit: "",
  });

  const validateFields = () => {
    const tempErrors = []
    if (form.habit === '') {
      tempErrors.push("habit")
    }
    if (form.goal === '') {
      tempErrors.push("goal")
    }
    if (form.unit === '') {
      tempErrors.push("unit")
    }
    setErrors(tempErrors)

    return tempErrors.length === 0
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    if (value !== '') {
      setErrors(errors.filter(e => e !== name))
    }
  };


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

  const handleSubmit = () => {
    if (!validateFields()) return
  }

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
              value={form.habit}
              name={"habit"}
              onChange={handleInputChange}
              error={errors.includes("habit")}
              helperText={errors.includes("habit") ? 'This field is required!' : ' '}
              fullWidth
              placeholder="e.g. Reading"
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
                    defaultValue={'At Least'}
                    onChange={handleChange}
                    sx={{ color: "secondary.light" }}
                  >
                    <MenuItem value={'At Least'}>At Least</MenuItem>
                    <MenuItem value={'Less Than'}>Less Than</MenuItem>
                    <MenuItem value={'Exactly'}>Exactly</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <TextField
                  value={form.goal}
                  name={"goal"}
                  onChange={handleInputChange}
                  error={errors.includes("goal")}
                  helperText={errors.includes("goal") ? 'This field is required!' : ' '}
                  fullWidth
                  placeholder="Goal, e.g. 20"
                  variant="outlined" />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  value={form.unit}
                  name={"unit"}
                  onChange={handleInputChange}
                  error={errors.includes("unit")}
                  helperText={errors.includes("unit") ? 'This field is required!' : ' '}
                  fullWidth
                  placeholder="Unit, e.g. Pages"
                  variant="outlined" />

              </Grid>
              <Grid item xs={6} alignSelf={"center"}>
                a day.
              </Grid>
              <Grid item xs={12}>
                <Typography
                  color={"secondary.light"}
                  variant="subtitle1"
                  textAlign={"center"}>
                  {dropDownValue} {form.goal === '' ? '[ Goal ]' : form.goal} {form.unit === '' ? '[ Unit ]' : form.unit}  a day.
                </Typography>
              </Grid>
            </Grid>

            <DaysOfWeek></DaysOfWeek>
            <Box mt={4} sx={{ display: "flex", justifyContent: "space-between", background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212" }}>
              <Button
                variant="outlined"
                onClick={toggleDrawer(false)}
              >
                BACK
              </Button>
              <Button
                variant="contained"
                autoFocus
                onClick={handleSubmit}
              >
                SAVE
              </Button>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Fragment>


  )
}
