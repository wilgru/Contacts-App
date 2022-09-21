import { useState, useEffect } from 'react';
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
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [users, setUsers] = useState(null);
    const [display, setDisplay] = useState(props.activeContact ? 'none' : 'block');

    //
    useEffect(() => {
        setDisplay(props.activeContact ? 'none' : 'block');
    }, [props.activeContact]);

    //
    const handleListItemClick = (event, index, user) => {
      setSelectedIndex(index);
      props.setActiveContact(user);
    };
  
    // 
    useEffect(() => {
        if (props.activeContact === null) {
            setSelectedIndex(null);
        }
    }, [props.activeContact]);

    // 
    useEffect(() => {
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
                            <ListItem> 
                                <p className="list-summary">{users.length} Contacts</p>
                            </ListItem>
                        </List>
                    </Paper>
                )
            }
        </Grid>
    )
}

export default ContactList;