import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PublicLayout from "./../components/PublicLayout";
import axios from "axios";
import { Col, Row, Form, Input, Button, Checkbox, message, Spin } from "antd";
function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const onFinish = async (values) => {
    setLoading(true)
    try {
      const user =await axios.post("api/user/login", values);
      message.success("Logged in");
      localStorage.setItem("resumebuilder-user", JSON.stringify(user.data))
      setLoading(false);
      navigate('/home')
    } catch (error) {
      setLoading(false)
      message.error("Log In Unsuccessfull");
      
    }
  };
  const style = {
    padding: '10px 15px',
  };
  return (
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
        <h1>Sign In</h1>
            <div style={{ color: "white" }}>
              <Form layout="vertical" onFinish={onFinish}>
                {loading && <Spin size="large" />}
                <Form.Item name="username" label="Username">
                  <Input />
                </Form.Item>
                <Form.Item name="password" label="Password">
                  <Input type="password" />
                </Form.Item>
             
                <div className="register">
                  <b>
                    <Link to="/register" style={{ color: "white" }}>
                      Click Here to Sign Up
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
                    Sign In
                  </Button>
                </div>
              </Form>
              </div>
        </div>
        
      </Col>
    </Row>

    </PublicLayout>
  );
}

export default Login;
