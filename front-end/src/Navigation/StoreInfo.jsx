import React from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";

class StoreInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: {}
    };
  }

  getStore = () => {
    axios
      .get(
        `/food/${this.props.match.params.subcategory}/${
          this.props.match.params.storeName
        }`
      )
      .then(resp => {
        console.log("this is the response", resp);
        this.setState({ store: resp.data.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getStore();
  }

  render() {
    const store = this.state.store;
    return (
      <div className="tile">
        <h1> im yelling </h1>
        <img
          src={store.photo}
          alt={`/${store.name}`}
          className="tileImage"
          id={store.id}
          onClick={this.handleOnClick}
        />
        <div className="tileName"> {store.name}</div>
        <div className="tileAddress"> {store.address}</div>
        <div className="tilePhone"> {store.phone}</div>
      </div>
    );
  }
}

export default StoreInfo;
