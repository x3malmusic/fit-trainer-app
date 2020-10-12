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
    name: "SigIn",
    icon: Dashboard,
    component: SignIn,
    layout: "/admin"
  },
  {
  path: "/signup",
    name: "SignUp",
    icon: Dashboard,
    component: SignUp,
    layout: "/admin"},
]


export const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/newExercise",
    name: "NewExercise",
    icon: Dashboard,
    component: NewExercise,
    layout: "/admin"
  },
  {
    path: "/editExercise",
    name: "EditExercise",
    icon: Dashboard,
    component: EditExercise,
    layout: "/admin"
  },
  {
    path: "/newWorkout",
    name: "NewWorkout",
    icon: Dashboard,
    component: NewWorkout,
    layout: "/admin"
  },
  {
    path: "/editWorkout",
    name: "EditWorkout",
    icon: Dashboard,
    component: EditWorkout,
    layout: "/admin"
  },

];

