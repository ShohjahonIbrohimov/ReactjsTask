import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom'
// REDUX
import {
    startLogin
} from "../redux/auth/auth.actions";
import {
    selectError,
    selectSuccess
} from "../redux/auth/auth.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'

// MESSAGES
const messageSuccess = (text) => {
    message.success(text);
};


const messageError = (text) => {
    message.error(text);
};

// "username": "Clever_John",
//     "email": "webdevshoh@gmail.com",
//         "password": "highsc0re$",
//             "phone": 9998886767

const NormalLoginForm = ({ login, error, success }) => {
    const [loading, setloading] = useState(false)
    const history = useHistory();

    const onFinish = (values) => {
        setloading(true);
        console.log('Received values of form: ', values);
        login(values)
        // history.push('/tickets')
    };

    useEffect(() => {
        if (error) {
            messageError("User not found")
            setloading(false)
        }

        if (success) {
            messageSuccess("Successfully logged in!")
            setloading(false);
        }
    }, [error, success])

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            style={{ width: "300px" }}
        >
            { success && <Redirect to="/tickets" />}
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item style={{
                display: "flex",
                justifyContent: "space-between"
            }}>
                {/* <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item> */}

                <a className="login-form-forgot" href="">
                    Forgot password
        </a>
            </Form.Item>

            <Form.Item>
                <Button loading={loading} style={{ width: "100%" }} type="primary" htmlType="submit" className="login-form-button">
                    Log in
        </Button>
        Or <a href="">register now!</a>
            </Form.Item>
        </Form>
    );
};

const mapDispatchToProps = (dispatch) => ({
    login: (data) => dispatch(startLogin(data))
});

const mapStateToProps = createStructuredSelector({
    error: selectError,
    success: selectSuccess,
})

export default connect(mapStateToProps, mapDispatchToProps)(NormalLoginForm);
