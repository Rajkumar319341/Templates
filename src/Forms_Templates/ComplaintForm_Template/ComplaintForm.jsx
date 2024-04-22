import React from 'react';
import { Grid, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import './ComplaintForm.css';

const ComplaintForm = () => {

  return (

    <div className='complaint_root'>
      <div className="center-container">
        <Grid container spacing={2} className="complaint-form-container">
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell colSpan={2} align="center">
                      <h2>Customer Information</h2>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell><TextField fullWidth label="Customer Name" /></TableCell>
                    <TableCell><TextField fullWidth label="Customer Phone" /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><TextField fullWidth label="Contact Name" /></TableCell>
                    <TableCell><TextField fullWidth label="Customer Address" /></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell colSpan={2} align="center">
                      <h2>Complaint Information</h2>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell><TextField fullWidth label="Complaint Date" /></TableCell>
                    <TableCell><TextField fullWidth label="Complaint Details" /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><TextField fullWidth label="Suspected Cause" /></TableCell>
                    <TableCell><TextField fullWidth label="Corrective Action Persons" /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><TextField fullWidth label="Corrective Action Follow-up" /></TableCell>
                    <TableCell><TextField fullWidth label="What stage should be considered to avoid a repeat of the problem" /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><TextField fullWidth label="date" /></TableCell>
                    <TableCell><TextField fullWidth label="Priority" /></TableCell>
                  </TableRow>

                </TableBody>

              </Table>


<br></br>
              <center>
                <button variant="contained" size='small' className="Complaint_Button">Submit</button>
              </center>



            </TableContainer>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ComplaintForm;
