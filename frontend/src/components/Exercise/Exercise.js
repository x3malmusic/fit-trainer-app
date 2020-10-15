import React from "react";
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import CustomInput from "../CustomInput/CustomInput";
import Button from "../CustomButtons/Button";
import {makeStyles} from "@material-ui/core/styles";
import {styles} from "../../assets/jss/material-dashboard-react/views/authStyle";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import {measureTypes} from "../../constants/selectOptions";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import CancelIcon from '@material-ui/icons/Cancel';


const useStyles = makeStyles(styles);


export default function Exercise(props) {

  const { exercise, moveUp, moveDown, deleteExercise, index } = props
  const classes = useStyles();

  const handleMoveUp = () => {
    moveUp(index)
  }

  const handleMoveDown = () => {
    moveDown(index)
  }

  const handleDeleteExercise = () => {
    deleteExercise(exercise._id)
  }


  return (
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Exercise name"
              id={`exercise-name${exercise._id}`}
              inputProps={{ value:exercise.name }}
              formControlProps={{
                fullWidth: true
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <FormControl className={classes.formControl}>
              <InputLabel id="edit-exercise-select">Measurement type</InputLabel>
              <Select id="edit-exercise-select"
                      labelId="edit-exercise-select"
                      value={exercise.measureType}
              >
                {measureTypes.map(type => (
                  <MenuItem value={type} key={type}>{type}</MenuItem>
                ))}
              </Select>
            </FormControl>
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
        </GridContainer>
  )

}