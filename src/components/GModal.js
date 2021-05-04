import React from 'react';
import { Modal } from 'antd';

const GModal = ({ visible, setVisible, children, width = "" }) => {

    return (
        <>
            <Modal
                footer={null}
                title="Create Ticket"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                style={{ width: `${width}px` }}
            >
                {children}
            </Modal>
        </>
    );
}

export default GModal;