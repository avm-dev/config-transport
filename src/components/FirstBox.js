import React, { useState } from 'react';

import { ExportButton } from './input/ExportButton';

import './FirstBox.css'

export const FirstBox = ({ data, handleExport }) => {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleCheckboxChange = (type, item) => {
      const index = selectedItems.findIndex(si => si.type === type && si.item === item);
      if (index === -1) {
        setSelectedItems([...selectedItems, { type, item }]);
      } else {
        setSelectedItems([...selectedItems.slice(0, index), ...selectedItems.slice(index + 1)]);
      }
    };
  
    return (
      <div className="first-box">
        {data.map(({ type, data }) => (
          <div key={type}>
            <h3>{type}</h3>
            {data.map(item => (
              <div key={item}>
                <input type="checkbox" onChange={() => handleCheckboxChange(type, item)} />
                <label>{item}</label>
              </div>
            ))}
          </div>
        ))}
        <ExportButton handleExport={() => handleExport(selectedItems)} />
      </div>
    );
  };