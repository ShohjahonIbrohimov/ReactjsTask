import { Form, Input, Button } from "antd";

const NormalLoginForm = ({ handleAdd }) => {
  const onFinish = (values) => {
    handleAdd(values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="title"
        rules={[
          {
            required: true,
            message: "Please input Title!",
          },
        ]}
      >
        <Input size="large" placeholder="Title" />
      </Form.Item>

      <Form.Item>
        <Button
          block
          size="large"
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NormalLoginForm;
