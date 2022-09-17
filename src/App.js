import './App.css';
import * as React from 'react';

import { Grid, Paper } from '@mui/material';

import axios from 'axios';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ThemeProvider from '@mui/material';

function App() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const [users, setUsers] = React.useState(null);

  React.useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      setUsers(response.data);
      console.log(users)
    });
  }, []);

  // if (!users) return null;

  return (
    // <ThemeProvider theme={theme}>
      <div className="App" style={{"display": "flex", "alignItems": "center", "height": "100vh"}}>
        <Grid container spacing={2} style={{"padding": "40px", "height": "90vh"}}>
          <Grid item xs={3}>
            {
              !users ? (
                <h1>
                  loading
                </h1>
              ) : (
                <Paper elevation={3} style={{"height": "100%"}}>
                  <TextField
                    id="standard-search"
                    label="Search field"
                    type="search"
                    variant="standard"
                    style={{"width": "90%", "marginTop": "5px"}}
                  />
                  <List dense={false}>
                    {users.map((element, index) => 
                      <ListItemButton
                        selected={selectedIndex === index}
                        onClick={(event) => handleListItemClick(event, index)}
                      >
                        <ListItemText primary={element.name}/>
                      </ListItemButton>
                    )
                    }
                  </List>
                </Paper>
              )
            }
          </Grid>
          <Grid item xs={9} height="100">
            <Paper elevation={3} style={{"height": "100%"}}>
              sdfjsnsernsin
            </Paper>
          </Grid>
        </Grid>
      </div>
    // </ThemeProvider>
  );
}

export default App;
