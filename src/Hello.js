import React, { useContext } from "react";
import Context from "./context";

export default () => {
  const { state } = useContext(Context);

  return state.isAuth ? <h1>Hello, welcome back!</h1> : <h1>Please log in</h1>;
};
