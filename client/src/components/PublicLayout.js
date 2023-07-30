import React from 'react'
import {  useNavigate } from "react-router-dom";
import {HashLink as Link } from 'react-router-hash-link';
import './../resources/publiclayout.css'
function PublicLayout(props) {
  const navigate = useNavigate();
  return (
    <div className='layout'>
    <div className='header' >
    <img className='logo'/>
    <ul id="navbar" >
              <li>
                <a className="active" href="/">
                  Home
                </a>
              </li>
              <li>
                <Link smooth to="#about">About Us</Link>
              </li>
              <li>
                <Link smooth  to="#contact">Contact Us</Link>
              </li>
              <li>
                <button onClick={() => {
         
          navigate("/register");
        }}>Sign Up</button>
              </li>
              <li>
                <button onClick={() => {
         
         navigate("/login");
       }}>Sign In </button>
              </li>       
            </ul>
      </div> 
      <div className='content'>
        {props.children}
      </div>
  </div>
  )
}

export default PublicLayout