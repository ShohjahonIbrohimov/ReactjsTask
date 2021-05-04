// @ts-nocheck
import React, { useEffect } from "react";
import GTable from "../Reusable/GTable";
import columns from "./columns.json";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/products/thunks";

const Table = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);

  // EFFECTS
  useEffect(() => {
    dispatch(fetchProducts({}));
  }, []);

  return (
    <div>
      <GTable columns={columns} data={products} />
    </div>
  );
};

export default Table;
