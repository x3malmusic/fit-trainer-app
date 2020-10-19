import route from "express-promise-router";
import { createExercise, deleteExercise, updateExercise } from "../controllers/exercises";
import { verifyToken } from "../middlewares/jwtVerify";


const router = route();

router.use(verifyToken)

router.post('/exercises', createExercise)

router.delete('/exercises/:id', deleteExercise)

router.put('/exercises', updateExercise)


export default router