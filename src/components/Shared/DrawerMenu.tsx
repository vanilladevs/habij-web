import React, { FC } from "react";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import BathtubIcon from '@mui/icons-material/Bathtub';
import DehazeIcon from '@mui/icons-material/Dehaze';


const DrawerMenu: FC = () => {
  const [open, setOpen] = React.useState(false);

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

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BathtubIcon />
            </ListItemIcon>
            <ListItemText primary="Dally" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <IconButton color="secondary" aria-label="Menu" onClick={toggleDrawer(true)} sx={{ mr: 3 }}>
        <DehazeIcon />
      </IconButton>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </React.Fragment>
  );
}

export default DrawerMenu;