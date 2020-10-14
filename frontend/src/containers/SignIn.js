import { connect } from "react-redux";
import SignIn from "../views/SignIn";
import { loginUser } from "../redux/actions/auth";


const mapDispatchToProps = (dispatch) => ({
  loginUser: (data) => dispatch(loginUser(data)),
});

export default connect(null, mapDispatchToProps)(SignIn);