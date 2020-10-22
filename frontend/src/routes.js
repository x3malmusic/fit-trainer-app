// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";

import DashboardPage from "./containers/Dashboard.js";
import NewExercise from "./containers/NewExercise";
import EditExercise from "./containers/EditExercise";
import NewWorkout from "./containers/NewWorkout";
import EditWorkout from "./containers/EditWorkout";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";

export const authRoutes = [
  {
    path: "/signin",
    name: "Sign In",
    icon: Dashboard,
    component: SignIn,
    authReq: false
  },
  {
  path: "/signup",
    name: "Sign Up",
    icon: Dashboard,
    component: SignUp,
    authReq: false
  },
]


export const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    authReq: true
  },
  {
    path: "/newexercise",
    name: "New Exercise",
    icon: Dashboard,
    component: NewExercise,
    authReq: true
  },
  {
    path: "/editexercise",
    name: "Edit Exercise",
    icon: Dashboard,
    component: EditExercise,
    authReq: true
  },
  {
    path: "/neworkout",
    name: "New Workout",
    icon: Dashboard,
    component: NewWorkout,
    authReq: true
  },
  {
    path: "/editworkout",
    name: "Edit Workout",
    icon: Dashboard,
    component: EditWorkout,
    authReq: true
  },
];

