import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";



import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          Dashboard
        </GridItem>
      </GridContainer>
    </div>
  );
}
