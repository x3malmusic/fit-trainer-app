import { connect } from "react-redux";
import NewWorkout from "../views/NewWorkout";
import { addWorkout } from "../redux/actions/workout";
import {dateIsPast, formatDate} from "../helper/formatDate";

const mapStateToProps = ({user: { exercises, currentDate, workouts }}) => ({
  exercises,
  currentDate,
  cannotAddWorkout: dateIsPast(currentDate),
  alreadyHasWorkout: !!workouts.find(w => w.date === formatDate(currentDate))
});

const mapDispatchToProps = (dispatch) => ({
  addWorkout: (data) => dispatch(addWorkout(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewWorkout);