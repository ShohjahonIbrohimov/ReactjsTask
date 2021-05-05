// @ts-nocheck
import React, { useEffect, useState } from "react";
import GTable from "../Reusable/GTable";
import columns from "./columns.json";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/products/thunks";

const Table = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const [filterData, setfilterData] = useState([])
  const [data, setdata] = useState([])
  const [searchText, setsearchText] = useState("")


  // EFFECTS
  useEffect(() => {
    dispatch(fetchProducts({}));
  }, []);

   useEffect(() => {
    setdata(products)
  }, [products]);

function compare( a, b ) {
  if ( a.name.indexOf(searchText) < b.name.indexOf(searchText) ){
    return -1;
  }
  if ( a.name.indexOf(searchText) > b.name.indexOf(searchText) ){
    return 1;
  }
  return 0;
}


  const handleSearch = (searchText) => {
    let text = searchText.toLowerCase()
    if(searchText !== "") {
      let data = products.filter(p => p.name.toLowerCase().includes(searchText))
       data.sort((a, b) => (a.name.toLowerCase().indexOf(searchText) < b.name.toLowerCase().indexOf(searchText)) ? -1 : ((b.name.toLowerCase().indexOf(searchText) < a.name.toLowerCase().indexOf(searchText)) ? 1 : 0));
    setdata(data)
    } else {
      setdata(products)
    }
   
  }

  return (
    <div>
    <input type="text" id="myInput" onChange={(e) => handleSearch(e.target.value) }placeholder="Search..." title="Type in a name" />
      <GTable columns={columns} data={data} />
    </div>
  );
};

export default Table;
