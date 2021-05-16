import React from "react";

import { Link } from "react-router-dom";


class SearchResults extends React.Component {
  renderResultsTiles = (results) => {
    return results.map((biz, i) => {
      return (
        <Link to={`/biz/${biz.name_slug}`} key={biz.id}>
          <div className="tile" key={i}>
            <img
              src={biz.thumb_img}
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
    })
  }

  render() {
    const { resultsByName, resultsByKeywords } = this.props
    return (
      <div className="search-results">
        <h2>Name Match Results</h2>
        <div className="tileBox">
          {this.renderResultsTiles(resultsByName)}
        </div>
        <h2>Keywords Match Results</h2>
        <div className="tileBox">
          {this.renderResultsTiles(resultsByKeywords)}
        </div>
      </div>
    );
  }
}

export default SearchResults;
