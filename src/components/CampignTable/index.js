import React from "react";
import PropTypes from 'prop-types';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CampignItems from "../CampignItems";
import { useStyles } from "./styled";

export const CampignTable = ({ rows = [], columns = [] }) => {
  const classes = useStyles();

  return (
    <>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow className={classes.header}>
            {columns.map((column, index) => (
              <TableCell key={index}>{column.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <CampignItems row={row} key={index} />
          ))}
        </TableBody>
      </Table>
      {rows.length == 0 && (
        <div className={classes.datanotfound}>Campign not available !</div>
      )}
    </>
  );
};

CampignTable.propTypes = {
  row:PropTypes.array.isRequired,
  columns:PropTypes.array.isRequired
}

export default CampignTable;
