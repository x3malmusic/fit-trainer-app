import React, { useState } from "react";
import GridItem from "../Grid/GridItem";
import CustomInput from "../CustomInput/CustomInput";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "../CustomButtons/Button";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import CancelIcon from "@material-ui/icons/Cancel";
import GridContainer from "../Grid/GridContainer";
import Divider from '../../components/Divider/Divider';
import {makeStyles} from "@material-ui/core/styles";
import {styles} from "../../assets/jss/material-dashboard-react/views/authStyle";



const useStyles = makeStyles(styles);

export default function Workout(props) {

  const {
    exercises,
    exercise,
    moveUp,
    moveDown,
    deleteExercise,
    index,
    changeExercise,
    changeRepeats,
    changeMeasurement
  } = props
  const classes = useStyles();
  const [selected, setSelected] = useState(() => exercise._id)

  const changeSelectedExercise = (id) => {
    setSelected(id)
    changeExercise(id, index)
  }

  const handleMoveUp = () => {
    moveUp(index)
  }

  const handleMoveDown = () => {
    moveDown(index)
  }

  const handleDeleteExercise = () => {
    deleteExercise(index)
  }

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={4}>
        <FormControl className={classes.formControl}>
          <InputLabel id={`edit-exercise-workout-select-${index}`}>Measurement type</InputLabel>
          <Select id={`edit-exercise-workout-select-${index}`}
                  labelId={`edit-exercise-workout-select-${index}`}
                  value={exercise.name}
                  name={selected}
          >
            {exercises.map((ex, i) => (
              <MenuItem value={ex.name} key={i}
              onClick={e => changeSelectedExercise(ex._id)}>
                {ex.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </GridItem>
      <GridItem xs={12} sm={12} md={2}>
        <CustomInput
          labelText="Repeats"
          index={index}
          type='number'
          inputProps={{value: exercise.repeats}}
          inputControl={changeRepeats}
          formControlProps={{
            fullWidth: true
          }}
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={2}>
        <CustomInput
          labelText="Measurement"
          inputProps={{value: exercise.measurement}}
          inputControl={changeMeasurement}
          type='number'
          index={index}
          formControlProps={{
            fullWidth: true
          }}
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={1}>
        <CustomInput
          inputProps={{disabled: true, value:exercise.measureType }}
          formControlProps={{
            fullWidth: true
          }}
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={1}>
        <Button color="primary" onClick={handleMoveUp}>
          <ArrowUpwardIcon />
        </Button>
      </GridItem>
      <GridItem xs={12} sm={12} md={1}>
        <Button color="primary" onClick={handleMoveDown}>
          <ArrowDownwardIcon />
        </Button>
      </GridItem>
      <GridItem xs={12} sm={12} md={1}>
        <Button color="warning" onClick={handleDeleteExercise}>
          <CancelIcon />
        </Button>
      </GridItem>
      <Divider />
    </GridContainer>
  )
}