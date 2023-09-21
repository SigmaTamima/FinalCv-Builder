import React from "react";
import Lottie from "lottie-react";
import animationData from "../asset/animation_lkp5gji9.json";
import Sparkles from 'react-sparkle'
import { Col, Row, Button, Divider } from "antd";
import PublicLayout from "../components/PublicLayout";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Public() {
  const navigate = useNavigate();
  var settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
   
  };
  const style = {
 
    padding: '8px 10px',
  };
  return (
    <>
    <PublicLayout>
      <Divider orientation="left"></Divider>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={12}></Col>
       
        <Col className="gutter-row" span={12}>
          <div style={style}>
            <div className="container-fluid">
              <p>Online CV and Professional Resume Maker</p>
              <h2>
                <b>
                Create a Job-ready <br /> resume in minutes.
              </b></h2>
              <p>
                The #1 resume & CV builder, trusted by 4+ <br />
                million people to land their dream Job
              </p>
              <Button
                onClick={() => navigate("/register")}
                type="primary"
                shape="round"
                style={{fontSize:'22px',  textAlign:"center"}}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      </PublicLayout>
      <div className="pcontent" >
    <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
           <Col className="gutter-row" span={2}>
        <div style={style}> 
    </div>
    </Col>
      <Col className="gutter-row" span={8}>
        <div style={style}> 
       
        <Lottie animationData={animationData} /></div>
        <Sparkles color="teal" overflowPx={8} />
        <hr/>
       
      </Col>
      <Col className="gutter-row" span={2}>
        <div style={style}> 
    </div>
      </Col>
   
      <Col className="gutter-row" span={8}>
          <div className="paragraph" id="about">
            <h1 >About Us</h1>
            <p >
              Welcome to our CV Builder website,
              <br />
              where we simplify the process of creating professional resumes.
              <br /> With our user-friendly platform and meticulously designed
              templates,
              <br /> you can showcase your skills and experience effortlessly.
              <br /> Whether you're a recent graduate or a seasoned
              professional, our customization options cater to your unique
              needs. <br/>Save time and eliminate the hassle of formatting with our
              intuitive interface. <br/>Join us on our journey to redefine resume
              creation and unlock new opportunities on your career path. Start
              building your CV today and present yourself confidently to
              potential employers.
            </p>
            </div>
      </Col>
    </Row>

  </div>
  <div className="next">
         
  <Slider {...settings}>
      <div>
      <img src="\images\pngwing.com(2).png" style={{height:'400px'}} />
      </div>
      <div>
      <img src="\images\pngwing.com(3).png" style={{height:'400px'}} />
      </div>
      <div>
      <img src="\images\pngwing.com(4).png" style={{height:'450px'}} />
      </div>
      <div>
      <img src="\images\pngwing.com(2).png" style={{height:'400px'}} />
      </div>
      <div>
      <img src="\images\pngwing.com(3).png" style={{height:'400px'}} />
      </div>
      <div>
      <img src="\images\pngwing.com(4).png" style={{height:'450px'}} />
      </div>
    </Slider>
    <div className='footer' id="contact">
      <Link to="https://www.facebook.com/Softograph">
      <img  className="image1" src="\images\facebook.png"  /></Link>
      <Link to="https://www.linkedin.com/company/softograph-limited">
      <img  src="\images\linkedin.png" style={{height:'50px'}} /></Link>
      <Link to="https://www.instagram.com/">
      <img src="\images\instagram.png" style={{height:'50px'}} /></Link>
 
      <Link to="https://www.twitter.com/">
      <img src="\images\twitter.png" style={{height:'50px'}} /></Link>
  </div>
  </>
 
  );
}

export default Public;
