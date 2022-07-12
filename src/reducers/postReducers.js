const postReducers = (posts = [], action) => {
  switch ((posts, action)) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return posts;
    default:
      return posts;
  }
};

export default postReducers;
