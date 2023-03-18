import React, { useState } from 'react';
import './SecondBox.css'
import axios from 'axios';


export const SecondBox = ({ exportedItems }) => {
    const groupedItems = exportedItems.reduce((groups, item) => {
      const { type, item: itemName } = item;
      if (!groups[type]) {
        groups[type] = [];
      }
      groups[type].push(itemName);
      return groups;
    }, {});

    const handleSubmit = async () => {
        await axios.post('url', exportedItems);
    }
  
    return (
        <div className="second-box">
          {Object.entries(groupedItems).map(([type, items]) => (
            <div key={type}>
              <h3>{type}</h3>
              {items.map(item => (
                <div key={`${type}-${item}`}>
                  <input type="checkbox" checked readOnly />
                  <label>{item}</label>
                </div>
              ))}
            </div>
          ))}
            <button className='transport-button' onClick={handleSubmit}>Transport</button>
        </div>

      );
  };