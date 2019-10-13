import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import CampignTable from "../CampignTable";
import CampignFilters from "../CampignFilters/";
import { isWithinInterval } from "date-fns";
import { Paper } from "@material-ui/core";
import { useStyles } from "./styled";

export const COLUMNS = [
  { title: "Name", field: "name", filtering: false },
  { title: "Start Date", field: "startdate", type: "string" },
  { title: "End Date", field: "enddate", type: "string" },
  { title: "Active", field: "active", type: "boolean", filtering: false },
  { title: "Budget", field: "budget", type: "currency", filtering: false }
];

const Campign = ({ data }) => {
  const classes = useStyles();

  const [filterList, setFilterList] = useState(data);

  const onChangeHandler = filterObj => {
    console.log(filterObj);
    const dataFilter = [...data].filter(item => {
      if (
        item.name.toLowerCase().includes(filterObj.name) &&
        checkDate(filterObj.startDate, filterObj.endDate, item)
      ) {
        return true;
      }
      return false;
    });
    setFilterList(dataFilter);
  };

  const checkDate = (startDate, endDate, item) => {
    if (!startDate || !endDate) {
      return true;
    }

    if (
      isWithinInterval(new Date(item.startDate), {
        start: new Date(startDate),
        end: new Date(endDate)
      }) &&
      isWithinInterval(new Date(item.endDate), {
        start: new Date(startDate),
        end: new Date(endDate)
      })
    ) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    setFilterList(data);
  }, [data]);

  return (
    <Paper className={classes.root}>
      <CampignFilters onChange={onChangeHandler} />
      <CampignTable rows={filterList} columns={COLUMNS} />
    </Paper>
  );
};

Campign.propTypes = {
  data : PropTypes.array.isRequired
};

export default Campign;
