import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";

function Posts({ setCurrentID, setPostData }) {
  const posts = useSelector((state) => state.posts);
  return !posts.length
    ? "No Posts are available."
    : posts.map((post) => {
        return (
          <div key={post._id}>
            <Post
              post={post}
              setCurrentID={setCurrentID}
              setPostData={setPostData}
            />
          </div>
        );
      });
}

export default Posts;
