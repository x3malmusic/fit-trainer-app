import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import {authRoutes, dashboardRoutes} from "../../routes";
import logo from "../../assets/img/reactlogo.png";
import bgImage from "../../assets/img/sidebar-2.jpg";
import Navbar from "../../components/Navbars/Navbar";
import Footer from "../../components/Footer/Footer";


import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

import {Route, Switch, useLocation} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

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

export default function App() {

  const location = useLocation()
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
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={isLoggedIn ? dashboardRoutes : authRoutes}
          currentRoute={location}
          handleDrawerToggle={handleDrawerToggle}
        />
        { <div className={classes.map}>{switchRoutes(isLoggedIn ? dashboardRoutes : authRoutes)}</div> }
      </div>
      <Footer />
    </div>
  )
}