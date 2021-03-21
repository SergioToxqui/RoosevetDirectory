import React from "react";

import { Link } from "react-router-dom";


class SearchResults extends React.Component {
  render() {
    const { businesses } = this.props

    return (
      <div className="tileBox">
        {businesses.map((biz, i) => {
          return (
            <Link to={`/store/${biz.name}`} key={biz.id}>
              <div className="tile" key={i}>
                <img
                  src={biz.img_url}
                  alt={`${biz.name}`}
                  className="tileImage"
                />
                <div className="tileName"> {biz.name}</div>
                <div className="tileAddress"> {biz.address_1}</div>
                <div className="tileAddress"> {biz.address_2}</div>
                <div className="tilePhone"> {biz.phone}</div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default SearchResults;
