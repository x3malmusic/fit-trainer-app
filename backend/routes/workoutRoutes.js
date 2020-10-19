import route from "express-promise-router";
import { verifyToken } from "../middlewares/jwtVerify";
import { createWorkout } from "../controllers/workouts";

const router = route();

router.post('/workouts', verifyToken, createWorkout)


export default router