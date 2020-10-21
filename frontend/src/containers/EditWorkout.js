import { connect } from "react-redux";
import EditWorkout from "../views/EditWorkout";
import { updateWorkout } from "../redux/actions/workout";

const mapStateToProps = ({user: { exercises, workouts }}) => ({
  exercises, workouts
});

const mapDispatchToProps = (dispatch) => ({
  updateWorkout: (workout) => dispatch(updateWorkout(workout)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditWorkout);