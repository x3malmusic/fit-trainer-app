// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import NewExercise from "./views/NewExercise/NewExercise";
import EditExercise from "./views/EditExercise/EditExercise";
import NewWorkout from "./views/NewWorkout/NewWorkout";
import EditWorkout from "./views/EditWorkout/EditWorkout";
import SignIn from "./views/SignIn/SignIn";
import SignUp from "./views/SignUp/SignUp";

export const authRoutes = [
  {
    path: "/signin",
    name: "Sign In",
    icon: Dashboard,
    component: SignIn,
  },
  {
  path: "/signup",
    name: "Sign Up",
    icon: Dashboard,
    component: SignUp,
  },
]


export const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
  },
  {
    path: "/newExercise",
    name: "NewExercise",
    icon: Dashboard,
    component: NewExercise,
  },
  {
    path: "/editExercise",
    name: "EditExercise",
    icon: Dashboard,
    component: EditExercise,
  },
  {
    path: "/newWorkout",
    name: "NewWorkout",
    icon: Dashboard,
    component: NewWorkout,
  },
  {
    path: "/editWorkout",
    name: "EditWorkout",
    icon: Dashboard,
    component: EditWorkout,
  },

];

