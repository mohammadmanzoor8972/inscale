import React from 'react';
import ReactDOM from 'react-dom';
import CampignList from './index';
import { COLUMNS } from '../Campign/index';

const data  =[{
    name: 'Sunny',
    startDate: '08/Jan/2006',
    endDate: '04/10/2019',
    active: "inActive",
    budget: 3000,
  }]
  
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CampignList rows={data} columns={COLUMNS}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
