import './App.css';
import { useState } from 'react';

import { Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import ContactList from './components/ContactList'
import ContactView from './components/ContactView'

const theme = createTheme({
  palette: {
    primary: {
      light: 'rgba(255, 140, 0, 0.08)',
      main: 'rgb(255, 140, 0)',
      dark: 'rgb(161, 81, 11)',
      contrastText: '#fff',
    }
  }
});

function App() {
  const [activeContact, setActiveContact] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{"display": "flex", "flexDirection": "column", "height": "100vh"}}>
        <div style={{"display": "flex", "alignItems": "center"}}>
          <Grid container spacing={2} sx={{"padding": "40px", "height": "90vh"}}>
            <Grid item xs={12}>
              <Typography variant='h4' sx={{textAlign:{xs:"center", md:"left"}}}>Contacts</Typography>
            </Grid>
            <ContactList setActiveContact={setActiveContact} activeContact={activeContact}></ContactList>
            <ContactView setActiveContact={setActiveContact} activeContact={activeContact}></ContactView>
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
