import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './InvoiceForm.css'


const InvoiceForm = () => {

  return (
    <div class="invoice_root">
      <header>
        <center>
        <Typography variant="h5">INVOICE</Typography>

        </center>
        <div>
          <Typography variant="body1">Rajkumar Indian</Typography>
          <Typography variant="body1">Doddbomsandra Arch</Typography>
          <Typography variant="body1">Bengaluru</Typography>
          <Typography variant="body1">+917259785184</Typography>
        </div>
      </header>
      <main>
        <article>
          <p>
            <Typography variant="body1">Care4Edu </Typography>
          </p>
          <Paper elevation={3}>
            <Table class="table">
              <TableHead>
                <TableRow>
                  <TableCell>Invoice #</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Amount Due</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>101138</TableCell>
                  <TableCell>January 1, 2012</TableCell>
                  <TableCell>$600.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
          <br></br>
          <Paper elevation={3}>
            <Table class="table">
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Rate</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Front End Consultation</TableCell>
                  <TableCell>Experience Review</TableCell>
                  <TableCell>$150.00</TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>$600.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
          <br></br>
          <Paper elevation={3}>
            <Table class="table">
              <TableBody>
                <TableRow>
                  <TableCell>Total</TableCell>
                  <TableCell>$600.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Amount Paid</TableCell>
                  <TableCell>$0.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Balance Due</TableCell>
                  <TableCell>$600.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </article>
        <br></br>
        <aside>
          <Typography variant="h6" id="notes">Additional Notes</Typography>
          <div>
            <Typography variant="body2">A finance charge of 1.5% will be made on unpaid balances after 30 days.</Typography>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default InvoiceForm;
