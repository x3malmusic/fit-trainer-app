import { connect } from "react-redux";
import EditExercise from "../views/EditExercise";
import { updateExercises, deleteExercise } from "../redux/actions/exercises";

//update exercises


const mapStateToProps = ({user: { exercises }}) => ({
  exercises
});

const mapDispatchToProps = (dispatch) => ({
  updateExercises: (exercises) => dispatch(updateExercises(exercises)),
  deleteExercise: (id) => dispatch(deleteExercise(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExercise);