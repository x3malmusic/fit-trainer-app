import route from "express-promise-router";
import { getUser } from "../controllers/users";
import { verifyToken } from "../middlewares/jwtVerify";


const router = route();

router.get('/users', verifyToken, getUser)


export default router