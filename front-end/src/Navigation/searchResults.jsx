import React from "react";

import { Link } from "react-router-dom";


class SearchResults extends React.Component {
  renderResultsTiles = (results) => {
    return results.map((biz, i) => {
      const formattedAddress = `${biz.address_1} ${biz.address_2 ? ", " + biz.address_2 : ""}`
      return (
        <Link className="card" to={`/biz/${biz.name_slug}`}>
          <div className="image">
            <img
              src={biz.thumb_img}
              alt={`${biz.name}`}
              className="tileImage"
            />
          </div>
          <div className="content">
            <div className="header">{biz.name}</div>
            <div className="description">
              <div><i className="map pin icon"></i>{formattedAddress}</div>
              <div><i className="phone icon"></i>{biz.phone}</div>
            </div>
          </div>
        </Link>
      );
    })
  }

  render() {
    const { resultsByName, resultsByKeywords } = this.props
    return (
      <div className="search-results">
        <h2>Name Match Results</h2>
        <div className="ui four cards">
          {this.renderResultsTiles(resultsByName)}
        </div>
        <h2>Keywords Match Results</h2>
        <div className="ui four cards">
          {this.renderResultsTiles(resultsByKeywords)}
        </div>
      </div>
    );
  }
}

export default SearchResults;
