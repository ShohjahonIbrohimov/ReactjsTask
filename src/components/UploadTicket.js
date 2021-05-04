import React, { useState, useEffect } from 'react'
import { Upload, message, InputNumber } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import {
    Form, Input, Button, DatePicker,
} from 'antd';
// REDUX
import {
    startAddTicket,
    startUploadTicketImg,
    setError,
    setSuccess
} from "../redux/tickets/tickets.actions";
import {
    selectTicketImg,
    selectError,
    selectSuccess
} from "../redux/tickets/tickets.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
var QRCode = require('qrcode.react');

const { Dragger } = Upload;

// MESSAGES
const messageSuccess = (text) => {
    message.success(text);
};


const messageError = (text) => {
    message.error(text);
};

const UploadTicket = ({ addTicket, uploadTicketImage, ticketImg, error, success, handleSetError, handleSetSuccess }) => {
    const [loading, setloading] = useState(false)
    const onFinish = (values) => {
        setloading(true);
        console.log('Received values of form: ', values);
        values.ticket = ticketImg;
        addTicket(values);
    };

    const hanldeChangeFile = (info) => {
        uploadTicketImage(info.file)
    }

    useEffect(() => {
        if (error) {
            messageError("User not found")
            setloading(false);
            setTimeout(() => {
                handleSetError(false);
            }, 1000);
        }

        if (success) {
            messageSuccess("Successfully added")
            setloading(false);
            setTimeout(() => {
                handleSetSuccess(false);
            }, 1000);
        }
    }, [error, success])
    return (
        <div>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                size="large"
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="dealer"
                    rules={[
                        {
                            required: true,
                            message: 'Please input dealer!',
                        },
                    ]}
                >
                    <Input placeholder="Dealer" />
                </Form.Item>

                <Form.Item name="start">
                    <DatePicker placeholder="Start" />
                </Form.Item>
                <Form.Item name="end">
                    <DatePicker placeholder="End" />
                </Form.Item>

                <Form.Item
                    name="Adults"
                >
                    <InputNumber
                        defaultValue={1000}
                        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    />
                </Form.Item>
                <Form.Item
                    name="forChildren"
                >
                    <InputNumber
                        defaultValue={1000}
                        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    />
                </Form.Item>

                <div style={{ margin: "1rem 0" }}>
                    <Dragger style={{ width: "100%" }} multiple={false} name="file" onChange={hanldeChangeFile}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">

                        </p>
                    </Dragger>
                    {/* <QRCode value={ticketImg} />, */}
                </div>

                <Form.Item>
                    <Button loading={loading} style={{ width: "100%" }} type="primary" htmlType="submit" className="login-form-button">
                        Create
                    </Button>
                </Form.Item>
            </Form>


        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    ticketImg: selectTicketImg,
    error: selectError,
    success: selectSuccess,
})

const mapDispatchToProps = (dispatch) => ({
    addTicket: (data) => dispatch(startAddTicket(data)),
    uploadTicketImage: (data) => dispatch(startUploadTicketImg(data)),
    handleSetError: (data) => dispatch(setError(data)),
    handleSetSuccess: (data) => dispatch(setSuccess(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadTicket);
