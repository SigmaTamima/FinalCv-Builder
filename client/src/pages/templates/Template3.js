import React from "react";
import "../../resources/templates.css";
import { Layout, Space } from "antd";
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 140,
  backgroundColor: "grey",
  padding: "20px"
};
const contentStyle = {
  textAlign: "left",
  minHeight: 120,
  lineHeight: "120px",
  color: "#1C1B45",
  backgroundColor: "#D4D2BF",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#22205A",
  backgroundColor: "#AFA7A7",
};
function Template3() {
  const user = JSON.parse(localStorage.getItem("resumebuilder-user"));
  return (
    <div>
      <Layout>
        <Header style={headerStyle}>
          {" "}
          <h1>
            {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
          </h1>
          <div>
          <p style={{fontWeight:'bolder'}}>{user.email} , {user.address}, {user.mobileNumber}</p>
          <p></p>
        </div>
        </Header>

        <Layout hasSider>
          <Sider style={siderStyle }>
            {" "}
            <b> Objective</b>
          </Sider>
          <Content style={contentStyle}>
            <p style={{marginLeft:'2rem'}}>
                {user.carrierObjective} </p></Content>
          <hr />
        </Layout>
        <div className="divider mt-1"></div>
        <Layout hasSider>
          <Sider style={siderStyle}>
            {" "}
            <b> Education</b>
          </Sider>
          <Content style={contentStyle}>
            {user.education.map((education) => {
              return (
                <div className="d-flex  justify-content align-items-center">
                <p style={{marginLeft:' 2rem'}} >
                <b>{education.range} : </b>
                  <b>{education.qualification}  with {education.percentage}% </b>
                  in {education.institution}
                </p>
              </div>
              );
            })}
            
          </Content>
          
        </Layout>
        <div className="divider mt-1"></div>
        <Layout hasSider>
          <Sider style={siderStyle}>
            {" "}
            <b> Experience</b>
          </Sider>
          <Content style={contentStyle}>
            {user.experience.map((exp) => {
              return (
                <div className="d-flex  justify-content align-items-center">
                  <p style={{marginLeft:' 2rem'}} >
                  <b>{exp.range} : </b>
                    <b>{exp.company}</b>
                    in {exp.place}
                  </p>
                </div>
              );
            })}
            
          </Content>
          
        </Layout>
        <div className="divider mt-1"></div>
        <Layout hasSider>
          <Sider style={siderStyle}>
            {" "}
            <b> Projects</b>
          </Sider>
          <Content style={contentStyle}>
            {user.projects.map((project) => {
              return (
                <div className="d-flex  justify-content align-items-center">
                  <p style={{marginLeft:' 2rem'}} >
                  <b>{project.title} : </b>
                    <b>{project.range}</b>
                    in {project.rating}
                  </p>
                </div>
              );
            })}
            
          </Content>
          
        </Layout>
        <div className="divider mt-1"></div>
        <Layout hasSider>
          <Sider style={siderStyle}>
            {" "}
            <b> Skills</b>
          </Sider>
          <Content style={contentStyle}>
            {user.skills.map((skill) => {
              return (
                <div className="d-flex  justify-content align-items-center">
                  <p style={{marginLeft:' 2rem'}} >
                  <b>{skill.technology}</b>
               
                  </p>
                </div>
              );
            })}
            
          </Content>
          
        </Layout>
      </Layout>
    </div>
  );
}

export default Template3;
