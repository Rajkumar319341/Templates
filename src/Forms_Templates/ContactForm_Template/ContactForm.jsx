import React, { useState } from 'react';
import { Grid, TextField,Paper, FormControlLabel, Checkbox, RadioGroup, FormControl, FormLabel, Radio, Button, Typography, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    company: '',
    phoneNumber: '',
    projectWebsiteUrl: '',
    services: [],
    startTimeline: '',
    budget: '',
    projectDescription: '',
    heardAboutUs: '',
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked ? value : (Array.isArray(prevData[name]) ? [...prevData[name], value] : value),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const defaultTheme = createTheme();

  return (
    <div className='contact_root' style={{backgroundColor:"rgb(145, 211, 241)"}}>
    <center>
    <Paper elevation={3} style={{width:"fit-content", alignContent:"center",alignItems:"center"}}>

    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="md" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <form onSubmit={handleSubmit}>
            <center>
            <Typography variant='h5' marginBottom={4}> Contact Form </Typography>

            </center>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Email Address" name="emailAddress" value={formData.emailAddress} onChange={handleChange} type="email" />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Your Company" name="company" value={formData.company} onChange={handleChange} />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} type="tel" />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  How Can We Help?
                </Typography>
                <FormControlLabel
                  control={<Checkbox checked={formData.services.includes('Strategy')} onChange={handleChange} name="services" value="Strategy" />}
                  label="Strategy"
                />
                <FormControlLabel
                  control={<Checkbox checked={formData.services.includes('UX Design')} onChange={handleChange} name="services" value="UX Design" />}
                  label="UX Design"
                />
                <FormControlLabel
                  control={<Checkbox checked={formData.services.includes('Development')} onChange={handleChange} name="services" value="Development" />}
                  label="Development"
                />
                <FormControlLabel
                  control={<Checkbox checked={formData.services.includes('Training')} onChange={handleChange} name="services" value="Training" />}
                  label="Training"
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <Typography  variant="h6" gutterBottom>How Soon Do We Start?</Typography>
                  <RadioGroup row aria-label="start timeline" name="startTimeline" value={formData.startTimeline} onChange={handleChange}>
                    <FormControlLabel value="Immediately" control={<Radio />} label="Immediately" />
                    <FormControlLabel value="1-3 Months" control={<Radio />} label="1-3 Months" />
                    <FormControlLabel value="3-6 Months" control={<Radio />} label="3-6 Months" />
                    <FormControlLabel value="6-9 Months" control={<Radio />} label="6-9 Months" />
                    <FormControlLabel value="10-12 Months" control={<Radio />} label="10-12 Months" />

                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Project Website URL" name="projectWebsiteUrl" value={formData.projectWebsiteUrl} onChange={handleChange} />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Give Us a Rough Idea About Your Budget" name="budget" value={formData.budget} onChange={handleChange} />
              </Grid>

              <Grid item xs={12}>
                <TextField fullWidth label="Tell Us About Your Project" name="projectDescription" value={formData.projectDescription} onChange={handleChange} multiline rows={4} />
              </Grid>

              <Grid item xs={12}>
                <Button variant='contained' type="submit">Submit</Button>
              </Grid>
            </Grid>
          </form>

        </Box>

        <Box mt={5}>
          <Copyright />
        </Box>

      </Container>
    </ThemeProvider>
    </Paper>
    </center>
    </div>
  )
}
export default ContactForm;

