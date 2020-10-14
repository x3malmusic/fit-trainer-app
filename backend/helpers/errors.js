export const USER_EXIST = 'USER_EXIST'
export const USER_NOT_FOUND = 'USER_NOT_FOUND'
export const USER_NOT_VERIFIED = 'USER_NOT_VERIFIED'
export const WRONG_EMAIL_PASSWORD = 'WRONG_EMAIL_PASSWORD'
export const WRONG_VERIFICATION_CODE = 'WRONG_EMAIL_PASSWORD'
export const NOT_AUTHORIZED = 'NOT_AUTHORIZED'
export const AUTHORIZATION_DENIED = 'AUTHORIZATION_DENIED'

export const EMAIL_NOT_EXIST = 'EMAIL_NOT_EXIST'
export const EMAIL_NOT_VALID = 'EMAIL_NOT_VALID'
export const PASSWORD_NOT_EXIST = 'PASSWORD_NOT_EXIST'
export const PASSWORD_NOT_VALID = 'PASSWORD_NOT_VALID'

export const UNKNOWN_ERROR = 'UNKNOWN_ERROR'

export default {
  USER_EXIST: {message: 'User already exist', status: 400},
  USER_NOT_FOUND: {message: 'User not found', status: 404},
  USER_NOT_VERIFIED: {message: 'Please, verify your email', status: 401},
  WRONG_EMAIL_PASSWORD: {message: 'Wrong email or password', status: 400},
  WRONG_VERIFICATION_CODE: {message: 'Wrong verification code', status: 400},
  NOT_AUTHORIZED: {message: 'User not authorized', status: 403},
  AUTHORIZATION_DENIED: {message: 'Access denied', status: 403},
  EMAIL_NOT_EXIST: {message: 'Enter email', status: 400},
  EMAIL_NOT_VALID: {message: 'Email is not valid', status: 400},
  PASSWORD_NOT_EXIST: {message: 'Enter password', status: 400},
  PASSWORD_NOT_VALID: {message: 'Password should at least 6 symbols long', status: 400},
  UNKNOWN_ERROR: {message: 'Something went wrong', status: 500},
}