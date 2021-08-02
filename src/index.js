import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";

import { Provider } from "react-redux";
import store from "./store.js";

import "./scss/main.scss";

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
