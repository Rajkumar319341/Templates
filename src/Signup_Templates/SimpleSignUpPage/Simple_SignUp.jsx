import React, { useState } from 'react';
import { Paper, TextField, Button, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import './SignUpStyles.css';
import { toast,ToastContainer} from 'react-toastify';

const useStyles = makeStyles(() => ({
    paper_simplesignup: {
    marginTop: '8rem',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form_simmplesignup: {
    width: '100%',
    marginTop: '1rem',
  },
  submit: {
    margin: '3rem 0 2rem',
  },
}));

const SimpleSignUp = () => {
  const [Email, setEmail]=useState('');
  const [name,setName]=useState('');
  const [password,setPassword]=useState('');
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(Email)){
      toast.error("Invalid Email");
      return;
    }
  };

  const handleEmailChange=(e)=>{
    setEmail(e.target.value);
  }

  const handlePasswordChange=(e)=>{
    setPassword(e.target.value);
  }

  const handleNameChange=(e)=>{
    setName(e.target.value);
  }
   
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper_simplesignup} elevation={3}>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form_simmplesignup} onSubmit={handleSubmit}>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            value={name}
            autoComplete="name"
            onChange={handleNameChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleEmailChange}
            value={Email}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            value={password}
            onChange={handlePasswordChange}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <br></br>
          <br></br>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
        <ToastContainer/>
      </Paper>
    </Container>
  );
};

export default SimpleSignUp;
