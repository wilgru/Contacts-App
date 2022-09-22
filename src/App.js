import './App.css';
import { useState, useEffect } from 'react';

import { Grid, Paper, Typography } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

import ContactList from './components/ContactList'
import ContactView from './components/ContactView'

const theme = createTheme({
  palette: {
    primary: {
      light: orange[50],
      main: orange[600],
      dark: orange[700],
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function App() {
  const [activeContact, setActiveContact] = useState(null);
  const [smallScreen, setSmallScreen] = useState( window.innerWidth <= 600 );

  useEffect(() => {
    function handleWindowResize() {
      setSmallScreen( window.innerWidth <= 600 )
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{"display": "flex", "flexDirection": "column", "height": "100vh"}}>
        <div style={{"display": "flex", "alignItems": "center"}}>
          <Grid container spacing={2} sx={{"padding": "40px", "height": "90vh"}}>
            <Grid item xs={12}>
              <Typography variant='h4' sx={{textAlign:{xs:"center", md:"left"}}}>Contacts</Typography>
            </Grid>
            <ContactList setActiveContact={setActiveContact} activeContact={activeContact} isSmallScreen={smallScreen}></ContactList>
            <ContactView setActiveContact={setActiveContact} activeContact={activeContact} isSmallScreen={smallScreen}></ContactView>
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
