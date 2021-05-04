import React from "react";
import Login from "../components/Auth/AuthLayout";
import Dashboard from "../components/Dashboard/DashboardLayout";

export const ROUTES = [
  {
    path: "/",
    key: "APP_LOGIN",
    exact: true,
    component: () => <Login />,
  },
  {
    path: "/dashboard",
    key: "APP_DASHBOARD",
    exact: false,
    component: () => <Dashboard />,
  },
];
