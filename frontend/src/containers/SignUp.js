import { connect } from "react-redux";
import SignUp from "../views/SignUp";
import { registerUser, setError } from "../redux/actions/auth";


const mapStateToProps = ({user: { error }}) => ({
  error
});

const mapDispatchToProps = (dispatch) => ({
  registerUser: (data) => dispatch(registerUser(data)),
  setError: (error) => dispatch(setError(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);