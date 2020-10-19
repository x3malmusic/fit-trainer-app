import { connect } from "react-redux";
import NewWorkout from "../views/NewWorkout";
// import { loginUser } from "../redux/actions/auth";

const mapStateToProps = ({user: { exercises }}) => ({
  exercises
});

// const mapDispatchToProps = (dispatch) => ({
//   loginUser: (data) => dispatch(loginUser(data)),
// });

export default connect(mapStateToProps, null)(NewWorkout);