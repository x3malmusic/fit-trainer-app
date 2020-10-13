// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";

import DashboardPage from "views/Dashboard.js";
import NewExercise from "./views/NewExercise";
import EditExercise from "./views/EditExercise";
import NewWorkout from "./views/NewWorkout";
import EditWorkout from "./views/EditWorkout";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";

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

