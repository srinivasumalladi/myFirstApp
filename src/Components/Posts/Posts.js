import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";

function Posts() {
  const posts = useSelector((state) => state.posts);

  console.log(posts);
  return (
    <div>
      <h3>Posts</h3>
      <Post />
    </div>
  );
}

export default Posts;
