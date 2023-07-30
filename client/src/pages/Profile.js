import React, { useState } from "react";
import { Col, Row,Form,
    Input,
    Button,
    Checkbox,
    message,
    Spin,Tabs, } from 'antd';
import DefaultLayout from "../components/DefaultLayout";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import PersonalInfo from "../components/PersonalInfo";
import SkillsandEducation from "../components/SkillsandEducation";
import Experience from "../components/Experience";

const { TabPane } = Tabs;
function Profile() {
  const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const user = JSON.parse(localStorage.getItem("resumebuilder-user"));
    const onFinish = async (values) => {
      setLoading(true);
      try {
        const result = await axios.post("api/user/update", {
          ...values,
          _id: user._id,
        });
        localStorage.setItem("resumebuilder-user", JSON.stringify(result.data));
        setLoading(false);
        message.success("Profile updated successfully");
      } catch (error) {
        setLoading(false);
        message.error("Registration failed");
      }
    };
  return (
    <DefaultLayout>
 <div className='profile'>
      <div  >
      {loading && <Spin size="large" />}
    <div className="update-profile" >
      <h4><b>Update Profile</b></h4>
      <hr />
      <Form layout="vertical " onFinish={onFinish} initialValues={user}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Personal Information" key="1">    
          <PersonalInfo/>   
          </TabPane>
          <TabPane tab="Skills and Education" key="2">      
          <SkillsandEducation/>  
          </TabPane>
          <TabPane tab="Experience and Projects" key="3">    
          <Experience/> 
          </TabPane>
        
        </Tabs>
        <hr/>
        <Button htmlType="submit" >UPDATE</Button>
        <hr/>
        <Button  onClick={() =>navigate('/home') } > Choose CV</Button>
        </Form>
    </div>
        </div>
      
    </div>
</DefaultLayout>
  )
}

export default Profile