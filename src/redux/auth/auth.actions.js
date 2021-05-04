import AUTH_ACTION_TYPES from "./auth.action-types";


// LOGIN
export const startLogin = (data) => ({
    type: AUTH_ACTION_TYPES.START_LOGIN,
    payload: data,
});


export const successLogin = (data) => ({
    type: AUTH_ACTION_TYPES.SUCCESS_LOGIN,
    payload: data,
});

// SUCCESS & ERROR
export const setError = (data) => ({
    type: AUTH_ACTION_TYPES.SET_ERROR,
    payload: data,
});

export const setSuccess = (data) => ({
    type: AUTH_ACTION_TYPES.SET_SUCCESS,
    payload: data,
});