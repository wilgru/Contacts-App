import * as React from 'react';
import { Grid, Paper } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function ContactView(props) {


    return (
        <Grid item xs={9} height="100">
            <Paper elevation={8} style={{"height": "530px", "textAlign": "left", "padding": "10px"}}>
                    {props.activeContact ? (
                        <>
                            <div style={{"width": "100%"}}>
                                <h1>{props.activeContact.name}</h1>
                                <p>{props.activeContact.company.name}</p>
                            </div>

                            <Grid container justifyContent="space-between" wrap='wrap'>
                                <Grid item xs={5}>
                                    <p>Mobile Number</p>
                                </Grid>
                                <Grid item xs={5} align="right">
                                    <p>{props.activeContact.phone}</p>    
                                </Grid>
                            </Grid>

                           <div style={{"width": "100%", "display": "flex", "justifyContent": "space-between"}}>
                                <div component="th" scope="row">
                                    <p>Email</p>
                                </div>
                                <div align="right" style={{"width": "50%"}}>
                                    <p>{props.activeContact.email}</p>    
                                </div>
                            </div>

                           <div style={{"width": "100%", "display": "flex", "justifyContent": "space-between"}}>
                                <div component="th" scope="row">
                                    <p>Address</p>
                                </div>
                                <div align="right" style={{"width": "50%"}}>
                                    <Paper style={{"padding": "1px 20px", "backgroundColor": "rgb(235, 235, 235)"}}>
                                        <p>{props.activeContact.address.street}</p>
                                        <p>{props.activeContact.address.suite}</p>
                                        <p>{props.activeContact.address.city}</p>
                                        <p>{props.activeContact.address.zipcode}</p>
                                    </Paper>
                                </div>
                            </div>

                           <div style={{"width": "100%", "display": "flex", "justifyContent": "space-between"}}>
                                <div component="th" scope="row">
                                    <p>Website</p>
                                </div>
                                <div align="right" style={{"width": "50%"}}>
                                    <p>{props.activeContact.website}</p>    
                                </div>
                            </div>
                        </>
                    ) : (
                        <p>select a contact</p>
                    )}
            </Paper>
        </Grid>
    )
}

export default ContactView;