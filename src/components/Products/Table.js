import React, { useEffect, useState } from "react";
import { List, Button, Input, Row, Col, Affix } from "antd";
import { DeleteOutlined, EditOutlined, SaveOutlined } from "@ant-design/icons";
import axios from "axios";
import AddForm from "./AddForm";
const { TextArea } = Input;

const Table = () => {
  const [listData, setlistData] = useState([]);
  const [loading, setloading] = useState(false);
  const [editItem, seteditItem] = useState(null);

  const handleDelete = (id) => {
    setlistData(listData.filter((l) => l.id !== id));
  };

  const handleEdit = (id) => {
    seteditItem(listData.filter((l) => l.id === id)[0]);
  };

  const handleSave = (id, index) => {
    let copyData = listData.slice();
    copyData[index] = editItem;
    setlistData(copyData);
    seteditItem(null);
  };

  const handleChange = (e) => {
    seteditItem({ ...editItem, title: e.target.value });
  };

  const handleAdd = (data) => {
    setlistData([
      ...listData,
      {
        ...data,
        id: listData[0].id + 1,
        userId: listData[0].id + 1,
      },
    ]);
  };

  useEffect(() => {
    setloading(true);
    axios({
      url: "https://jsonplaceholder.typicode.com/albums",
      method: "GET",
    })
      .then((res) => {
        setloading(false);
        setlistData(res.data);
      })
      .catch((err) => setloading(false));
  }, []);

  return (
    <Row justify="space-between">
      <Col span={15}>
        <List
          loading={loading}
          itemLayout="vertical"
          pagination={{
            pageSize: 5,
          }}
          dataSource={listData.sort(function (a, b) {
            return b.id - a.id;
          })}
          renderItem={(item, index) => (
            <List.Item
              actions={[
                <Button
                  disabled={editItem && editItem.id === item.id}
                  onClick={() => handleDelete(item.id)}
                  type="danger"
                  icon={<DeleteOutlined />}
                />,
                <Button
                  disabled={editItem && editItem.id === item.id}
                  onClick={() => handleEdit(item.id)}
                  type="primary"
                  icon={<EditOutlined />}
                />,
                <Button
                  onClick={() => handleSave(item.id, index)}
                  disabled={editItem?.id === item.id ? !editItem : true}
                  type="primary"
                  icon={<SaveOutlined />}
                >
                  Save
                </Button>,
              ]}
              key={item.title}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://via.placeholder.com/80x40"
                />
              }
            >
              <List.Item.Meta
                title={
                  <div>
                    <h2>{item.title}</h2>{" "}
                    {editItem && editItem.id === item.id && (
                      <TextArea
                        size="large"
                        autoSize
                        value={editItem.title}
                        onChange={handleChange}
                      />
                    )}
                  </div>
                }
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </Col>
      <Col span={5}>
        <Affix offsetTop={10}>
          <AddForm handleAdd={handleAdd} />
        </Affix>
      </Col>
    </Row>
  );
};

export default Table;
