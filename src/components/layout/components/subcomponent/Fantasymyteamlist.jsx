import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import rows from "./Fdrtabletempdata";



export default () => (
  <div>
    <Paper className="" >
      <Table >
        <TableHead>
          <TableRow>
            
            <TableCell>Team</TableCell>
            <TableCell numeric>GW34 1 May</TableCell>
            <TableCell numeric>GW35 8 May</TableCell>
            <TableCell numeric>GW36 12 May</TableCell>
            <TableCell numeric>GW37 15 May</TableCell>
            <TableCell numeric>GW38 23 May</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ id, name, calories, fat, carbs, protein }) => (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                <img src="./t1.png" />
                Chelsian
              </TableCell>
              <TableCell numeric>NEW (A)</TableCell>
              <TableCell numeric>{fat}</TableCell>
              <TableCell numeric>{carbs}</TableCell>
              <TableCell numeric>{protein}</TableCell>
              <TableCell numeric>BHA (H)</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);
