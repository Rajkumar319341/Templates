import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:'center',
    padding: theme.spacing(5),
    // backgroundColor:'rgb(145, 211, 241)'
  },
  paymentForm_container:{
    margin:theme.spacing(5),
    width:"600px"
  },
 [theme.breakpoints.down('sm')]:{
    paymentForm_container:{
        margin:theme.spacing(2
        ),
        width:"250px"
      
      },
 }
}));
export default function Payment_Form() {
  const classes = useStyles();
  return (
    <div className={classes.payment_body} style={{backgroundColor:'rgb(145, 211, 241)',height:'100vh'}}>
    <div className={classes.paperContainer}>
      <Paper elevation={3}>
        <center>
        <Typography variant="h6" gutterBottom>
          Payment method
        </Typography>
        </center>
       <br></br>
       <div className={classes.paymentForm_container}>
        <Grid container spacing={3}  >
          <Grid item xs={12} md={6}>
            <TextField  required id="cardName" label="Name on card" fullWidth autoComplete="cc-name" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              label="Card number"
              fullWidth
              autoComplete="cc-number"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField  required id="cardName" label="Name on card" fullWidth autoComplete="cc-name" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              label="Card number"
              fullWidth
              autoComplete="cc-number"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField  required id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth
              autoComplete="cc-csc"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveCard" value="yes" />}
              label="Remember credit card details for next time"
            />
          </Grid>
          <Button variant='contained'>Submit </Button>
        </Grid>
        </div>
      </Paper>
    </div>
    </div>
  );
}
