import React, { useState } from 'react';
// COMPONENTS
import TicketList from '../../components/TicketList';
import UploadTicket from '../../components/UploadTicket';
import GModal from '../../components/GModal';



const Index = () => {
    const [visible, setVisible] = useState(false);

    const openAddTicketModal = () => {
        setVisible(true);
    }

    return (
        <div className="custom_container">
            <TicketList openAddTicketModal={openAddTicketModal} />

            <GModal visible={visible} setVisible={setVisible} >
                <UploadTicket />
            </GModal>
        </div>
    )
}

export default Index
