import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const AxiosConfig = ({ children }) => {
  const token = useSelector((state) => state.authReducer.token);
  const subdomain = useSelector((state) => state.authReducer.subdomain);

  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axios.defaults.baseURL = `https://${subdomain}.ox-sys.com`;

  return <div>{children}</div>;
};

export default AxiosConfig;
