import React, { Component } from "react";



const Header = () => {
    return (
      <div className="header">
      <div className="header-image">IMG</div>
      <div className="header-text">|  Roosevelt Directory</div>
      <div className="header-search">
      <input type="text" placeholder="Search.." />      
      <button type="submit" className="header-button">submit</button>
      </div>
      </div>
    );
  };
  
  export default Header;