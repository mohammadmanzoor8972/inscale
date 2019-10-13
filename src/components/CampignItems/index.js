import React from "react";
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
      <TableCell align="left">{row.budget}</TableCell>
    </TableRow>
  );
};

export default CampignItems;
