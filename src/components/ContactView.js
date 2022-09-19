import * as React from 'react';
import { Grid, Paper } from '@mui/material';

import Button from '@mui/material/Button';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function ContactView(props) {
    // sx={{'position': {'md':'relative', 'xs':'absolute'}}}

    return (
        <Grid item xs={12} md={9} height="100">
            {props.activeContact ? (
                <Paper elevation={8} style={{"minHeight": "530px", "textAlign": "left", "padding": "10px"}}>
                    <Button variant="text" sx={{display: { 'xs':'block', 'md':'none' }}} onClick={()=>props.setActiveContact(null)}>Close</Button>
                    
                    <div style={{"width": "100%"}}>
                        <h1>{props.activeContact.name}</h1>
                        <p>{props.activeContact.company.name}</p>
                    </div>

                    <Grid container justifyContent="space-between" wrap='wrap'>
                        <Grid item md={5} xs={12}>
                            <p>Mobile Number</p>
                        </Grid>
                        <Grid item md={5} xs={12}>
                            <p>{props.activeContact.phone}</p>    
                        </Grid>
                    </Grid>

                    <Grid container justifyContent="space-between" wrap='wrap'>
                        <Grid item md={5} xs={12}>
                            <p>Email</p>
                        </Grid>
                        <Grid item md={5} xs={12}>
                            <p>{props.activeContact.email}</p>    
                        </Grid>
                    </Grid>

                    <Grid container justifyContent="space-between" wrap='wrap'>
                        <Grid item md={5} xs={12}>
                            <p>Address</p>
                        </Grid>
                        <Grid item md={5} xs={12}>
                            <Paper style={{"padding": "1px 20px", "backgroundColor": "rgb(235, 235, 235)"}}>
                                <p>{props.activeContact.address.street}</p>
                                <p>{props.activeContact.address.suite}</p>
                                <p>{props.activeContact.address.city}</p>
                                <p>{props.activeContact.address.zipcode}</p>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Grid container justifyContent="space-between" wrap='wrap'>
                        <Grid item md={5} xs={12}>
                            <p>Website</p>
                        </Grid>
                        <Grid item md={5} xs={12}>
                            <p>{props.activeContact.website}</p>    
                        </Grid>
                    </Grid>
                </Paper>
            ) : (
                // <p>select a contact</p>
                <>
                </>
            )}

        {/* <Grid item xs={9} height="100">
            {props.smallScreen ? (
                    <>
                    </>
            ) : (
                props.activeContact ? (
                    <Paper elevation={8} style={{"height": "530px", "textAlign": "left", "padding": "10px"}}>
                        <>
                            <div style={{"width": "100%"}}>
                                <h1>{props.activeContact.name}</h1>
                                <p>{props.activeContact.company.name}</p>
                            </div>

                            <Grid container justifyContent="space-between" wrap='wrap'>
                                <Grid item md={5} xs={12}>
                                    <p>Mobile Number</p>
                                </Grid>
                                <Grid item md={5} xs={12}>
                                    <p>{props.activeContact.phone}</p>    
                                </Grid>
                            </Grid>

                            <Grid container justifyContent="space-between" wrap='wrap'>
                                <Grid item md={5} xs={12}>
                                    <p>Email</p>
                                </Grid>
                                <Grid item md={5} xs={12}>
                                    <p>{props.activeContact.email}</p>    
                                </Grid>
                            </Grid>

                            <Grid container justifyContent="space-between" wrap='wrap'>
                                <Grid item md={5} xs={12}>
                                    <p>Address</p>
                                </Grid>
                                <Grid item md={5} xs={12}>
                                    <Paper style={{"padding": "1px 20px", "backgroundColor": "rgb(235, 235, 235)"}}>
                                        <p>{props.activeContact.address.street}</p>
                                        <p>{props.activeContact.address.suite}</p>
                                        <p>{props.activeContact.address.city}</p>
                                        <p>{props.activeContact.address.zipcode}</p>
                                    </Paper>
                                </Grid>
                            </Grid>

                            <Grid container justifyContent="space-between" wrap='wrap'>
                                <Grid item md={5} xs={12}>
                                    <p>Website</p>
                                </Grid>
                                <Grid item md={5} xs={12}>
                                    <p>{props.activeContact.website}</p>    
                                </Grid>
                            </Grid>
                        </>
                    </Paper>
                ) : (
                    <p>select a contact</p>
                )
            )}
            </Grid> */}

        </Grid>
    )
}

export default ContactView;