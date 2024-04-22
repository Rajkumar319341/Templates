import React from 'react';
import { Container, Box, Grid, Typography, TextField, FormControlLabel, Checkbox, Radio, RadioGroup, FormControl, FormLabel, Button, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './FeedbackForm.css';

export const FeedbackForm = () => {
    const defaultTheme = createTheme();

    return (
        <div className='feedback_root'>
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="md">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Paper elevation={3} className="paper">
                        <form>
                            <Typography variant="h5" align="center" gutterBottom>
                                Feedback Form
                            </Typography>
                            <Grid container spacing={3} padding={2}>
                                <Grid item xs={12}>
                                    <TextField className="field" label="Full Name" fullWidth variant="outlined" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField className="field" label="Email Address" fullWidth variant="outlined" />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">Is this your first time visiting the website?</FormLabel>
                                        <RadioGroup row>
                                            <FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" />
                                            <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField className="field" label="Reason for visiting" multiline rows={4} fullWidth variant="outlined" />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">Did you find what you needed?</FormLabel>
                                        <Grid container>
                                            <Grid item xs={4}>
                                                <FormControlLabel control={<Checkbox color="primary" />} label="Yes, all of it" />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <FormControlLabel control={<Checkbox color="primary" />} label="Yes, some of it" />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <FormControlLabel control={<Checkbox color="primary" />} label="No, none of it" />
                                            </Grid>
                                        </Grid>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">User Friendliness</FormLabel>
                                        <RadioGroup row>
                                            {[1, 2, 3, 4, 5].map((value) => (
                                                <FormControlLabel key={value} value={String(value)} control={<Radio color="primary" />} label={String(value)} />
                                            ))}
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" color="primary" fullWidth>
                                        Send your feedback
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Box>
            </Container>
        </ThemeProvider>
        </div>
    );
};

export default FeedbackForm;
