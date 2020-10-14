import route from "express-promise-router";
import { check } from 'express-validator'
import { login, register, userVerify } from "../controllers/auth";

import { EMAIL_NOT_EXIST,
    EMAIL_NOT_VALID,
    PASSWORD_NOT_EXIST,
    PASSWORD_NOT_VALID
} from "../helpers/errors";

const router = route();

router.post('/login', login)

router.post('/register',
  [check('email', EMAIL_NOT_EXIST).exists(),
      check('email', EMAIL_NOT_VALID).isEmail(),
    check('password', PASSWORD_NOT_EXIST).exists(),
    check('password', PASSWORD_NOT_VALID).isLength({min: 6})
  ],
    register)

router.post('/userverify', userVerify)

export default router