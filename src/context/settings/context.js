import React, { useState } from "react";

export const SiteContext = React.createContext();

function Settings(props) {
  // isplay or Hide completed items (boolean)
  // Number of items to display per screen (number)
  // Default sort field (string)
  // You may manually set (hard code) those state settings in the context provider during development
  const [display, setDisplay] = useState("Hide");
  const [items, setItems] = useState(4);
  const [sort, setSort] = useState("string");

  const state = {
    display,
    items,
    sort,
    setDisplay,
    setItems,
    setSort,
  };

  return (
    <SiteContext.Provider value={state}>{props.children}</SiteContext.Provider>
  );
}

export default Settings;
