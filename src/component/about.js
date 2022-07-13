import React from "react";
import hero1 from '../image/adam.png';
import doubleLogo from '../image/double-logo.png';
import  Vector from '../image/Vector.png';
//import red from '../image/red-eye.png';
import '../sass/home.scss';
import '../sass/acceleration.scss';
import '../sass/about.scss';



function About() {
    return (
      <>
        <main>
          <div className="about_card">
            <div>
            <img src={Vector} alt="vector" />
            <h3 className="h31 pad_LR">klenty has helped us engage a far greater number of leads per week, resulting in an outbound revenue jump of 93%</h3><br/>
            <img src={doubleLogo} alt="doubleLogo" />
            </div>
            <img src={hero1} alt="hero01" srcset="" />
          </div>
        </main>
      </>
    );
  }
export default About