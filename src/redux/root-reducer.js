import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import productReducer from "./products/productSlice";

const rootReducer = combineReducers({ authReducer, productReducer });

export default rootReducer;
