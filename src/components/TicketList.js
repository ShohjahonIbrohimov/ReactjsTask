import React, { useState, useEffect } from "react";
import { Table, Button } from 'antd';
import { PlusOutlined, DeleteOutlined, DownloadOutlined } from '@ant-design/icons';
import Moment from 'react-moment';
import GModal from './GModal';
// REDUX
import {
    startAddTicket,
    startFetchTickets
} from "../redux/tickets/tickets.actions";
import {
    selectTickets
} from "../redux/tickets/tickets.selector.js";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import QrIcon from "./qr-code_icon.png";

var QRCode = require('qrcode.react');

const columns = [
    {
        title: "Username",
        dataIndex: "username",
    },
    {
        title: "Dealer",
        dataIndex: "dealer",
    },
    {
        title: 'Start',
        dataIndex: 'start',
    },
    {
        title: 'End',
        dataIndex: 'end',
    },
    {
        title: "Ticket image",
        dataIndex: "ticket",
    },
    {
        title: "Adult",
        dataIndex: "adult",
    },
    {
        title: "Child",
        dataIndex: "child",
    },
];
const { Column, ColumnGroup } = Table;

const TicketList = ({ openAddTicketModal, addTicket, tickets, fetchTickets }) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setloading] = useState(false);
    const [open, setopen] = useState(false)
    const [currentTicket, setcurrentTicket] = useState('');
    const [tableLoading, settableLoading] = useState(true)

    const onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys(selectedRowKeys)
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const hasSelected = selectedRowKeys.length > 0;

    const handleTicketLinkClick = (link) => {
        setcurrentTicket(link);
        setopen(true);
    }

    useEffect(() => {
        fetchTickets(settableLoading);
    }, [])



    const downloadQRCode = () => {
        const canvas = document.getElementById("qr-gen");
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = `asssa.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };


    return (
        <div>
            <div style={{ marginBottom: 16 }}>
                <Button onClick={openAddTicketModal} icon={<PlusOutlined />} type="primary" loading={loading}>
                    Add
          </Button>
                <Button icon={<DeleteOutlined />} danger type="primary" disabled={!hasSelected} loading={loading}>
                    Delete
          </Button>

            </div>

            <Table loading={tableLoading} bordered={true} dataSource={tickets}>
                <Column title="Username" dataIndex="username" key="username" />
                <Column title="Dealer" dataIndex="dealer" key="dealer" />
                <Column title="Start" dataIndex="start" key="start" render={(time) => <Moment format="YYYY/MM/DD">{time}</Moment>} />

                <Column title="End" dataIndex="end" key="end" render={(time) => <Moment format="YYYY/MM/DD">{time}</Moment>} />
                <Column align="center" title="Ticket Image" dataIndex="ticket" key="ticket" render={(link) =>
                    <React.Fragment>
                        <img style={{
                            height: "35px",
                            width: "35px",
                            cursor: "pointer"
                        }} onClick={() => handleTicketLinkClick(link)} src={QrIcon} alt="r_code_icon" />
                        <Button onClick={downloadQRCode} type="primary" icon={<DownloadOutlined />} size="medium" />

                    </React.Fragment>

                }
                />
                <ColumnGroup title="Our prices">
                    <Column title="Adult" dataIndex="Adults" key="adult" />
                    <Column title="Child" dataIndex="forChildren" key="child" />
                </ColumnGroup>
            </Table>
            <GModal visible={open} setVisible={setopen} width={300}>
                <div style={{
                    textAlign: "center"
                }}>
                    <QRCode id="qr-gen" style={{
                        height: "212px",
                        width: "212px"
                    }} value={currentTicket} />
                </div>
                <div>
                    <Button onClick={downloadQRCode} style={{ width: "100%" }} type="primary" icon={<DownloadOutlined />} size="large">
                        Download
                    </Button>
                </div>
            </GModal>
        </div>
    );

}

const mapDispatchToProps = (dispatch) => ({
    addTicket: (data) => dispatch(startAddTicket(data)),
    fetchTickets: (data) => dispatch(startFetchTickets(data))
});

const mapStateToProps = createStructuredSelector({
    tickets: selectTickets
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);