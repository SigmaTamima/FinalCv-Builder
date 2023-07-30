import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";
import PublicLayout from "./../components/PublicLayout";
import { Col, Row, Form, Input, Button, Checkbox, message, Spin } from "antd";
import axios from "axios";
function Register() {
  const style = {
    padding: "10px 15px",
  };
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 2 },
    }),
    []
  );

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post("api/user/register", values);
      setLoading(false);
      message.success("Registration successfull");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error("Registration failed");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("resumebuilder-user")) {
      navigate("/home");
    }
  });
  return (
    <animated.div style={props}>
      <PublicLayout>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6}>
            <div style={style}></div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}></div>
          </Col>

          <Col className="gutter-row" span={12}>
            <div style={style} className="form">
              <h1>Sign Up</h1>
              <div>
                <Form layout="vertical" onFinish={onFinish}>
                  {loading && <Spin size="large" />}
                  <Form.Item name="username" label="Username">
                    <Input />
                  </Form.Item>
                  <Form.Item name="password" label="Password">
                    <Input type="password" />
                  </Form.Item>
                  <Form.Item name="cpassword" label=" Confirm Password">
                    <Input type="password" />
                  </Form.Item>
                  <div className="register">
                    <b>
                      <Link to="/login" style={{ color: "white" }}>
                        Click Here to Sign In
                      </Link>
                    </b>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{
                        background: "black",
                        width: "150px",
                        height: "30px",
                      }}
                    >
                      Sign Up
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </PublicLayout>
    </animated.div>
  );
}

export default Register;
