import { createContext } from "react";

export default createContext({
  isAuth: false,
  posts: [],
  filteredPosts: []
});
