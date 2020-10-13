import { connect } from "react-redux";
import SignIn from "../views/SignIn";
import { loginUser } from "../redux/actions/auth";

const mapStateToProps = ({user: { error }}) => ({
  error
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (data) => dispatch(loginUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);