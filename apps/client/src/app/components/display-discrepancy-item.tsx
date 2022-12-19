import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import {DisplayDiscrepancyItemInterface} from "@sportradar-dcl/common";
import Button from "@mui/material/Button";
import {useState} from "react";


const DisplayDiscrepancyItem:
  React.FC<DisplayDiscrepancyItemInterface> = ({id, title, local, external}: DisplayDiscrepancyItemInterface) => {
  const [hide, setHide] =  useState(false);
  const [resolve, setResolved] =  useState(false);
  const handleReject = () => {
    setHide(!hide);
  }
  const handleResolve = () => {
    setResolved(!resolve);
  }
  return !hide ? (
    <>
      <Typography
        sx={{flex: '1 1 100%'}}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        id: {id}
      </Typography>
      <Typography variant="subtitle2" gutterBottom  component="div">
        {title}
      </Typography>
      <TableContainer component={Paper} className={resolve ? 'resolved': ''}>
        <Table sx={{minWidth: 650}} aria-label="simple table" >
          <TableHead>
            <TableRow>
              <TableCell>Local data</TableCell>
              <TableCell>External data</TableCell>
              <TableCell>Resolve / Reject</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
              <TableCell component="th" scope="row">
                {local}
              </TableCell>
              <TableCell>{external}</TableCell>
              <TableCell>
                <Button variant="contained" color="success" onClick={handleResolve}>
                  Resolve
                </Button>
                <Button variant="outlined" color="error" onClick={handleReject}>
                  Reject
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  ) : (<> </>);
}

export default DisplayDiscrepancyItem;
