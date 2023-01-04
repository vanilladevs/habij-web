import { FC } from "react";
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import DrawerMenu from "./DrawerMenu";
import AccountCircle from '@mui/icons-material/AccountCircle';


export const Header: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" enableColorOnDark>
        <Toolbar>
          <DrawerMenu />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Today
          </Typography>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
