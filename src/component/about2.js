import React from "react";
import '../sass/home.scss';
import '../sass/acceleration.scss';
import '../sass/about.scss';
import hero2 from '../image/gavin.png';
import  Vector from '../image/Vector.png';
import jumpLogo from '../image/jump-logo.png';


function AboutDemo() {
    return (
      <>
        <main>
        <div className="about_card">
            <div>
            <img src={Vector} alt="vector" />
            <h3 className="h31 pad_LR">It changed our business. Klenty allowed our outboards sales team to leverage their time and skills</h3><br/>
            <img src={jumpLogo} alt="jumpLogo" />
            </div>
            <img src={hero2} alt="hero02" srcset="" />
          </div>
        </main>
      </>
    );
  }

  export default AboutDemo