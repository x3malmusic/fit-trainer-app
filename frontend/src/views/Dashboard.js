import React, {useEffect, useState} from "react";
// @material-ui/core
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import InfiniteCalendar, {
  Calendar,
  withDateSelection,
} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import { withProps } from 'recompose';
import Button from "../components/CustomButtons/Button";
import history from "../services/history";
import {makeStyles} from "@material-ui/core/styles";
import { formatDate, decodeDate, checkWorkoutDates, dateIsPast } from "../helper/formatDate";

const style = {
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  }
}

const useStyles = makeStyles(style);


const enhanceDay = highlighted => withProps(props => ({
    isHighlighted: highlighted.indexOf(props.date) !== -1,
  }
));

const withHighlightedDates = withProps(({ highlighted, DayComponent }) => ({
  DayComponent: enhanceDay(highlighted)(DayComponent),
}));


export default function Dashboard(props) {
  const classes = useStyles();

  const today = decodeDate(formatDate(new Date()))
  const { workoutDates, setDate, currentDate } = props

  const [canAddWorkout, setCanAddWorkout] = useState(() => !checkWorkoutDates(workoutDates, today))
  const [disableButtons, setDisableButtons] = useState(false)


  const createWorkout = () => {
    history.push(`/neworkout`)
  }

  const editWorkout = () => {
    history.push(`/editworkout`)
  }

  const addExercise = () => {
    history.push('/newexercise')
  }

  useEffect(() => {
    setDisableButtons(dateIsPast(currentDate))
  }, [currentDate])

  const onSelectedDate = (date) => {
    const formattedDate = decodeDate(formatDate(date))
    setDate(formattedDate)
    setCanAddWorkout(!checkWorkoutDates(workoutDates, formattedDate))
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={4}>
          <div className={classes.wrapper}>
            <Button color="primary" onClick={addExercise}>ADD NEW EXERCISE</Button>
            {canAddWorkout && <Button color="primary" disabled={disableButtons} onClick={createWorkout}>ADD NEW WORKOUT</Button>}
            {!canAddWorkout && <Button color="primary" disabled={disableButtons} onClick={editWorkout}>EDIT WORKOUT</Button>}
          </div>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={6} md={4}>
          <InfiniteCalendar
            Component={withDateSelection(withHighlightedDates(Calendar))}
            width={'100%'}
            height={400}
            selected={currentDate}
            onSelect={onSelectedDate}
            highlighted={workoutDates}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
