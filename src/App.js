import './App.css';
import { useState, useEffect } from 'react';

import { Grid, Paper } from '@mui/material';
import ThemeProvider from '@mui/material';

import ContactList from './components/ContactList'
import ContactView from './components/ContactView'

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
    // <ThemeProvider theme={theme}>
      <div className="App" style={{"display": "flex", "alignItems": "center", "height": "100vh"}}>
        <Grid container spacing={2} style={{"padding": "40px", "height": "90vh"}}>
          <ContactList setActiveContact={setActiveContact} activeContact={activeContact} isSmallScreen={smallScreen}></ContactList>
          <ContactView setActiveContact={setActiveContact} activeContact={activeContact} isSmallScreen={smallScreen}></ContactView>
        </Grid>
      </div>
    // </ThemeProvider>
  );
}

export default App;
