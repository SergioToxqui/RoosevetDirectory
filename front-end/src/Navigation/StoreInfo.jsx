import React from "react";
import axios from "axios";
import Iframe from "react-iframe";

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
        <div className="storeInfoMon"> Monday</div>
        <div className="storeInfoMonH"> {elem.mon}</div>
        <div className="storeInfoTues"> Tuesday</div>
        <div className="storeInfoTuesH"> {elem.tues}</div>
        <div className="storeInfoWed"> Wednesday</div>
        <div className="storeInfoWedH"> {elem.wed}</div>
        <div className="storeInfoThurs"> Thursday</div>
        <div className="storeInfoThursH"> {elem.thurs}</div>
        <div className="storeInfoFri"> Friday</div>
        <div className="storeInfoFriH"> {elem.fri}</div>
        <div className="storeInfoSat"> Saturday</div>
        <div className="storeInfoSatH"> {elem.sat}</div>
        <div className="storeInfoSun"> Sunday</div>
        <div className="storeInfoSunH"> {elem.sun}</div>
        <div className="storeInfoBlurb"> {elem.blurb}</div>


        <div className="storeInfoMaps"> 
        <Iframe url="https://maps.google.com/maps?q=8812%20Roosevelt%20Ave=&output=embed"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        width='100%' 
        height="100%"
        allowFullScreen/>
        </div>
       </div>
    );
  }
}

export default StoreInfo;
