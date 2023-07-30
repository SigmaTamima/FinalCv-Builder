import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space, Row, Col } from "antd";
import TextArea from "antd/es/input/TextArea";

const style = {
  padding: "10px 0",
};
function Experience() {
  return (
    <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      <Col className="gutter-row" span={12}>
        <div style={style}>
          {" "}
     
            <h5>Experience</h5>
            <Form.List name="experience">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space
                      key={key}
                      style={{
                        display: "flex",
                        marginBottom: 8,
                      }}
                      align="baseline"
                    >
                       <Form.Item
                {...restField}
                name={[name, "company"]}
                rules={[
                  { required: true, message: "Missing Company Name" },
                ]}
              >
                <Input placeholder="Company" />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, "years"]}
                rules={[
                  { required: true, message: "Missing Years" },
                ]}
              >
                <Input placeholder="Years" />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, "place"]}
                rules={[
                  { required: true, message: "Missing Location" },
                ]}
              >
                <Input placeholder="Place" />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, "range"]}
                rules={[
                  { required: true, message: "Missing Year Range" },
                ]}
              >
                <Input placeholder="Year Range" />
              </Form.Item>

                      <MinusCircleOutlined
                        style={{ fontSize: 25, color: "tomato" }}
                        onClick={() => remove(name)}
                      />
                    </Space>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add field
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          
        </div>
      </Col>
      <Col className="gutter-row" span={12}>
        <div style={style}>
     
            <h5>Projects</h5>
            <Form.List name="projects">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space
                      key={key}
                      style={{
                        display: "flex",
                        marginBottom: 8,
                      }}
                      align="baseline"
                    >
                      <Form.Item
                {...restField}
                name={[name, "title"]}
                rules={[
                  { required: true, message: "Missing first name" },
                ]}
              >
                <Input placeholder="Title" />
              </Form.Item>
                     
                      <Form.Item
                        {...restField}
                        name={[name, "range"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing Year",
                          },
                        ]}
                      >
                        <Input placeholder="Year" />
                      </Form.Item>
                      <Form.Item
                      {...restField}
                      name={[name, "rating"]}
                      rules={[
                        { required: true, message: "Missing Description" },
                      ]}
                    >
                      <TextArea placeholder="Description" />
                    </Form.Item>

                      <MinusCircleOutlined
                        style={{ fontSize: 25, color: "tomato" }}
                        onClick={() => remove(name)}
                      />
                    </Space>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add field
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
        
        </div>
      </Col>
    </Row>
  )
}

export default Experience