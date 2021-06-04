import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Stylesheets/TopMenu.css";

const TopMenu = () => {
  const [searchTerms, setSearchTerms] = useState('')
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`/search?q=${searchTerms}`)
  }

  return (
    <div className="top-menu ui menu stackable borderless">
      <div className="ui two column stackable grid container" style={{ margin: 0 }}>
        <div className="ui item six wide column">
          <Link to='/'><img src="https://image.ibb.co/n3Qkin/logo50.png" alt=" roosevelt directory logo" /></Link>
          <p className="top-menu__title"> | Roosevelt Directory</p>
        </div>
        <form onSubmit={handleSubmit} className="ui item ten wide column">
          <div className="ui input">
            <input
              type="text"
              placeholder="Search for tacos, hardware store, clothing, etc"
              onChange={(e) => setSearchTerms(e.target.value)}
              value={searchTerms}
            />
          </div>
          <button className="top-menu__search-icon">
            <img src=" https://image.ibb.co/fxtQE8/search_copy.png" alt="search" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default TopMenu;
