import React from "react";
import { Link } from "react-router-dom";
import "../Stylesheets/TopMenu.css";

const TopMenu = () => {
  return (
    <div className="top-menu ui menu stackable borderless">
      <div className="ui two column stackable grid container" style={{ margin: 0 }}>
        <div className="ui item six wide column">
          <Link to='/'><img src="https://image.ibb.co/n3Qkin/logo50.png" alt=" roosevelt directory logo" /></Link>
          <p className="top-menu__title"> | Roosevelt Directory</p>
        </div>
        <div className="ui item ten wide column">
          <div className="ui input">
            <input type="text" placeholder="Search for tacos, hardware store, clothing, etc" />
          </div>
          <Link className="top-menu__search-icon" to='/'><img src=" https://image.ibb.co/fxtQE8/search_copy.png" alt="search" /></Link>
        </div>
      </div>
    </div >
  );
};

export default TopMenu;
