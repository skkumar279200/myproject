import React from "react";
import './Header.css';
function App() {
    return (
      <div className="box" >
        <div className="head">
       <div className="logo">
        <a className="" href="https://www.mfine.co/">
                        <img className='img1' src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/logo.svg" alt="Logo"  loading="eager"/>
                    </a>
      <nav className="navigation">
      <ul >
        <li className="l1"><a href="">Our Services</a></li>
        <li  className="l2"><a href="">Corporate Health</a></li>
        <li  className="l3"><a href="">Health Trackers</a></li>
        <li  className="l4"><a href="">Our Labs</a></li>
        <li  className="l5"><a href="">More</a></li>
        </ul>
     </nav>
    </div>
    <div className="btn">
      <button className="b1">Login / Signup</button>
      <button className="b2">Get Our App</button>
      </div>

                    </div>
      </div>
    );
  }
  
  export default App;
  