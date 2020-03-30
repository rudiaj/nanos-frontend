import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./reset.css";

import { reducers } from "./store";
import { GlobalStyles } from './utils';
import App from "./App";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
