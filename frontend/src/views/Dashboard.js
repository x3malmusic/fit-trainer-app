import React from "react";
// @material-ui/core
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';


export default function Dashboard() {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <InfiniteCalendar width={400} height={400} />
        </GridItem>
      </GridContainer>
    </div>
  );
}
