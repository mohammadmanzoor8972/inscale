import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import { TextField, InputAdornment } from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { format, isValid, isAfter } from "date-fns";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const CampignFilters = ({ onChange }) => {
  const [filter, setFilter] = useState({
    name: "",
    startDate: null,
    endDate: null
  });

  useEffect(() => {
    onChange(filter);
  }, [filter]);

  const textChangeHandler = event => {
    const value = event.currentTarget.value;
    setFilter({ ...filter, name: value.toLowerCase() });
  };

  const startDateChangeHandler = date => {
    const value = date;
    if (isValid(value)) {
      setFilter({ ...filter, startDate: format(value, "MM/dd/yyyy") });
    } else {
      setFilter({ ...filter, startDate: null });
    }
  };

  const endDateChangeHandler = date => {
    const value = date;
    if (isAfter(new Date(value), new Date(filter.startDate))) {
      if (filter.startDate && isValid(value)) {
        setFilter({ ...filter, endDate: format(value, "MM/dd/yyyy") });
      } else {
        setFilter({ ...filter, endDate: null });
      }
    } else {
      alert("End date should be greater than start date !");
      setFilter({ ...filter, endDate: null });
    }
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container>
        <Grid item sm={4}>
          <DatePicker
            invalidDateMessage
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            label="Start Date"
            value={filter.startDate}
            onChange={startDateChangeHandler}
            animateYearScrolling
          />
        </Grid>
        <Grid item sm={4}>
          <DatePicker
            invalidDateMessage
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            label="End Date"
            value={filter.endDate}
            onChange={endDateChangeHandler}
            animateYearScrolling
          />
        </Grid>
        <Grid item sm={4}>
          <TextField
            id="input-with-icon-textfield"
            label="Search"
            margin="normal"
            onChange={textChangeHandler}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

CampignFilters.propTypes = {
    onChange : PropTypes.func
}

export default CampignFilters;
