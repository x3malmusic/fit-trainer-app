import React, { useState } from "react";
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
import {styles} from "../assets/jss/material-dashboard-react/views/authStyle";
import { formatDate, decodeDate } from "../helper/formatDate";
import {logoutUser} from "../redux/actions/auth";

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


export default function Dashboard() {
  const classes = useStyles();

  const today = decodeDate(formatDate(new Date()))
  const selected = [
    '2020-10-22',
    '2020-11-01',
  ]

  const checkWorkoutDates = (date) => {
    return selected.some(day => decodeDate(day).getTime() === date.getTime())
  }

  const [selectedDate, setSelectedDate] = useState('')
  const [canAddWorkout, setCanAddWorkout] = useState(() => !checkWorkoutDates(today))
  const [disableButtons, setDisableButtons] = useState(false)


  const createWorkout = () => {
    history.push(`/neworkout?date=${formatDate(selectedDate)}`)
  }

  const editWorkout = () => {
    // history.push(`/neworkout?id=${_id}`)
  }

  const addExercise = () => {
    history.push('/newexercise')
  }


  const onSelectedDate = (date) => {
    setSelectedDate(date)
    if(checkWorkoutDates(date)) {
      setCanAddWorkout(false)
    } else {
      setCanAddWorkout(true)
    }
    if(today.getTime() > date.getTime()) {
      setDisableButtons(true)
    } else setDisableButtons(false)
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
            onSelect={onSelectedDate}
            highlighted={selected}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
