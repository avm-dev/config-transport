import React, { useEffect, useState } from 'react';
import { FirstBox } from './components/FirstBox';
import { SecondBox } from './components/SecondBox';
import { ExportButton } from './components/input/ExportButton';
import axios from 'axios';
import './App.css'

const items = [
  { type: 'resource', data: ['res1', 'res2', 'res3'] },
  { type: 'user', data: ['user1', 'user2', 'user3'] },
  { type: 'product', data: ['product1', 'product2', 'product3'] },
];

const App = () => {
  const [exportedItems, setExportedItems] = useState([]);
  const [data, setData] = useState([]);

  const handleExport = (selectedItems) => {
    setExportedItems(selectedItems);
  };

  useEffect(() => {axios.get('https://hack_inno-cheerful-springhare-yw.cfapps.us10-001.hana.ondemand.com/get/all')
  .then((resp) => setData(resp.data.data))}, [])

  return (
    <div className="container">
      <div className="box"> {
        <FirstBox data = {data} handleExport={handleExport} />
      }
      </div>
      <div className="box">
        <SecondBox exportedItems={exportedItems} />
      </div>
    </div>
  );
};

export default App;
