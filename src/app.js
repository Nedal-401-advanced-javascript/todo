import React from "react";
import Header from "./components/header/header";
import ToDo from "./components/todo/todo-connected";
import SiteContext from "./context/settings/context";

import Auth from "./context/auth/auth.js";
import Login from "./context/auth/login.js";
import AuthContext from "./context/auth/context.js";

const DeleteLink = (props) => {
  return (
    <Auth action="delete">
      <SiteContext>
        <ToDo />
      </SiteContext>
    </Auth>
  );
};

const ReadLink = (props) => {
  return (
    <Auth action="read">
      <span>Fake Read Link </span>
    </Auth>
  );
};

const EditLink = (props) => {
  return (
    <Auth action="edit">
      <span>Fake Edit Link </span>
    </Auth>
  );
};
const App = () => {
  return (
    <>
      <AuthContext>
        <Header />
        <hr />
        <DeleteLink />
        <ReadLink />
        <EditLink />
      </AuthContext>
    </>
  );
};

export default App;
