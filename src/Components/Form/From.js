import { Paper, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import FileBase64 from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/postActions";

function From({ currentID, setCurrentID, setPostData, postData }) {
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    currentID ? state.posts.find((id) => id._id === currentID) : null
  );

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentID) {
      dispatch(updatePost(currentID, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  const clear = () => {
    console.log("clear");
    setCurrentID(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <>
      <div>
        <h4>{currentID ? "Editing" : "Creating"} a Memory</h4>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label htmlFor="creator">Creator:</label>
          <input
            type="text"
            name="creator"
            id="creator"
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />

          <label htmlFor="creator">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />

          <label htmlFor="message">Message:</label>
          <input
            type="text"
            name="message"
            id="message"
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />

          <label htmlFor="tags">Tags:</label>
          <input
            type="text"
            name="tags"
            id="tags"
            value={postData.tags}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          />

          <div>
            <FileBase64
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
          <div>
            <button type="submit">Submit</button>
            <button onClick={clear}>Clear</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default From;
