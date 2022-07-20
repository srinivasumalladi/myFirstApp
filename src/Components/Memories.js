import React, { useEffect, useState } from "react";
import { AppBar, Container, Grid, Grow, Typography } from "@mui/material";
import memories from "../images/sample_01.png";
import From from "./Form/From";
import Posts from "./Posts/Posts";
import "../main.css";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/postActions";

function Memories() {
  const dispatch = useDispatch();
  const [currentID, setCurrentID] = useState(null);
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
    likeCount: 0,
  });
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentID]);

  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit" className="appBar">
        <Typography variant="h4" align="center" className="heading">
          Srini Memories
        </Typography>
        <img src={memories} alt="memories" height="60" width="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space - between"
            alignItems="streach"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentID={setCurrentID} setPostData={setPostData} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <From
                currentID={currentID}
                setCurrentID={setCurrentID}
                setPostData={setPostData}
                postData={postData}
              />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default Memories;
