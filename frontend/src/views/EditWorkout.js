import React, { useState } from "react";
import GridItem from "../components/Grid/GridItem";
import Card from "../components/Card/Card";
import CardHeader from "../components/Card/CardHeader";
import CardBody from "../components/Card/CardBody";
import CardFooter from "../components/Card/CardFooter";
import GridContainer from "../components/Grid/GridContainer";
import Button from "../components/CustomButtons/Button";
import {makeStyles} from "@material-ui/core/styles";
import {styles} from "../assets/jss/material-dashboard-react/views/authStyle";
import {swap} from "../helper/swapElements";
import Workout from "../components/Workout/Workout";


const useStyles = makeStyles(styles);

export default function EditWorkout(props) {

  const { exercises, workouts, updateWorkout } = props
  const [workout, setWorkout] = useState(() => {
    if (workouts.length) return [...workouts[0].exercises]
    else return []
  })


  const classes = useStyles();

  const moveUp = (index) => {
    swap(workout, index, false)
    setWorkout([...workout])
  }

  const moveDown = (index) => {
    swap(workout, index, true)
    setWorkout([...workout])
  }

  const changeWorkout = () => {
    updateWorkout({ workouts, _id: workouts[0]._id, exercises: workout })
  }

  const changeExercise = (id, index) => {
    let newWorkout = [...workout]
    newWorkout[index].exercise = {...exercises.find(elem => elem._id === id)}
    setWorkout(newWorkout)
  }

  const changeRepeats = (value, index) => {
    let newWorkout = [...workout]
    newWorkout[index].repeats = value
    setWorkout(newWorkout)
  }

  const changeMeasurement = (value, index) => {
    let newWorkout = [...workout]
    newWorkout[index].measurement = value
    setWorkout(newWorkout)
  }

  const addExercise = () => {
    setWorkout(prevState => ([...prevState, {...exercises[0], repeats: 0, measurement: 0}]))
  }

  const deleteExercise = (index) => {
    if(workout.length <= 1) return
    workout.splice(index, 1)
    setWorkout([...workout])
  }


  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={10}>
        <Card>
          <CardHeader color="primary">
            <h2 className={classes.cardTitleWhite}>Edit workout</h2>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <Button color="primary" onClick={addExercise}>ADD EXERCISE</Button>
              </GridItem>
            </GridContainer>
            {workout.map((ex, index) =>
                <Workout
                  moveUp={moveUp}
                  moveDown={moveDown}
                  deleteExercise={deleteExercise}
                  index={index}
                  exercises={exercises}
                  exercise={{...ex, ...ex.exercise}}
                  key={index}
                  changeExercise={changeExercise}
                  changeRepeats={changeRepeats}
                  changeMeasurement={changeMeasurement}
                />
              )}
          </CardBody>
          <CardFooter>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <Button color="primary" onClick={changeWorkout}>UPDATE WORKOUT</Button>
              </GridItem>
            </GridContainer>
          </CardFooter>
        </Card>
      </GridItem>
    </GridContainer>
  )

}