import React, { useEffect, useState } from "react";
// import "./styles.css";

function VerticalTabs({data, onSelectedDataChange}) {
  const [activeTab, setActiveTab] = useState(data?.[0]?.type);

  const [selectedItems, setSelectedItems] = useState(new Map());

  useEffect( () => {
    if (onSelectedDataChange) {
      onSelectedDataChange(selectedItems);
    }}, [selectedItems, onSelectedDataChange]);

  const handleSelectItem = (item, tab) => {
    const newSelectedItems = new Map(selectedItems);
    if (!newSelectedItems.has(tab)) {
      newSelectedItems.set(tab, new Set());
    }
    const itemsInTab = newSelectedItems.get(tab);
    if (itemsInTab.has(item)) {
      itemsInTab.delete(item);
    } else {
      itemsInTab.add(item);
    }
    setSelectedItems(newSelectedItems);
  };

  return (
    <div className="vertical-tabs">
      <div className="tabs">
        {data.map((tab) => (
          <div
            key={tab.type}
            className={`tab ${activeTab === tab.type ? "active" : ""}`}
            onClick={() => setActiveTab(tab.type)}
          >
            {tab.type}
          </div>
        ))}
      </div>
      <div className="panes">
        {data.map((tab) => (
          <ul
            key={tab.type}
            className="pane"
            style={{ display: activeTab === tab.type ? "block" : "none" }}
          >
            {tab.data.map((item) => (
              <li key={item.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={
                      selectedItems.has(tab.type) &&
                      selectedItems.get(tab.type).has(item)
                    }
                    onChange={() => handleSelectItem(item, tab.type)}
                  />
                  {item}
                </label>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div>
        <h2>Selected Items:</h2>
        <ul>
          {[...selectedItems].map(([tab, items]) => (
            <li key={tab}>
              <p>{tab}</p>
              <ul>
                {[...items].map((item) => (
                  <li key={item.id}>{JSON.stringify(item)}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VerticalTabs;