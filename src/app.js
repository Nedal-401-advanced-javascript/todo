import React from "react";
import Header from "./components/header/header";
import ToDo from "./components/todo/todo-connected";
import SiteContext from "./context/settings/context";

const App = () => {
  return (
    <>
      <Header />
      <SiteContext>
        <ToDo />
      </SiteContext>
    </>
  );
};

export default App;
