import React, {useState, useEffect} from 'react';
import  CampignList  from '../CampignList';
import  CampignFilters  from '../CampignFilters/';
import { Paper } from '@material-ui/core';
import { useStyles } from './styled';

const COLUMNS = [
  { title: 'Name', field: 'name', filtering: false },
  { title: 'Start Date', field: 'startdate', type:'string' },
  { title: 'End Date', field: 'enddate', type:'string' },
  { title: 'Active', field: 'active', type: 'boolean',filtering: false },
  { title: 'Budget', field: 'budget', type: 'currency', filtering: false },
];

const Campign =({data})=> {
  const classes = useStyles();

  const [filterData, setFilterData] = useState(data);

  const onChangeHandler=(filterObj)=>{
console.log(filterObj)
    const dataFilter = [...data].filter((item)=>item.name.includes(filterObj.text) || item.startDate.includes(filterObj.start) );
    setFilterData(dataFilter);
  }

  useEffect(()=>{
    setFilterData(data);
  },[data])

    return(
      <Paper className={classes.root}>
        <CampignFilters 
          onChange={onChangeHandler}
        />
        <CampignList 
          rows={filterData} 
          columns={COLUMNS}
          />
      </Paper>
    )
}

export default Campign;