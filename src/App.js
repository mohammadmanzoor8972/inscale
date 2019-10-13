
import React, {useState} from 'react';
import HeaderNav from './components/HeaderNav/';
import Campign from './components/Campign/';


export default function App() {
  const [data, setData] = useState([]);

  window.AddCampaigns = function(newData=[]){
    const datas = [...data, ...newData];
    setData(datas);
  }

  return (
    <>
      <HeaderNav/>
      <Campign data={data}/>
    </>
  );
}