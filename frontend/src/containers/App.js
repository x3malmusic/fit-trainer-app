import { connect } from "react-redux";
import App from "../views/App";
import { getUser } from "../redux/actions/auth";

const mapStateToProps = ({user: { emailConfirmed, error }}) => ({
  emailConfirmed, error
});

const mapDispatchToProps = (dispatch) => ({
  getUser: (token) => dispatch(getUser(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);