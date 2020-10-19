import { connect } from "react-redux";
import EditExercise from "../views/EditExercise";
import { updateExercises, deleteExercise, updateExercisesState } from "../redux/actions/exercises";


const mapStateToProps = ({user: { exercises }}) => ({
  exercises
});

const mapDispatchToProps = (dispatch) => ({
  updateExercises: (exercises) => dispatch(updateExercises(exercises)),
  deleteExercise: (id) => dispatch(deleteExercise(id)),
  updateExercisesState: (exercises) => dispatch(updateExercisesState(exercises))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExercise);