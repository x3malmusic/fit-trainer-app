import { connect } from "react-redux";
import Dashboard from "../views/Dashboard";


const mapStateToProps = ({user: { workouts }}) => ({
  workoutDates: workouts.map(w => {return w.date})
});

export default connect(mapStateToProps, null)(Dashboard);