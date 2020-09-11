import React from "react";

import { Link } from "react-router-dom";


class SearchResults extends React.Component {
  render() {
    const { stores } = this.props

    return (
      <div className="tileBox">
        {stores.map((elem, i) => {
          return (
            <Link to={`/${elem.category_name}/${elem.subcategory_name}/${elem.name}`}>
              <div className="tile" key={i}>
                <img
                  src={elem.photos[0]}
                  alt={`${elem.name}`}
                  className="tileImage"
                  id={elem.id}
                />
                <div className="tileName"> {elem.name}</div>
                <div className="tileAddress"> {elem.type}</div>
                <div className="tileAddress"> {elem.address}</div>
                <div className="tilePhone"> {elem.phone}</div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default SearchResults;
