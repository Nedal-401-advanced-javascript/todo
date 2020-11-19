import React from "react";
import Header from "./components/header/header";
import ToDo from "./components/todo/todo-connected";
import SiteContext from "./context/settings/context";

import Auth from "./context/auth/auth.js";
import AuthContext from "./context/auth/context.js";


const App = () => {
  return (
    <>
      <AuthContext>
        <Header />
        
        <Auth action="delete">
          <h1>admin</h1>
        </Auth>

        <SiteContext>
          <ToDo />
        </SiteContext>
      </AuthContext>
    </>
  );
};

export default App;
