import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ticketsReducer from "./tickets/tickets.reducer";
import authReducer from "./auth/auth.reducer";



const persistConfig = {
    key: "auth",
    storage,
    whitelist: ["authReducer"],
};

const rootReducer = combineReducers({
    ticketsReducer,
    authReducer
});

export default persistReducer(persistConfig, rootReducer);
