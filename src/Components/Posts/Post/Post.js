import {
  Card,
  CardMedia,
  CardHeader,
  Avatar,
  MoreVertIcon,
  CardContent,
  Typography,
  FavoriteIcon,
  IconButton,
  ShareIcon,
  ExpandMore,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getPosts, likePosts } from "../../../actions/postActions";

function Post({ post, setCurrentID }) {
  const dispatch = useDispatch();
  const likes = useSelector((state) => state.posts.likeCount);

  const setLikesCount = (id) => {
    dispatch(likePosts(id, { ...post, likeCount: post.likeCount + 1 }));
    console.log(likes);
  };

  useEffect(() => {
    getPosts();
  }, [post._id]);

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#f00" }} aria-label="recipe">
              {post.creator.slice(0, 1)}
            </Avatar>
          }
          title={post.creator}
          subheader={post.title}
        />
        <img src={post.selectedFile} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {post.message}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.tags}
          </Typography>
          <button onClick={() => setCurrentID(post._id)}>Edit</button>
          <button onClick={() => dispatch(deletePost(post._id))}>Delete</button>
          <button
            onClick={() =>
              // dispatch(
              //   likePosts(post._id, { ...post, likeCount: post.likeCount + 1 })
              // )
              setLikesCount(post._id)
            }
          >
            Likes - {post.likeCount}
          </button>
        </CardContent>
      </Card>
    </>
  );
}

export default Post;
