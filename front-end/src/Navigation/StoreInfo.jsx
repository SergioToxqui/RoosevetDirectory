import React from "react";
import axios from "axios";

class StoreInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: {}
    };
  }

  getStore = () => {
    axios
      .get(`${this.props.match.url}`)
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
    const elem = this.state.store;
    return (
      <div className="storeInfoBox">
        <div className="storeInfoPhoto">
        <img
          src={elem.photo}
          alt={`/${elem.name}`}
          id={elem.id}
        /></div>
        <div className="storeInfoPhoto2">
        <img
          src={elem.photo2}
          alt={`/${elem.name}`}
          id={elem.id}
        /></div>
        <div className="storeInfoPhoto3">
        <img
          src={elem.photo3}
          alt={`/${elem.name}`}
          id={elem.id}
        /></div>
        <div className="storeInfoName"> {elem.name}</div>
        <div className="storeInfoAddress"> {elem.address}</div>
        <div className="storeInfoPhone"> {elem.phone}</div>
        <div className="storeInfoBlurb"> {elem.blurb}</div>
        <div className="storeInfoHours"> {elem.hours}</div>
        <div className="storeInfoMaps"> {elem.maps}</div>
       </div>
    );
  }
}

export default StoreInfo;
