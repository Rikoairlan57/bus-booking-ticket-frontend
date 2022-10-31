import React from "react";
import { Form } from "antd";
import { Link } from "react-router-dom";

const Register = () => {
  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <div>
      <div className="h-screen d-flex justify-content-center align-items-center auth">
        <div className="w-400 card p-3">
          <h1 className="text-lg">StarBus - Register</h1>
          <hr />
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Name" name="name">
              <input type="text" />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <input type="text" />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <input type="password" />
            </Form.Item>
            <div className="d-flex justify-content-between align-items-center my-3">
              <Link to="/login">Click Here To Login</Link>
              <button className="secondary-btn" type="submit">
                Register
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
