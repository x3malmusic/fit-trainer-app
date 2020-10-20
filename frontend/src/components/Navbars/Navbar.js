import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
// core components
import AdminNavbarLinks from "./AdminNavbarLinks.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-react/components/headerStyle.js";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();

  const { logout, userEmail } = props

  function makeBrand() {
    let name;
    props.routes.map(prop => {
      if (props.currentRoute.pathname === prop.path) {
        name = prop.name;
      }
    });
    if(!name) name = "Email Verify"
    return name;
  }
  const { color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          <Button color='transparent' className={classes.title}>
            {makeBrand()}
          </Button>
        </div>
        {userEmail && <p>Welcome, <strong>{userEmail}</strong></p>}
        <Hidden smDown implementation="css">
           <AdminNavbarLinks logout={logout}/>
        </Hidden>

      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object)
};
