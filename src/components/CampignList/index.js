import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import  CampignItems  from '../CampignItems';
import { useStyles } from './CampignListStyled';

export const CampignList = ({ rows = [], columns=[] }) => {
    const classes = useStyles();

    return (
       
        <Table className={classes.table} size="small">
            <TableHead>
                <TableRow className={classes.header}>
                    {columns.map((column,index)=>(
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
    );
}

export default CampignList;