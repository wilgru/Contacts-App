import * as React from 'react';
import { Grid, Paper } from '@mui/material';
import axios from 'axios';

function ContactView(props) {


    return (
        <Grid item xs={9} height="100">
            <Paper elevation={8} style={{"height": "530px", "textAlign": "left", "padding": "10px"}}>
                    {props.activeContact ? (
                        <>
                            <h1>{props.activeContact.name}</h1>
                            <p>{props.activeContact.phone}</p>
                        </>
                    ) : (
                        <p>select a contact</p>
                    )}
            </Paper>
        </Grid>
    )
}

export default ContactView;