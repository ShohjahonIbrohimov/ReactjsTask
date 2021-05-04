import { createSelector } from "reselect";

const authSelector = (state) => state.authReducer;

export const selectError = createSelector(
    [authSelector],
    (authReducer) => authReducer.error
);

export const selectSuccess = createSelector(
    [authSelector],
    (authReducer) => authReducer.success
);

export const selectToken = createSelector(
    [authSelector],
    (authReducer) => authReducer.token
);