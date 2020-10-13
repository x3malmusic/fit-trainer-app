import React from "react";
import ReactDOM from "react-dom";
import { Router} from "react-router-dom";
import history from "./services/history";

import { Provider } from "react-redux";
import {store} from './redux'
import App from "./views/App";


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>
  ,
  document.getElementById("root")
);
