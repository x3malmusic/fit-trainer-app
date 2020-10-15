import route from "express-promise-router";
import { createExercise, deleteExercise } from "../controllers/exercises";
import { verifyToken } from "../middlewares/jwtVerify";


const router = route();

router.use(verifyToken)

router.post('/exercises', createExercise)

router.delete('/exercises/:id', deleteExercise)


export default router