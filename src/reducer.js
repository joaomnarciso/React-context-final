export default (state, { type, payload }) => {
  switch (type) {
    case "USER_LOGGED_IN":
      return {
        ...state,
        isAuth: true
      };

    case "USER_LOGGED_OUT":
      return {
        ...state,
        isAuth: false
      };

    case "FETCHED_POST":
      return {
        ...state,
        posts: payload.splice(0, 20)
      };

    case "SEARCH_POSTS":
      const results = state.posts.filter(p => p.title.includes(payload));
      return {
        ...state,
        filteredPosts: results
      };

    default:
      return state;
  }
};
