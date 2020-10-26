import { takeLatest, put } from "redux-saga/effects";
import {deleteToken, saveToken} from '../../services/token'
import { notify } from "../../services/notification";

import {
  LOGIN_USER,
  SET_USER,
  GET_USER,
  REGISTER_USER,
  SET_ERROR,
  VERIFY_USER,
  LOGOUT_USER,
  SET_LOADING
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
    yield put({ type: SET_ERROR, payload: e.response?.data });
  }
};

const registerUser = function* ({ payload }) {
  try {
    yield http.post("/api/register", {
      email: payload.email, password: payload.password, location: payload.location
    });
    yield notify({message: 'Verification code was sent on your email', type: 'success', title: 'Success'})
  } catch (e) {
    yield put({ type: SET_ERROR, payload: e.response?.data });
  }
};


const getUser = function* ({payload}) {
  try {
    if(!payload) yield put({type: SET_LOADING, payload: true})
    const response = yield http.get("/api/users");
    yield put({ type: SET_USER, payload: response.data });
    if(!payload) yield notify({message: `Welcome ${response.data.email}`, type: 'success', title: 'Success'})
  } catch (e) {
    yield put({ type: SET_ERROR, payload: e.response?.data });
  } finally {
    yield put({type: SET_LOADING, payload: false})
  }
};

const verifyUser = function* ({ payload }) {
  try {
    const response = yield http.post("/api/userverify", { email: payload.email, code: payload.code });
    yield put({ type: SET_USER, payload: response.data });
    yield saveToken(JSON.stringify(response.data.token))
  } catch (e) {
    yield put({ type: SET_ERROR, payload: e.response?.data });
  }
};

const logoutUser = function* () {
  yield deleteToken()
  yield put({ type: SET_USER, payload: {}});
};


export default [
  takeLatest(LOGIN_USER, loginUser),
  takeLatest(REGISTER_USER, registerUser),
  takeLatest(GET_USER, getUser),
  takeLatest(VERIFY_USER, verifyUser),
  takeLatest(LOGOUT_USER, logoutUser),
];