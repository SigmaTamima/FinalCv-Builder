import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space, Row, Col } from "antd";

const style = {
  padding: "10px 0",
};
function SkillsandEducation() {
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
          <h5>Education</h5>
          <Form.List name="education">
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
                      name={[name, "qualification"]}
                      rules={[
                        { required: true, message: "Missing Qualification" },
                      ]}
                    >
                      <Input placeholder="Qualification" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "percentage"]}
                      rules={[
                        { required: true, message: "Missing Percentage" },
                      ]}
                    >
                      <Input placeholder="Percentage" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "institution"]}
                      rules={[
                        { required: true, message: "Missing Instituition" },
                      ]}
                    >
                      <Input placeholder="Institution" />
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
                    Add Education
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </div>
      </Col>
      <Col className="gutter-row" span={12}>
        <div style={style}>
          {" "}
          <h5>Skills</h5>
          <Form.List name="skills">
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
                      name={[name, "technology"]}
                      rules={[
                        { required: true, message: "Missing Technology" },
                      ]}
                    >
                      <Input placeholder="Technology" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "rating"]}
                      rules={[
                        { required: true, message: "Missing Rating" },
                      ]}
                    >
                      <Input placeholder="Rating" />
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
  );
}

export default SkillsandEducation;
