import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import AUTH_ACTION_TYPES from "./auth.action-types";
import {
    successLogin,
    setError,
    setSuccess
} from "./auth.actions";

// LOGIN
export function* handleLoginAsync() {
    yield takeLatest(
        AUTH_ACTION_TYPES.START_LOGIN,
        handleLogin
    );
}

export function* handleLogin(action) {
    try {
        let data = yield axios({
            url: "/api/v1/auth/signin",
            method: "POST",
            data: action.payload,
        });
        yield put(setSuccess(true));
        yield put(successLogin(data.data.token));
    } catch (error) {
        yield put(setError(error.message));
    }
}

