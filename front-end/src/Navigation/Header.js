import React, { Component } from "react";
import { render } from "react-dom";
import { Route, Link, Switch, Redirect} from "react-router-dom";
import Front from "./Navigation/Front";


const Header = () => {
    return (
      <div className="header">
      <div className="header-image"><Link to ='/'><img src="https://image.ibb.co/n3Qkin/logo50.png"/></Link></div>
      <div className="header-text">|  Roosevelt Directory</div>
      <div className="header-search">
      <input type="text" placeholder="search.." />      
      <button type="submit" className="header-button"><img src="https://image.ibb.co/jf7heS/search30.png"/></button>
      </div>
      </div>
    );
  };
  
  export default Header;