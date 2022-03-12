import React from "react";

const authContext = React.createContext({
  status: null,
  loggedIn: () => {},
  loggedOut:()=>{}
});

export default authContext;
