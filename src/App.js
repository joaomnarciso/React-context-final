import React, { useContext, useReducer, useEffect } from "react";
import axios from "axios";
import Context from "./context";
import reducer from "./reducer";
import "./styles.css";
import Header from "./Header";
import Hello from "./Hello";
import Posts from "./Posts";

export default function App() {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios("https://jsonplaceholder.typicode.com/posts");
      dispatch({ type: "FETCHED_POST", payload: res.data });
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <Header />
        <Hello />
        <Posts />
      </div>
    </Context.Provider>
  );
}
