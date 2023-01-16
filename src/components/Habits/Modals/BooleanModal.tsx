import { FC, Fragment, useState, useEffect, FormEvent } from "react";
import { Snackbar, Alert, Typography, TextField, ListItemButton, ListItemText, DialogActions, Button, Drawer } from '@mui/material';
import { DaysOfWeek } from "../DaysOfWeek";
import { Box } from "@mui/system";

interface BooleanModalProps {
  closeDrawer: (event: boolean)=> void
}

export const BooleanModal: FC<BooleanModalProps> = ({closeDrawer}) => {
  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [days, setDays] = useState({});
  const [form, setForm] = useState({
    unit: "",
    goal: "",
    title: "",
    measurmentType: "BooleanHabit",
    days: {},
    operation: "",
    value: ""
  });
  useEffect(() => {
    setForm((prevForm) => ({ ...prevForm, days: days }));
  }, [days]);

  const validateFields = () => {
    const tempErrors = []
    if (form.title === '') {
      tempErrors.push("title")
    }
    setErrors(tempErrors)
    return tempErrors.length === 0
  }; 

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
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

      const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenSnack(false);
      };
      const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        if (!validateFields()) return;
        e.preventDefault();
        console.log(form)
        const addHabit = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form)
        };
        fetch('http://localhost:3004/habits', addHabit)
          .then(response => {response.json()
          })
          .then(res => {
            setOpen(false)
            setOpenSnack(true);
            window.setTimeout(()=> {closeDrawer(false)}, 1500)
            return res;
          })
      };     
  return (
    <Fragment>
      <ListItemButton onClick={toggleDrawer(true)} sx={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #0E0E0E", boxShadow: "", borderRadius: 2, mt: 1 }}>
        <ListItemText primary="Yes or No" secondary={<Fragment><Typography color={"secondary.light"} variant="caption">e.g. Did you brush your teeth today? Did you take a shower today?</Typography></Fragment>} />
      </ListItemButton>
      <Drawer 
      anchor="bottom"
      open={open}
      sx={{ borderRadius: "40px" }}
      onClose={toggleDrawer(false)}>
        <form>
        <Box
        p={2} sx={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212" }} role="presentation"
        >
        <Box sx={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212" }}>
          Create Habit
          <Typography color={"secondary.light"} sx={{display: "block"}} variant="caption">Let’s define your habit</Typography>
        </Box>
        <Box sx={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212" }}>
        <TextField 
        value={form.title}
        name={"title"}
        onChange={handleInputChange}
        error={errors.includes("title")}
        helperText={errors.includes("title") ? 'This field is required!' : ' '}
        fullWidth 
        placeholder="e.g. Excercise"
         focused
          id="standard-basic" 
         label={<Fragment><Typography color={"secondary.light"} variant="subtitle2">Title</Typography></Fragment>} variant="standard" />
        <DaysOfWeek onSelected={(days)=> setDays(days)}></DaysOfWeek>
        </Box>
        <Box mt={4} sx={{ display: "flex", justifyContent: "space-between", background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212" }}>
          <Button onClick={toggleDrawer(false)} variant="outlined">BACK</Button>
          <Button onClick={handleSubmit} variant="contained" autoFocus>
            SAVE
          </Button>
        </Box>
        </Box>
        </form>

      </Drawer>
      <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center'}} open={openSnack} autoHideDuration={1300} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Habit Created!
        </Alert>
      </Snackbar>
    </Fragment>


  )
}
