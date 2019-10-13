import React from "react";
import PropTypes from 'prop-types';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { format, isWithinInterval } from "date-fns";
import { useStyles } from "./syled";


const CampignItems = ({ row }) => {
  const classes = useStyles();

  const isActive = () => {
    const { startDate, endDate } = row;

    if (
      isWithinInterval(Date.now(), {
        start: new Date(startDate),
        end: new Date(endDate)
      })
    ) {
      return "Active";
    }
    return "inActive";
  };

  return (
    <TableRow>
      <TableCell align="left">{row.name}</TableCell>
      <TableCell align="left">
        {format(Date.parse(row.startDate), "MM/dd/yyyy")}
      </TableCell>
      <TableCell align="left">
        {format(Date.parse(row.endDate), "MM/dd/yyyy")}
      </TableCell>
      <TableCell align="left">
        <FiberManualRecordIcon className={classes[isActive()]} />
        <span className={classes.label}>{isActive()}</span>
      </TableCell>
      <TableCell align="left">{row.budget} USD</TableCell>
    </TableRow>
  );
};


CampignItems.propTypes = {
  row : PropTypes.shape({
    name: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    budget: PropTypes.number.isRequired
  })
};

export default CampignItems;
