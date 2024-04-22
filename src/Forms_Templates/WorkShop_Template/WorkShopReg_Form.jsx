import React from 'react';
import { Grid, TextField, MenuItem, Button, Box, Typography,Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';
import './WorkShopReg_Form.css'

export const WorkShopReg_Form = () => {
  const countries = ['USA', 'Canada', 'UK', 'Australia','India','China']; 
  const states = ['Karnataka', 'Maharashtra','Tamil Nadu','Andhra Pradesh','Delhi' ];

  const defaultTheme = createTheme();

  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  return (
    <div className='workshop_root' style={{backgroundColor:"rgb(145, 211, 241)"}}>
    <center>
    <Paper elevation={3} style={{width:"fit-content", alignContent:"center",alignItems:"center"}}>

    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box sx={{ marginTop: 8, }}>
            <center>
            <Typography variant='h6'> WorkShop Registration Form</Typography>

            </center>
            <br></br>
            
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField label="First Name" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Last Name" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Company Name" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Address" multiline rows={3} fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="City" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField select label="State" fullWidth>
                {states.map((state) => (
                  <MenuItem key={state} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField select label="Country" fullWidth>
                {countries.map((country) => (
                  <MenuItem key={country} value={country}>
                    {country}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Email" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Phone Number" fullWidth />
            </Grid>
            <Grid item >

              <Button variant='contained' style={{width:"10rem"}}  >Submit</Button>
              </Grid>

          </Grid>
        </Box>
        <Box mt={5}>
          <Typography variant="body2" color="textSecondary" align="center">
            <Copyright />
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
    </Paper>
    </center>
    </div>
  );
}; 
