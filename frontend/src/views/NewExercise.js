import React, { useState } from "react";
import GridItem from "../components/Grid/GridItem";
import Card from "../components/Card/Card";
import CardHeader from "../components/Card/CardHeader";
import CardBody from "../components/Card/CardBody";
import GridContainer from "../components/Grid/GridContainer";
import CustomInput from "../components/CustomInput/CustomInput";
import CardFooter from "../components/Card/CardFooter";
import Button from "../components/CustomButtons/Button";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from '@material-ui/core/MenuItem';

import { makeStyles } from "@material-ui/core/styles";
import { styles } from "../assets/jss/material-dashboard-react/views/authStyle";
import { measureTypes } from "../constants/selectOptions";

const useStyles = makeStyles(styles);

export default function NewExercise(props) {

  const { createExercise } = props
  const classes = useStyles();
  const [name, setName] = useState('')
  const [type, setType] = useState(measureTypes[0])


  const createNewExercise = () => {
    createExercise({name, type})
  }

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={6 }>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Create new exercise</h4>
            <p className={classes.cardCategoryWhite}>Please, add a new exercise name and measurement type</p>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Exercise Name"
                  id="exercise-name"
                  inputControl={setName}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="create-exercise-select">Measurement type</InputLabel>
                  <Select id="create-exercise-select"
                          labelId="create-exercise-select"
                          value={type}
                          onChange={handleChange}
                  >
                    {measureTypes.map(type => (
                      <MenuItem value={type} key={type}>{type}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </GridItem>
            </GridContainer>
          </CardBody>
          <CardFooter>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <Button color="primary" onClick={createNewExercise}>CREATE EXERCISE</Button>
              </GridItem >
            </ GridContainer>
          </CardFooter>
        </Card>
      </GridItem>
    </GridContainer>
  )

}