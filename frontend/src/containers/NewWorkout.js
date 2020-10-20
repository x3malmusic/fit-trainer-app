import { connect } from "react-redux";
import NewWorkout from "../views/NewWorkout";
import { addWorkout } from "../redux/actions/workout";

const mapStateToProps = ({user: { exercises }}) => ({
  exercises
});

const mapDispatchToProps = (dispatch) => ({
  addWorkout: (data) => dispatch(addWorkout(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewWorkout);