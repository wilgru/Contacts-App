import { useState, useEffect } from 'react';
import { Grid, Paper, Typography, List, ListItemText, ListItemButton, ListItem } from '@mui/material';
import axios from 'axios';

function ContactList(props) {
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [users, setUsers] = useState(null);
    const [display, setDisplay] = useState(props.activeContact ? 'none' : 'block');

    // update disaply value whenever a contact has been selected/ is active
    useEffect(() => {
        setDisplay(props.activeContact ? 'none' : 'block');
    }, [props.activeContact]);

    // hanldet for clicking a list item, sets user and highlights the item in the list
    const handleListItemClick = (event, index, user) => {
      setSelectedIndex(index);
      props.setActiveContact(user);
    };
  
    // update selected index to highlight the item in the list
    useEffect(() => {
        if (props.activeContact === null) {
            setSelectedIndex(null);
        }
    }, [props.activeContact]);

    // get users from JSON placeholder API and set it to users state
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            setUsers(response.data);
        });
    }, []);

    return (
        <Grid item xs={12} md={3} sx={{display: { xs:display, md:'block' }}}>
            {
                !users ? (
                    <Typography variant='h4'>
                        loading
                    </Typography>
                ) : (
                    <Paper elevation={8} sx={{minHeight: "100%", overflow: 'auto', padding: "10px"}}>
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
                                <Typography variant='p' className="list-summary">{users.length} Contacts</Typography>
                            </ListItem>
                        </List>
                    </Paper>
                )
            }
        </Grid>
    )
}

export default ContactList;