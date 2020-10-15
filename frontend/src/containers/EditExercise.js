import { connect } from "react-redux";
import EditExercise from "../views/EditExercise";
import { updateExercises } from "../redux/actions/workouts";

//update exercises


const mapStateToProps = ({user: { exercises }}) => ({
  exercises
});

const mapDispatchToProps = (dispatch) => ({
  updateExercises: (exercises) => dispatch(updateExercises(exercises))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExercise);