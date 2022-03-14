import React from "react";
import { Form, Input, InputNumber, Button, Select } from "antd";
import { postData, updateData } from "../api/BaseApi";
import { toast } from "react-toastify";
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const FormCompoentEdit = ({ setUserData, userData, editable, setEditable }) => {
  const onFinish = (values) => {
    updateData(`userTable/${editable.id}`, values.user).then((response) => {
      const index = userData.findIndex((item) => item.id === editable.id);
      const newUserData = [...userData];
      newUserData[index] = response.data;
      setUserData([...newUserData]);
      toast.success("You have updated successfully.");
      setEditable({});
    });
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      initialValues={{ user: editable }}
    >
      <Form.Item
        name={["user", "firstname"]}
        shouldUpdate={(prevValues, curValues) => {
          return prevValues.user.firstname !== curValues.user.firstname;
        }}
        label="First name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "lastname"]}
        label="Last name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[
          {
            required: true,
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "age"]}
        label="Age"
        rules={[
          {
            required: true,

            type: "number",
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        name={["user", "gender"]}
        label="Gender"
        rules={[{ required: true, message: "Please select gender!" }]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
      <Form.Item name={["user", "discription"]} label="Discription">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => setEditable({})}
        >
          Add new
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormCompoentEdit;
