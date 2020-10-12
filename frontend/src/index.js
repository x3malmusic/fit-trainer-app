import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "./services/history";

// core components
import Admin from "layouts/Admin.js";

import "assets/css/material-dashboard-react.css?v=1.9.0";

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path="/" component={Admin} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
