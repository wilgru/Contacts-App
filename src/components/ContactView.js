import { useState, useEffect } from 'react';
import { Grid, Paper } from '@mui/material';

import Button from '@mui/material/Button';

function ContactView(props) {
    const [display, setDisplay] = useState(props.activeContact ? 'block' : 'none');

    //
    useEffect(() => {
        setDisplay(props.activeContact ? 'block' : 'none')
    }, [props.activeContact]);

    return (
        <Grid item xs={12} md={9} height="100" sx={{display: { 'xs':display, 'md':'block' }}}>
            {props.activeContact ? (
                <Paper elevation={8} style={{"minHeight": "530px", "textAlign": "left", "padding": "10px"}}>
                    <Button variant="text" sx={{display: { 'xs':'block', 'md':'none' }}} onClick={()=>props.setActiveContact(null)}>Close</Button>
                    
                    <div style={{"width": "100%"}}>
                        <h1>{props.activeContact.name}</h1>
                        <p>{props.activeContact.company.name}</p>
                    </div>

                    <Grid className="contact-view-item" container justifyContent="space-between" wrap='wrap'>
                        <Grid item md={6} xs={12}>
                            <p>Mobile Number</p>
                        </Grid>
                        <Grid item md={6} xs={12} alignItems="center">
                            <a href = {`tel:${props.activeContact.phone}`}>{props.activeContact.phone}</a> 
                        </Grid>
                    </Grid>

                    <Grid className="contact-view-item" container justifyContent="space-between" wrap='wrap'>
                        <Grid item md={6} xs={12}>
                            <p>Email</p>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <a href = {`mailto: ${props.activeContact.email}`}>{props.activeContact.email}</a> 
                        </Grid>
                    </Grid>

                    <Grid className="contact-view-item" container justifyContent="space-between" wrap='wrap'>
                        <Grid item md={6} xs={12}>
                            <p>Address</p>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Paper className="contact-address-item">
                                <p>{props.activeContact.address.street}</p>
                                <p>{props.activeContact.address.suite}</p>
                                <p>{props.activeContact.address.city}</p>
                                <p>{props.activeContact.address.zipcode}</p>
                            </Paper>
                        </Grid>
                        <Grid item md={2} xs={0}>

                        </Grid>
                    </Grid>

                    <Grid className="contact-view-item" container justifyContent="space-between" wrap='wrap'>
                        <Grid item md={6} xs={12}>
                            <p>Website</p>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <a href = {props.activeContact.website}>{props.activeContact.website}</a>  
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