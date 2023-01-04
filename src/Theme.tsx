import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#212121",
      paper: "#212121"
    },
    text: {
      primary: "#fff",
    },
    secondary: {
      main: "#fff"
    }
  },
});
export default defaultTheme;
