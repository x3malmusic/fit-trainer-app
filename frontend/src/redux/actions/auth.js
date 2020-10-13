import {
  GET_USER,
  SET_USER,
  LOGIN_USER,
  REGISTER_USER,
  SET_ERROR,
  VERIFY_USER
} from "./types";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const loginUser = (data) => ({
  type: LOGIN_USER,
  payload: data
});

export const registerUser = (data) => ({
  type: REGISTER_USER,
  payload: data
});

export const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});

export const getUser = (user) => ({
  type: GET_USER,
  payload: user,
});

export const verifyUser = (code) => ({
  type: VERIFY_USER,
  payload: code,
});





