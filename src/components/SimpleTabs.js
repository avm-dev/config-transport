import React, { useEffect, useState } from "react";
// import "./styles.css";

function SimpleTabs({data}) {
  const [activeTab, setActiveTab] = useState(data?.[0]?.type);

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
                  />
                  {item}
                </label>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default SimpleTabs;