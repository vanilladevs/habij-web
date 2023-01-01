import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './Theme';
import { BrowserRouter as Router } from "react-router-dom";
import { Typography } from '@mui/material';

function App() {
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <Typography variant="h3">Hello World!</Typography>
      </ThemeProvider>
    </Router>
  );
}

export default App;
