import * as api from "../api";

// Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.creatMyPost(post);
    console.log(data);
    dispatch({ type: "CREATE", payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: "UPDATE", payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id); // Hence we are not returning any data so not storing in const
    dispatch({ type: "DELETE", payload: id });
  } catch (err) {
    console.log(err);
  }
};

/* Same reducer is not working */

export const likePosts = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id, post);
    dispatch({ type: "UPDATE", payload: data });
  } catch (err) {
    console.log(err);
  }
};
