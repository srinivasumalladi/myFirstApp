import React, { useEffect } from "react";
import { AppBar, Container, Grid, Grow, Typography } from "@mui/material";
import memories from "../images/sample_01.png";
import From from "./Form/From";
import Posts from "./Posts/Posts";
import "../main.css";
import { useDispatch } from "react-redux";
import { getPosts } from "../actions/postActions";

function Memories() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts);
  }, [dispatch]);

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
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <From />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default Memories;
