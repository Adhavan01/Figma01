import React from "react";
import { Link, NavLink } from "react-router-dom";
import avatar from '../image/Group 1006.png';
import '../sass/home.scss';


function Home() {
    return (
      <>
        <main className="home_container">
          <div className="home_container_text">
          <h1 className="h11">Don't just integrate</h1>
          <h1 className="h12">Accelerate your CRM</h1>
          <p className="para"> Propel your sales team into a state of flow with CRM Accelerations. Switch out boring hours of repetitive work with high-impact activities. Build a repeatable sales process</p>
          <button className="btn1">GET STARTED</button>
          </div>
          <div className="avatar">
            <img src={avatar} alt="avatar" srcset="" />
          </div>
        </main>
        
        {/* <nav>
          <Link to="/about">About</Link>
        </nav> */}
      </>
    );
  }

  export default Home