import route from "express-promise-router";
import { login, register } from "./controllers/auth";


const router = route();

router.post('login', login)

router.post('register', register)



export default router