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
      secondary: "#1e1e1e",
    },
    primary: {
      main: "#42A5F5",
      light: "#29B6F6"
    },
    secondary: {
      main: "#fff",
      light: "#ffffffb3"
    }
  },
});
export default defaultTheme;
