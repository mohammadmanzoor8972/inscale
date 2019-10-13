
import React, {useState, useEffect} from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { format } from 'date-fns';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';

const CampignFilters = ({onChange}) => {

    const [filter, setFilter] = useState({
        text:'',
        start:null,
        end:null
    })

    useEffect(()=>{
        onChange(filter)
    },[filter])

    const textChangeHandler=(event)=>{
        const value = event.currentTarget.value;
        setFilter({...filter, text:value})
      }
    
        
      const startDateChangeHandler=(date)=>{
       const value = date;
        setFilter({...filter, start:format(value, 'dd/MMM/yyyy')})
      }
    
      const endDateChangeHandler=(date)=>{
        const value = date;
        setFilter({...filter, end:format(value, 'dd/MMM/yyyy')})
      }

    return (

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container>
                <Grid item sm={4}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Start Date"
                        value={filter.start}
                        onChange={startDateChangeHandler}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
                <Grid item sm={4}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="End Date"
                        value={filter.end}
                        onChange={endDateChangeHandler}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
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
                            ),
                        }}
                    />
                </Grid>
            </Grid>
        </MuiPickersUtilsProvider>

    )
}

export default CampignFilters;