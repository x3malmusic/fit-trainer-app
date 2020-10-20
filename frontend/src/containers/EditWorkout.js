import { connect } from "react-redux";
import EditWorkout from "../views/EditWorkout";
import { addWorkout } from "../redux/actions/workout";

const mapStateToProps = ({user: { exercises, workouts }}) => ({
  exercises, workouts
});

const mapDispatchToProps = (dispatch) => ({
  addWorkout: (data) => dispatch(addWorkout(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditWorkout);