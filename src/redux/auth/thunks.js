import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// LOGIN
const loginAsync = async (data, { rejectWithValue }) => {
  try {
    const res = await axios({
      url: "https://api.g-obox.ru/api/auth/signin",
      method: "POST",
      data: data,
    });
    return res;
  } catch (err) {
    // toast.error("Не правилный логин или/и пароль");
    return rejectWithValue([], err);
  }
};
export const login = createAsyncThunk("login", loginAsync);

