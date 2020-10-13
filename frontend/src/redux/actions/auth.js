import {
  SET_USER,
  LOGIN_USER,
  REGISTER_USER,
  SET_ERROR
} from "./types";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

export const registerUser = (user) => ({
  type: REGISTER_USER,
  payload: user,
});

export const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});

