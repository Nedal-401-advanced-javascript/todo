import React, { useState } from "react";

export const SiteContext = React.createContext();

function Settings(props) {
  // isplay or Hide completed items (boolean)
  // Number of items to display per screen (number)
  // Default sort field (string)
  // You may manually set (hard code) those state settings in the context provider during development
  const [display, setDisplay] = useState("Hide");
  const [items, setItems] = useState(6);
  const [sort, setSort] = useState("id");

  const state = {
    display,
    items,
    sort,
    setDisplay,
    setItems,
    setSort,
  };

  console.log('calling context')
  return (
    <SiteContext.Provider value={state}>{props.children}</SiteContext.Provider>
  );
}

export default Settings;
