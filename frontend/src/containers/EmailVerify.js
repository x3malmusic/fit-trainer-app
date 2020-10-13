import { connect } from "react-redux";
import EmailVerify from "../views/EmailVerify";
import { verifyUser } from "../redux/actions/auth";


const mapDispatchToProps = (dispatch) => ({
  verifyUser: (code) => dispatch(verifyUser(code)),
});

export default connect(null, mapDispatchToProps)(EmailVerify);