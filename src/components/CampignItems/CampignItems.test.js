import React from 'react';
import ReactDOM from 'react-dom';
import CampignItems from './index';

const row = {
    name: 'Sunny',
    startDate: '08/Jan/2006',
    endDate: '04/10/2019',
    active: "inActive",
    budget: 3000,
  }
  
it('renders without crashing', () => {
  const tr = document.createElement('tbody');
  ReactDOM.render(<CampignItems row={row}/>, tr);
  ReactDOM.unmountComponentAtNode(tr);
});
