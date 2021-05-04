import Moment from 'react-moment';

<Table dataSource={data}>
    <Column title="Username" dataIndex="username" key="username" />
    <Column title="Dealer" dataIndex="dealer" key="dealer" />
    <Column title="Start-End" dataIndex="start-end" key="start-end" />
    <Column title="Address" dataIndex="address" key="address"
        render={(time) => <Moment>{time}</Moment>} />
</Table>