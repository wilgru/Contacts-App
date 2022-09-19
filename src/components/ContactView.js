import * as React from 'react';
import { Grid, Paper } from '@mui/material';

import Button from '@mui/material/Button';

function ContactView(props) {
    const display = props.activeContact ? 'block' : 'none'

    return (
        <Grid item xs={12} md={9} height="100" sx={{display: { 'xs':display, 'md':'block' }}}>
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
        </Grid>
    )
}

export default ContactView;