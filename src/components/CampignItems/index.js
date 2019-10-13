import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { format } from 'date-fns';
import { useStyles } from './syled';

const CampignItems=({row})=>{   
    const classes = useStyles();
    
    const isActive=()=>{
        const {startDate, endDate} = row;

        var fDate,lDate,cDate;
        fDate = Date.parse(startDate);
        lDate = Date.parse(endDate);
        cDate = Date.now();
    
        if((cDate <= lDate && cDate >= fDate)) {
            return 'Active';
        }
        return 'inActive';
    }

    return(
        <TableRow>
            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="left">
                {format(Date.parse(row.startDate), 'MM/dd/yyyy')}
            </TableCell>
            <TableCell align="left">
            {format(Date.parse(row.endDate), 'MM/dd/yyyy')}
            </TableCell>
            <TableCell align="left" >
                <FiberManualRecordIcon className={classes[isActive()]}/>
                <span className={classes.label}>{isActive()}</span> 
                </TableCell>
            <TableCell align="left">{row.budget}</TableCell>
      </TableRow>
    )
}

export default CampignItems;