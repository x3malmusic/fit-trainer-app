import React from "react";
// @material-ui/core
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";


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
