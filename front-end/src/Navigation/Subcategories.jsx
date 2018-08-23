import React from "react";
import { Route, Link } from "react-router-dom";

class Subcategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storeList: []
    };
  }

  render() {
    return (
      <div className="tileBox">
        {this.props.subcategories.map((elem, i) => {
          return (
            <Link to={`/${elem.category_name}/${elem.name}`}>
              <div className="tile" key={i}>
                 <div className="tileImage">
                <img
                  src={elem.image}
                  alt={`${elem.name}`}
                  id={elem.id}
                />
                </div>
                <div className="tileName"> {elem.name}</div>
              </div>
            </Link>
          );
        })}
        <Route path="/storeList" render={this.renderStoreList} />
      </div>
    );
  }
}

export default Subcategories;
