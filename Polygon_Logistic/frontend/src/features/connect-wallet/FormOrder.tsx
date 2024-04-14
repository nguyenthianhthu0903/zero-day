import { Form, Input, Button } from "antd";
import React from "react";
import { Order } from "../../interfaces/order";
interface Props {
  isRead?: boolean;
  onClose: () => void;
  data?: Order;
}
const FormOrder = ({ isRead, onClose, data }: Props) => {
  console.log(data);
  return (
    <Form layout="vertical" disabled={isRead} initialValues={{ ...data }}>
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
