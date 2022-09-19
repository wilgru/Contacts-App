import * as React from 'react';
import { Grid, Paper } from '@mui/material';
import axios from 'axios';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';

function ContactList(props) {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [users, setUsers] = React.useState(null);

    const display = props.activeContact ? 'none' : 'block'

    const handleListItemClick = (event, index, user) => {
      setSelectedIndex(index);
      props.setActiveContact(user);
    };
  
    React.useEffect(() => {
        if (props.activeContact === null) {
            setSelectedIndex(null);
        }
    }, [props.activeContact]);

    React.useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            setUsers(response.data);
            console.log(users)
        });
    }, []);

    return (
        <Grid item xs={12} md={3} sx={{display: { 'xs':display, 'md':'block' }}}>
            {
                !users ? (
                    <h1>
                        loading
                    </h1>
                ) : (
                    <Paper elevation={3} style={{"height": "100%", overflow: 'auto'}}>
                        
                        <List dense={false}>
                        {users.map((user, index) => 
                            <ListItemButton
                            selected={selectedIndex === index}
                            onClick={(event) => handleListItemClick(event, index, user)}
                            >
                            <ListItemText primary={user.name}/>
                            </ListItemButton>
                        )
                        }
                        </List>
                    </Paper>
                )
            }
        </Grid>
    )
}

export default ContactList;