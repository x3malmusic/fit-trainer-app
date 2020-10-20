import React, { useState, createRef, useEffect } from "react";
import {Route, Switch, useLocation} from "react-router-dom";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import Sidebar from "../components/Sidebar/Sidebar";
import {authRoutes, dashboardRoutes} from "../routes";
import logo from "../assets/img/reactlogo.png";
import bgImage from "../assets/img/sidebar-2.jpg";
import Navbar from "../components/Navbars/Navbar";
import Footer from "../components/Footer/Footer";
import EmailVerify from '../containers/EmailVerify'
import { getToken } from "../services/token";
import { notify } from "../services/notification";

import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";
import {makeStyles} from "@material-ui/core/styles";
import { switchRoutes } from "../helper/switchRoute";


const useStyles = makeStyles(styles);

export default function App(props) {

  const { emailConfirmed, getUser, error, logoutUser, email } = props

  const location = useLocation()
  const classes = useStyles();
  const currentRoutes = emailConfirmed ? dashboardRoutes : authRoutes
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = createRef();
  // states and functions
  const [mobileOpen, setMobileOpen] = useState(false);


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    notify({message: error, type: 'danger', title: 'Error'})
  }, [error])

  useEffect(() => {
    const token = getToken()

    if(token) {
      getUser()
    }
  }, [getUser])

  return (
    <>
      <ReactNotification />
      <div className={classes.wrapper}>
        <Sidebar
          routes={currentRoutes}
          logoText={"Fit Trainer"}
          logo={logo}
          image={bgImage}
          handleDrawerToggle={handleDrawerToggle}
          open={mobileOpen}
          color={"blue"}
        />
        <div className={classes.mainPanel} ref={mainPanel}>
          <div>
            <Navbar
              routes={currentRoutes}
              currentRoute={location}
              handleDrawerToggle={handleDrawerToggle}
              logout={logoutUser}
              userEmail={email}
            />
            { <div className={classes.map}>{switchRoutes(currentRoutes)}</div> }
            <Route path='/emailverify' component={EmailVerify}/>
          </div>
          <Footer routes={currentRoutes}/>
        </div>
      </div>
    </>
  )
}