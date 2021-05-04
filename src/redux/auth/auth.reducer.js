import AUTH_ACTION_TYPES from "./auth.action-types";

const INITIAL_STATE = {
    error: undefined,
    success: undefined,
    token: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
    console.log(action.payload)
    switch (action.type) {
        case AUTH_ACTION_TYPES.SUCCESS_LOGIN:
            return {
                ...state,
                token: action.payload,
            };
        case AUTH_ACTION_TYPES.SET_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case AUTH_ACTION_TYPES.SET_SUCCESS:
            return {
                ...state,
                success: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;