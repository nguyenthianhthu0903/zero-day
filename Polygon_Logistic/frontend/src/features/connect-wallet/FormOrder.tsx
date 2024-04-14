import { Form, Input, Button } from "antd";
import React from "react";
interface Props {
  isRead?: boolean;
  onClose: () => void;
}
const FormOrder = ({ isRead, onClose }: Props) => {
  return (
    <Form layout="vertical" disabled={isRead}>
      <Form.Item label="Tracking Number">
        <Input />
      </Form.Item>
      <Form.Item label="Status">
        <Input />
      </Form.Item>
      <Form.Item label="Location">
        <Input />
      </Form.Item>
      <Form.Item label="Reciever">
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
