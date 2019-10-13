import React, { useState } from "react";
import Header from "./components/Header/";
import Campign from "./components/Campign/";

const App = () => {
  const [data, setData] = useState([
    {
      name: "Sunny",
      startDate: "08/Jan/2006",
      endDate: "04/10/2019",
      active: "inActive",
      budget: 3000
    }
  ]);

  window.AddCampaigns = function(newData = []) {
    const datas = [...data, ...newData];
    setData(datas);
  };

  return (
    <>
      <Header />
      <Campign data={data} />
    </>
  );
};
export default App;
