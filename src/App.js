import * as React from "react";
//import { Routes, Route} from "react-router-dom";
import Home from "./component/home";
//import About from "./component/about";
import "./sass/style.scss"
import Header from "./component/header";
import Acceleration from "./component/acceleration";
import Demo from "./component/demo";
import "./component/fontAsm"
//import AboutDemo from "./component/about2";

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Acceleration/>
      <Demo/>
     
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes> */}

        


    </div>
  );
}
export default App