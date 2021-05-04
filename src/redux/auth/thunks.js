import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// LOGIN
const loginAsync = async (data, { rejectWithValue }) => {
  try {
    const res = await axios({
      url: "/security/auth_check",
      method: "POST",
      data,
    });
    return res;
  } catch (err) {
    return rejectWithValue([], err);
  }
};

export const login = createAsyncThunk("auth/login", loginAsync);
