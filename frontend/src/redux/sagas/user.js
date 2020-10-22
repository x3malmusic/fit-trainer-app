import { takeLatest, put } from "redux-saga/effects";
import {deleteToken, getToken, saveToken} from '../../services/token'
import history from "../../services/history";

import {
  LOGIN_USER,
  SET_USER,
  GET_USER,
  REGISTER_USER,
  SET_ERROR,
  VERIFY_USER,
  LOGOUT_USER
} from "../actions/types";

import http from "../../services/http";


const loginUser = function* ({ payload }) {
  try {
    const response = yield http.post("/api/login", {
      email: payload.email, password: payload.password
    });
    yield saveToken(JSON.stringify(response.data.token))
    yield put({type: GET_USER })
  } catch (e) {
    yield put({ type: SET_ERROR, payload: e.response.data });
  }
};

const registerUser = function* ({ payload }) {
  try {
    const response = yield http.post("/api/register", {
      email: payload.email, password: payload.password
    });
    yield history.push(response.data.link)
  } catch (e) {
    yield put({ type: SET_ERROR, payload: e.response.data });
  }
};


const getUser = function* () {
  try {
    const response = yield http.get("/api/users", { headers: {'authorization' : `Bearer ${getToken()}`} });
    yield put({ type: SET_USER, payload: response.data });
    yield history.push('/dashboard')
  } catch (e) {
    yield put({ type: SET_ERROR, payload: e.response.data });
  }
};

const verifyUser = function* ({ payload }) {
  try {
    const response = yield http.post("/api/userverify", { email: payload.email, code: payload.code });
    yield put({ type: SET_USER, payload: response.data });
    yield saveToken(JSON.stringify(response.data.token))
    yield history.push('/dashboard')
  } catch (e) {
    yield put({ type: SET_ERROR, payload: e.response.data });
  }
};

const logoutUser = function* () {
  yield deleteToken()
  yield put({ type: SET_USER, payload: {}});
  yield history.push('/signin')
};


export default [
  takeLatest(LOGIN_USER, loginUser),
  takeLatest(REGISTER_USER, registerUser),
  takeLatest(GET_USER, getUser),
  takeLatest(VERIFY_USER, verifyUser),
  takeLatest(LOGOUT_USER, logoutUser),
];