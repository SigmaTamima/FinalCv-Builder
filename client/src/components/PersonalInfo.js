import React from "react";
import { Col, Divider, Row ,Form, Input} from 'antd';
const style = {
  padding: '8px 0',
};
const { TextArea } = Input;
function PersonalInfo() {
  return (
     <div>
      <Divider orientation="left"></Divider>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={6}>
        <div style={style}>  <Form.Item
              name="firstName"
              label="First Name"
              rules={[{ required: true }]}
              
            >
              <Input />
            </Form.Item></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}> <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}><Form.Item name="email" label="Email" rules={[{ required: true }]}>
              <Input />
            </Form.Item></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}></div>
      </Col>
    </Row>
    <Divider orientation="left"></Divider>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={6}>
        <div style={style}><Form.Item
            name="mobileNumber"
            label="Mobile Number"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}> 
          <Form.Item
            name="portfolio"
            label="Portfolio"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item></div>
      </Col>
      <Col className="gutter-row" span={6}>
       
      </Col>
      <Col className="gutter-row" span={6}>
      
      </Col>
    </Row>
    <Divider orientation="left"></Divider>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={6}>
        <div style={style}><Form.Item
            name="carrierObjective"
            label="Carrier Objective"
            rules={[{ required: true }]}
          >
            <TextArea />
          </Form.Item></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}> 
        <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true }]}
          >
            <TextArea />
          </Form.Item></div>
      </Col>
      <Col className="gutter-row" span={6}>
       
      </Col>
      <Col className="gutter-row" span={6}>
      
      </Col>
    </Row>
</div>
  )
}

export default PersonalInfo