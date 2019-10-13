
import React, {useState} from 'react';
import Header from './components/Header/';
import Campign from './components/Campign/';

const App=()=> {
  const [data, setData] = useState([]);

  window.AddCampaigns = function(newData=[]){
    const datas = [...data, ...newData];
    setData(datas);
  }

  return (
    <>
      <Header/>
      <Campign data={data}/>
    </>
  );
}
export default App;