import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../image/Big Logo.png';
import '../sass/header.scss';


function Header() {
    return (
      <>
      <header className="header_container">
          {/* <div className="header_container"> */}
              
              <nav className="nav" >
              <div className="logo">
                  <img className="logo"src={logo} alt="logo" srcset="" />
              </div>
              <NavLink className="nav" to="/">Platform</NavLink>
              <NavLink className="nav" to="/">Pricing</NavLink>
              <NavLink className="nav" to="/">Acceleration</NavLink>
              <NavLink className="nav" to="/">Resources</NavLink>
              <NavLink className="nav" to="/">Customer Stories</NavLink>
              </nav>
              <div className="tranz_clr">
                  <NavLink className="tranz_clr" to='/'>Log in</NavLink>
                  <button className="btn2">SCHEDULED DEMO</button>
                  <button className="btn1">TRY FOR FREE</button>
              </div>
          {/* </div> */}
      </header>
      </>
    );
  }

  export default Header