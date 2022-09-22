import { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Button, Divider } from '@mui/material';

// import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';

function ContactView(props) {
    const [display, setDisplay] = useState(props.activeContact ? 'block' : 'none');

    //
    useEffect(() => {
        setDisplay(props.activeContact ? 'block' : 'none')
    }, [props.activeContact]);

    return (
        <Grid item xs={12} md={9} sx={{display: { 'xs':display, 'md':'block' }}}>
            {props.activeContact ? (
                <Paper elevation={3} sx={{minHeight: "100%", textAlign: "left", padding: "10px"}}>
                    <Button 
                        variant="text" 
                        sx={{display: { 'xs':'block', 'md':'none' }}} 
                        onClick={()=>props.setActiveContact(null)}
                    >
                        Close
                    </Button>
                    
                    <Grid className="contact-view-item" container flexDirection="column" justifyContent="space-between" wrap='wrap'>
                        <Typography variant='h3'>{props.activeContact.name}</Typography>
                        <Typography variant='p'>{props.activeContact.company.name}</Typography>
                    </Grid>

                    <Divider variant="middle" sx={{margin:'0'}}/>

                    <Grid className="contact-view-item" container justifyContent="space-between" wrap='wrap'>
                        <Grid item md={6} xs={12}>
                        <Typography variant='p'>Mobile Number</Typography>
                        </Grid>
                        <Grid item md={6} xs={12} alignItems="center">
                            <a href = {`tel:${props.activeContact.phone}`}>{props.activeContact.phone}</a> 
                        </Grid>
                    </Grid>

                    <Divider variant="middle" sx={{margin:'0'}}/>

                    <Grid className="contact-view-item" container justifyContent="space-between" wrap='wrap'>
                        <Grid item md={6} xs={12}>
                            <Typography variant='p'>Email</Typography>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <a href = {`mailto: ${props.activeContact.email}`}>{props.activeContact.email}</a> 
                        </Grid>
                    </Grid>

                    <Divider variant="middle" sx={{margin:'0'}}/>

                    <Grid className="contact-view-item" container justifyContent="space-between" wrap='wrap'>
                        <Grid item md={6} xs={12}>
                            <Typography variant='p'>Address</Typography>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Paper sx={{backgroundColor: 'primary.light', padding: '10px 10px'}}>
                                <Typography sx={{margin: '12px 0'}} variant='p'>{props.activeContact.address.street}</Typography><br></br>
                                <Typography sx={{margin: '12px 0'}} variant='p'>{props.activeContact.address.suite}</Typography><br></br>
                                <Typography sx={{margin: '12px 0'}} variant='p'>{props.activeContact.address.city}</Typography><br></br>
                                <Typography sx={{margin: '12px 0'}} variant='p'>{props.activeContact.address.zipcode}</Typography><br></br>
                            </Paper>
                        </Grid>
                        <Grid item md={2} xs={0}>

                        </Grid>
                    </Grid>

                    <Divider variant="middle" sx={{margin:'0'}}/>

                    <Grid className="contact-view-item" container justifyContent="space-between" wrap='wrap'>
                        <Grid item md={6} xs={12}>
                            <Typography variant='p'>Website</Typography>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <a href = {props.activeContact.website}>{props.activeContact.website}</a>  
                        </Grid>
                    </Grid>
                </Paper>
            ) : (
                <>
                </>
            )}
        </Grid>
    )
}

export default ContactView;