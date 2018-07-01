import React, { Component } from "react";
import { Link} from "react-router-dom";



const Header = () => {
    return (
      <div className="header">
      <div className="header-image"><Link to ='/'><img src="https://image.ibb.co/n3Qkin/logo50.png"/></Link></div>
      <div className="header-text">|  Roosevelt Directory</div>

      </div>
    );
  };
  
  export default Header;