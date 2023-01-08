import { FC, Fragment, ReactEventHandler, useState } from "react";
import { IconButton, Button, ListItemButton, ListItemText, Dialog, DialogTitle, DialogContent, Stack, TextField, DialogActions, Typography, Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

export const NumericHabit: FC = () => {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if(!event.target.value) setCount(0)
    else setCount(parseInt(event.target.value))
  }

  const increaseCount = () => {
    setCount((prevState) => prevState +1)
  }
  const decreaseCount = () => {
    setCount((prevState) => prevState -1)
  }


  return (
    <Fragment>
      <ListItemButton onClick={handleClickOpen} sx={{ background: "#1e1e1e", boxShadow: "", borderRadius: 2, mt: 1 }}>
        <ListItemText primary="salam" secondary={<Fragment><Typography color={"secondary.light"} variant="caption">{count} Pages</Typography></Fragment>} />
        <IconButton edge="end" aria-label="delete">
          <CheckIcon sx={{ color: "green" }} />
        </IconButton>
      </ListItemButton>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle sx={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212" }}>
          Enter a Value
          <Typography color={"secondary.light"} sx={{ display: "block" }} variant="caption">How much is your today progress?</Typography>
        </DialogTitle>
        <DialogContent sx={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212" }}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={0}>
            <Button onClick={decreaseCount} variant="contained" sx={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}><HorizontalRuleIcon /></Button>
            <TextField type={"number"} value={count} onChange={handleChange} sx={{ '& fieldset': {borderRadius: 0} }} />
            <Button onClick={increaseCount} variant="contained" sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}><AddIcon /></Button>
          </Stack>
          <Box mt={2} textAlign={"center"}>
          <Typography variant="subtitle1">Daily Goal</Typography>
          <Typography variant="caption" color={"secondary.light"}>Less than 15 cigarettes</Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ display: "flex", px: 3, justifyContent: "space-between", background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212" }}>
          <Button onClick={handleClose} variant="outlined">CANCEL</Button>
          <Button onClick={handleClose} variant="contained" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>


  )
}
