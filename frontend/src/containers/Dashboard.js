import { connect } from "react-redux";
import Dashboard from "../views/Dashboard";
import { setDate } from "../redux/actions/workout";


const mapStateToProps = ({user: { workouts, currentDate }}) => ({
  workoutDates: workouts.map(w => {return w.date}),
  currentDate,
});

const mapDispatchToProps = (dispatch) => ({
  setDate: (date) => dispatch(setDate(date))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);