import { connect } from "react-redux";
import NewExercise from "../views/NewExercise";
import { createExercise } from "../redux/actions/exercises";


const mapDispatchToProps = (dispatch) => ({
  createExercise: (data) => dispatch(createExercise(data)),
});

export default connect(null, mapDispatchToProps)(NewExercise);