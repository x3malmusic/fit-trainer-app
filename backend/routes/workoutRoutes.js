import route from "express-promise-router";
import { verifyToken } from "../middlewares/jwtVerify";
import { createWorkout, updateWorkout } from "../controllers/workouts";

const router = route();

router.use(verifyToken)

router.post('/workouts', createWorkout)

router.put('/workouts/:id', updateWorkout)


export default router