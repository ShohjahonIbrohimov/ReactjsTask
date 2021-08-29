import React, { useState, useEffect } from "react";
import styles from "../../styles/Auth/Loginform.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/thunks";
import {  removeError } from "../../redux/auth/authSlice";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
// ANTD
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Loginform = () => {
  const authenticated = useSelector((state) => state.authReducer.authenticated);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.authReducer.error);
  const [loading, setloading] = useState(false);

  const onSubmit = (data) => {
    // e.preventDefault();
    setloading(true);
    dispatch(login(data));
  };

  useEffect(() => {
    if (error) setloading(false);
    setTimeout(() => {
      dispatch(removeError());
    }, 3000);
  }, [error]);

  return (
    <div className={styles.card}>
      {authenticated && <Redirect to="/dashboard" />}
      <header className={styles.header}>
        <h1>Login</h1>
      </header>
      {error && (
        <div className={styles.error}>
          Error: One of the values are incorrect (username, password)
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.input_wrap}>
          <input
            className={styles.input}
            type='email'
            placeholder='Email'
            {...register("email", {required: true})}
          />
          {errors.email && <span className={styles.required}>This field is required</span>}
        </div>
        <div className={styles.input_wrap}>
          <input
            className={styles.input}
            type='password'
            placeholder='Password'
            {...register("password", {required: true})}
          />
          {errors.password && <span className={styles.required}>This field is required</span>}
        </div>
        
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
