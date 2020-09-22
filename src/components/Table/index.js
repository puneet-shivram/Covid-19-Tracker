import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function BasicTable({data}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="simple table" stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>State</TableCell>
            <TableCell align="right">Confirmed</TableCell>
            <TableCell align="right">Active</TableCell>
            <TableCell align="right">Recovered</TableCell>
            <TableCell align="right">Deaths</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.statecode}>
              <TableCell component="th" scope="row">
                {row.state}
              </TableCell>
              <TableCell align="right">{row.confirmed}</TableCell>
              <TableCell align="right">{row.active}</TableCell>
              <TableCell align="right">{row.recovered}</TableCell>
              <TableCell align="right">{row.deaths}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}