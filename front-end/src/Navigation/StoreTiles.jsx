import React from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";

//this.props.match.params.subcategory

class StoreTiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: []
    };
  }

  getStores = () => {
    axios
      .get(`${this.props.match.url}`)
      .then(resp => {
        console.log("this is the response", resp);
        this.setState({ stores: resp.data.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getStores();
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
        <Route path="/storeList" render={this.renderStoreList} />
      </div>
    );
  }
}

export default StoreTiles;
