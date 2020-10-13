import { takeLatest, put } from "redux-saga/effects";
import { saveToken } from '../../services/token'
import history from "../../services/history";

import {
  LOGIN_USER,
  SET_USER,
  GET_USER,
  REGISTER_USER,
  SET_ERROR,
  VERIFY_USER
} from "../actions/types";

import http from "../../services/http";


const loginUser = function* ({ payload }) {
  try {
    const response = yield http.post("/api/login", {
      email: payload.email, password: payload.password
    });
    yield saveToken(JSON.stringify(response.data.token))
  } catch (e) {
    put({ type: SET_ERROR, payload: e.message });
  }
};

const registerUser = function* ({ payload }) {
  try {
    const response = yield http.post("/api/register", {
      email: payload.email, password: payload.password
    });
    yield history.push(`/emailverify?email=${response.data.email}&code=${response.data.verificationCode}`)
  } catch (e) {
    put({ type: SET_ERROR, payload: e.message });
  }
};


const getUser = function* ({ payload }) {
  try {
    const response = yield http.post("/api/users", { email: payload.email });
    yield put({ type: SET_USER, payload: response.data });
  } catch (e) {
    put({ type: SET_ERROR, payload: e.message });
  }
};

const verifyUser = function* ({ payload }) {
  try {
    const response = yield http.post("/api/userverify", { email: payload.email, code: payload.code });
    yield put({ type: SET_USER, payload: response.data });
    yield history.push('/dashboard')
  } catch (e) {
    put({ type: SET_ERROR, payload: e.message });
  }
};


export default [
  takeLatest(LOGIN_USER, loginUser),
  takeLatest(REGISTER_USER, registerUser),
  takeLatest(GET_USER, getUser),
  takeLatest(VERIFY_USER, verifyUser),
];