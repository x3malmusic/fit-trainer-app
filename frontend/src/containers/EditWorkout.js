import { connect } from "react-redux";
import EditWorkout from "../views/EditWorkout";
import { updateWorkout } from "../redux/actions/workout";
import { formatDate } from "../helper/formatDate";

const mapStateToProps = ({user: { exercises, workouts, currentDate }}) => ({
  exercises,
  workouts,
  findedWorkout: workouts.find(w => w.date === formatDate(currentDate))
});

const mapDispatchToProps = (dispatch) => ({
  updateWorkout: (workout) => dispatch(updateWorkout(workout)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditWorkout);