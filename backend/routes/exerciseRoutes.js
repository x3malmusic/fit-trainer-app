import route from "express-promise-router";
import { createExercise } from "../controllers/exercises";
import { verifyToken } from "../middlewares/jwtVerify";


const router = route();

router.use(verifyToken)

router.post('/exercises', createExercise)


export default router