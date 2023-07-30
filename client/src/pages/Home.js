import React from 'react'
import templateimage from '../resources/templates/templateimage.png'
import templateimage2 from '../resources/templates/templateimage2.jpg'
import templateimage3 from '../resources/templates/templateimage3.jpg'
import { useNavigate } from "react-router-dom";
import DefaulltLayout from '../components/DefaultLayout'
import "../resources/templates.css";
import { Button } from 'antd';

function Home() {
  const navigate = useNavigate();
  const template=[
    {
      title: "Simple Resume",
      image: templateimage,
    },
    {
      title: "Highlighted Sections Resume",
      image:templateimage2,
    },
  
    {
      title: "Sider Resume",
      image:templateimage3,
    },
  
  ]
  return (
   <DefaulltLayout>
  < div className="row home">
        {template.map((template, index) => {
          return (
            <div className="col-md-4">
              <div className="template">
                <img
                  src={template.image}
                  height="300"
                  alt=""
                  style={{ width: "100%" }}
                />
                <div className="text">
                  <p>{template.title}</p>
                  <button onClick={() => navigate(`/templates/${index + 1}`)}>
                    TRY
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{marginTop:'5%'}}>
        <Button onClick={() =>navigate('/profile') } style={{width:'15rem', height:'5rem', fontSize:'40px'}}>Create CV</Button>
        </div>
   </DefaulltLayout>
  )
}

export default Home