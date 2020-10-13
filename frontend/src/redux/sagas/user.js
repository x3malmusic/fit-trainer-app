import { takeLatest, put } from "redux-saga/effects";

import {
  LOGIN_USER,
  SET_USER,
  REGISTER_USER,
  SET_ERROR
} from "../actions/types";

import http from "../../services/http";


const loginUser = function* ({ payload }) {
  try {
    const response = yield http.post("/api/login", {
      email: payload.email, password: payload.password
    });
    yield put({ type: SET_USER, payload: response.data });
    yield localStorage.setItem(
      "fit-trainer-app",
      JSON.stringify(response.data.token)
    );
  } catch (e) {
    put({ type: SET_ERROR, payload: e.message });
  }
};

const registerUser = function* ({ payload }) {
  try {
    const response = yield http.post("/api/register", {
      email: payload.email, password: payload.password
    });
    yield put({ type: SET_USER, payload: response.data });
    yield localStorage.setItem(
      "fit-trainer-app",
      JSON.stringify(response.data.token)
    );
  } catch (e) {
    put({ type: SET_ERROR, payload: e.message });
  }
};

export default [
  takeLatest(LOGIN_USER, loginUser),
  takeLatest(REGISTER_USER, registerUser),
];