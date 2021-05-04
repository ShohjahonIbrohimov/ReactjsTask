import React, { useState, useEffect } from "react";
import styles from "../../styles/Auth/Loginform.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/thunks";
import { getSubdomain, removeError } from "../../redux/auth/authSlice";
// ANTD
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Loginform = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.authReducer.error);
  const [loading, setloading] = useState(false);

  const [_username, setUsername] = useState("fortest");
  const [_password, setPassword] = useState("fortest1");
  const [_subdomain, setSubdomain] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    let formData = new FormData();
    formData.append("_username", _username);
    formData.append("_password", _password);
    formData.append("_subdomain", _subdomain);

    dispatch(login(formData));
  };

  useEffect(() => {
    if (error) setloading(false);
    setTimeout(() => {
      dispatch(removeError());
    }, 3000);
  }, [error]);

  return (
    <div className={styles.card}>
      <header className={styles.header}>
        <h1>Login</h1>
      </header>
      {error && (
        <div className={styles.error}>
          Error: One of the values are incorrect (username, password, subdomain)
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          value={_username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
          type='text'
          placeholder='Login'
        />
        <input
          value={_password}
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
          type='text'
          placeholder='Password'
        />
        <input
          value={_subdomain}
          onChange={(e) => {
            setSubdomain(e.target.value);
            dispatch(getSubdomain(e.target.value));
          }}
          className={styles.input}
          type='text'
          placeholder='Subdomain'
        />

        <button type='submit' className={styles.submit_btn}>
          <div className={styles.loader}>
            <Spin size='small' spinning={loading} indicator={antIcon} />
          </div>
          Kirish
        </button>
      </form>
    </div>
  );
};

export default Loginform;
