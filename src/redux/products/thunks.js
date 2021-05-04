import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ! FETCH REGIONS
const fetchProductsAsync = async (data, { rejectWithValue }) => {
  try {
    const res = await axios({
      url: "/variations",
      method: "GET",
    });
    return res;
  } catch (err) {
    return rejectWithValue([], err);
  }
};

export const fetchProducts = createAsyncThunk(
  "admin/getNoactive",
  fetchProductsAsync
);
