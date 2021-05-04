import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./thunks";

// Define the initial state using that type
const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.fulfilled.toString()]: (state, action) => {
      let payload = action.payload;
      state.products = payload.data.items;
    },
  },
});

export default productSlice.reducer;
