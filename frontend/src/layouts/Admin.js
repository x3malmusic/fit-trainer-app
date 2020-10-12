import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Navbar from "components/Navbars/Navbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import {dashboardRoutes, authRoutes} from "routes.js";

import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

import bgImage from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";

const switchRoutes = (routes) => {
  return (
    <Switch>
      {routes.map((prop, key) => {
          return (
            <Route
              path={prop.path}
              component={prop.component}
              key={key}
            />
          );
      })}
    </Switch>
  )
};

const useStyles = makeStyles(styles);

export default function Admin({ ...rest }) {
  // styles
  const classes = useStyles();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // states and functions
  const [mobileOpen, setMobileOpen] = React.useState(false);


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/admin/maps";
  };

  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={isLoggedIn ? dashboardRoutes : authRoutes}
        logoText={"Fit Trainer"}
        logo={logo}
        image={bgImage}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={"blue"}
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={isLoggedIn ? dashboardRoutes : authRoutes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes(isLoggedIn ? dashboardRoutes : authRoutes)}</div>
          </div>
        ) : (
          <div className={classes.map}>{switchRoutes(isLoggedIn ? dashboardRoutes : authRoutes)}</div>
        )}
      </div>
    </div>
  );
}
