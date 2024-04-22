import React from 'react';
import { TextField,Paper, Button, Box, Typography, Container } from '@mui/material';
import {makeStyles} from '@mui/styles';
import { useState } from 'react';
import { toast ,ToastContainer} from 'react-toastify';

const useStyles=makeStyles(()=>({
    paper_simplelogin: {
        marginTop: '8rem',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }, 
      form_simmplelogin:{
        width: '100%',
        marginTop: '1rem',
      },
      submit: {
        margin: '3rem 0 2rem',
      },
}))
const SimpleLogin = () => {
    const [email, setEmail] = useState('');
    const [password,setPassword]=useState('');

    const classes=useStyles();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailPattern.test(email)){
            toast.error("Invalid Email");
            return;

        }
      };
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper_simplelogin} elevation={3}>
        <Typography component="h1" variant="h5">
          Login 
        </Typography>
        <form className={classes.form_simmplelogin} onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            value={email}
            autoComplete="email"
            onChange={handleEmailChange}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          </form>
          <ToastContainer/>
      </Paper>
    </Container>
  );
};

export default SimpleLogin;
