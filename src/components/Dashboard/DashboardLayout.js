import React from "react";
import { Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import ProductsTable from "../Products/Main";
import styles from "../../styles/DashboardLayout.module.css";
// REDUX
import { logout } from "../../redux/auth/authSlice";
import { useDispatch } from "react-redux";

const DashboardLayout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.dashboard_wrap}>
      <div className={styles.logout}>
        <Button onClick={handleLogout} icon={<LogoutOutlined />}>
          Logout
        </Button>
      </div>

      <ProductsTable />
    </div>
  );
};

export default DashboardLayout;
