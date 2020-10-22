import { connect } from "react-redux";
import EditExercise from "../views/EditExercise";
import { updateExercisesState } from "../redux/actions/exercises";


const mapStateToProps = ({user: { workouts }}) => ({
  exercises
});

const mapDispatchToProps = (dispatch) => ({
  updateExercises: (exercises) => dispatch(updateExercises(exercises)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExercise);