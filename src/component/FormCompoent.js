import React, { useRef } from "react";
import { Form, Input, InputNumber, Button, Select } from "antd";
import { postData } from "../api/BaseApi";
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

const FormComponent = ({ setUserData, userData, editable }) => {
  const fromRef = useRef();
  const onFinish = (values) => {
    postData("userTable", values.user).then((response) => {
      setUserData([...userData, response.data]);
      toast.success("You have added successfully.");
      fromRef.current.resetFields();
    });
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      initialValues={{ user: editable }}
      ref={fromRef}
    >
      <Form.Item
        name={["user", "firstname"]}
        shouldUpdate={(prevValues, curValues) => {
          console.log({ prevValues });
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
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormComponent;
