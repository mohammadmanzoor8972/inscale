import React from 'react';
import ReactDOM from 'react-dom';
import CampignFilters from './index';


  
it('renders without crashing', () => {
    const onChange=()=>{

    }
  const div = document.createElement('div');
  ReactDOM.render(<CampignFilters onChange={onChange}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
