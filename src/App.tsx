import { FC } from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import defaultTheme from './Theme';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { BaseLayout } from './layouts';

const App: FC = () => {
  return (
    <Router>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Routes>
          <Route path='/' element={<BaseLayout />}></Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
