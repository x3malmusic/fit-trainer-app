import React, { useState, createRef, useEffect } from "react";
import {Route, Switch, useLocation} from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import {authRoutes, dashboardRoutes} from "../routes";
import logo from "../assets/img/reactlogo.png";
import bgImage from "../assets/img/sidebar-2.jpg";
import Navbar from "../components/Navbars/Navbar";
import Footer from "../components/Footer/Footer";
import EmailVerify from '../containers/EmailVerify'
import { getToken } from "../services/token";

import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";
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

export default function App(props) {

  const { emailConfirmed, getUser } = props

  const location = useLocation()
  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = createRef();
  // states and functions
  const [mobileOpen, setMobileOpen] = useState(false);


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
      const token = getToken()
    if(token) {
      getUser(token)
    }
  }, [getUser])

  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={emailConfirmed ? dashboardRoutes : authRoutes}
        logoText={"Fit Trainer"}
        logo={logo}
        image={bgImage}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={"blue"}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={emailConfirmed ? dashboardRoutes : authRoutes}
          currentRoute={location}
          handleDrawerToggle={handleDrawerToggle}
        />
        { <div className={classes.map}>{switchRoutes(emailConfirmed ? dashboardRoutes : authRoutes)}</div> }
        <Route path='/emailverify' component={EmailVerify}/>
      </div>
      <Footer />
    </div>
  )
}