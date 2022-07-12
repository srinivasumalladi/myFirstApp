import { Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function From() {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const clear = () => {};
  return (
    <Paper>
      <From autocomplete="off" noValidate onSubmit={handleSubmit}></From>
    </Paper>
  );
}

export default From;
