import { Form, Input, Button, message } from "antd";
import React, { useEffect } from "react";
import { Order } from "../../interfaces/order";
import axios from "axios";
import { useForm } from "antd/es/form/Form";
interface Props {
  isRead?: boolean;
  onClose: () => void;
  data?: Order;
  fetchData?: () => void;
}
const FormOrder = ({ isRead, onClose, data, fetchData }: Props) => {
  const [form] = useForm();
  useEffect(() => {
    console.log(data);
    form.resetFields();
    if (data) {
      form.setFieldsValue(data);
    }
  }, [data]);
  const onFinish = (formBody: Order) => {
    const api = data
      ? axios.patch("http://localhost:8000/order", { ...formBody })
      : axios.post("http://localhost:8000/order", { ...formBody });
    api.then((res) => {
      data
        ? message.success("Update Success!")
        : message.success("Create Success!");
      onClose();
      if (fetchData) fetchData();
    });
  };
  return (
    <Form
      layout="vertical"
      disabled={isRead}
      onFinish={(value) => onFinish(value)}
      form={form}
    >
      <Form.Item label="Tracking Number" name={"trackingNumber"}>
        <Input />
      </Form.Item>
      <Form.Item label="Status" name={"status"}>
        <Input />
      </Form.Item>
      <Form.Item label="Location" name={"location"}>
        <Input />
      </Form.Item>
      <Form.Item label="Reciever" name={"receiver"}>
        <Input />
      </Form.Item>
      <div className="grid grid-cols-2 gap-2 pb-6">
        <Button size="large" onClick={onClose}>
          Cancel
        </Button>
        <Button type="primary" size="large" htmlType="submit">
          Save
        </Button>
      </div>
    </Form>
  );
};

export default FormOrder;
