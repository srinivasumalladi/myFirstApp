import React, { useContext } from "react";
import Memories from "./Components/Memories";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { Provider } from "react-redux";

function App() {
  const store = configureStore({ reducer: reducers }, [thunk]);

  return (
    <>
      <Provider store={store}>
        <Memories />
      </Provider>
    </>
  );
}

export default App;
