import route from "express-promise-router";
import { login, register, userVerify } from "../controllers/auth";


const router = route();

router.post('/login', login)

router.post('/register', register)

router.post('/userverify', userVerify)

export default router