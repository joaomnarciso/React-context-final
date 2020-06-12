import React, { useContext, useState } from "react";
import Context from "./context";

export default () => {
  const [search, setSearch] = useState("");

  const { state, dispatch } = useContext(Context);

  const login = () => {
    dispatch({ type: "USER_LOGGED_IN" });
  };
  const logout = () => {
    dispatch({ type: "USER_LOGGED_OUT" });
  };

  const filterPosts = e => {
    setSearch(e.target.value);
    dispatch({ type: "SEARCH_POSTS", payload: e.target.value });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <span className="navbar-brand">Navbar</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <form>
        <input
          className="form-control"
          type="text"
          value={search}
          onChange={filterPosts}
        />
      </form>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav ml-auto">
          {!state.isAuth ? (
            <>
              <li className="nav-item active">
                <button className="btn btn-outline-light" onClick={login}>
                  Login
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-light ml-3">Register</button>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <button className="btn btn-danger ml-3" onClick={logout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
