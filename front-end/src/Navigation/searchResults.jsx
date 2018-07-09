import React from "react";

import { Link } from "react-router-dom";


class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: props.stores
    };
  }

  render() {
    return (
      <div className="tileBox">
        {this.state.stores.map((elem, i) => {
          return (
            <Link to={`/${elem.category_name}/${elem.subcategory_name}/${elem.name}`}>
              <div className="tile" key={i}>
                <img
                  src={elem.photo}
                  alt={`${elem.name}`}
                  className="tileImage"
                  id={elem.id}
                  onClick={this.handleOnClick}
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
