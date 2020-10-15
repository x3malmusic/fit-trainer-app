import React from "react";
import GridItem from "../components/Grid/GridItem";
import Card from "../components/Card/Card";
import CardHeader from "../components/Card/CardHeader";
import CardBody from "../components/Card/CardBody";
import GridContainer from "../components/Grid/GridContainer";
import CardFooter from "../components/Card/CardFooter";
import Button from "../components/CustomButtons/Button";
import {makeStyles} from "@material-ui/core/styles";
import {styles} from "../assets/jss/material-dashboard-react/views/authStyle";
import { swap } from "../helper/swapElements";

import Exercise from "../components/Exercise/Exercise";
import {loginUser} from "../redux/actions/auth";


const useStyles = makeStyles(styles);


export default function EditExercise(props) {

  const { exercises, updateExercises } = props
  const classes = useStyles();

  const moveUp = (index) => {
    const nextElem = index - 1
    if(nextElem < 0) return
    swap(exercises, index, false)
    updateExercises(exercises)
  }

  const moveDown = (index) => {
    swap(exercises, index, true)
    updateExercises(exercises)
  }

  const deleteExercise = (id) => {

  }

  const updateAllExercises = () => {
    //update exercises
  }

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={8}>
        <Card>
          <CardHeader color="primary">
            <h2 className={classes.cardTitleWhite}>Edit exercises</h2>
          </CardHeader>
          <CardBody>
            {!exercises.length && <h2>No exercises created</h2>}
            {exercises.map((exercise, index) =>
              <Exercise
                exercise={exercise}
                key={exercise._id}
                index={index}
                moveUp={moveUp}
                moveDown={moveDown}
                deleteExercise={deleteExercise}
              />
            )}
          </CardBody>
          <CardFooter>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <Button color="primary" onClick={updateAllExercises}>UPDATE EXERCISES</Button>
              </GridItem>
            </GridContainer>
          </CardFooter>
        </Card>
      </GridItem>
    </GridContainer>
  )

}