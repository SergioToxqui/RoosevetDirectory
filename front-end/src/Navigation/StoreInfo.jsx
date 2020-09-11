import React from "react";
import axios from "axios";
import Iframe from "react-iframe";
import { Carousel } from "react-responsive-carousel";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'


class StoreInfo extends React.Component {
  state = {
    store: {}
  };

  getStore = () => {
    const { storeName } = this.props.match.params
    axios
      .get(`/api/search`, { params: { name: storeName } })
      .then(resp => {
        this.setState({ store: resp.data.data[0] });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getStore();
  }

  render() {
    const { store } = this.state
    if (!store || !store.id) return <p>Loading...</p>
    return (
      <div className="storeInfoBox">
        <Carousel style={styles} width='50vw' showThumbs={false} className="storeInfoPhotos"> {
          store.photos.map(photo => (
            <div>
              <img src={photo} alt="main" />
              <p className={store.name}>{store.name}</p>
            </div>
          ))
        }</Carousel>
        <div className="storeInfoName"> {store.name}</div>
        <div className="storeInfoAddress"> {store.address}</div>
        <div className="storeInfoPhone"> {store.phone}</div>
        <div className="storeInfoMon"> Monday</div>
        <div className="storeInfoMonH"> {store.mon}</div>
        <div className="storeInfoTues"> Tuesday</div>
        <div className="storeInfoTuesH"> {store.tues}</div>
        <div className="storeInfoWed"> Wednesday</div>
        <div className="storeInfoWedH"> {store.wed}</div>
        <div className="storeInfoThurs"> Thursday</div>
        <div className="storeInfoThursH"> {store.thurs}</div>
        <div className="storeInfoFri"> Friday</div>
        <div className="storeInfoFriH"> {store.fri}</div>
        <div className="storeInfoSat"> Saturday</div>
        <div className="storeInfoSatH"> {store.sat}</div>
        <div className="storeInfoSun"> Sunday</div>
        <div className="storeInfoSunH"> {store.sun}</div>
        <div className="storeInfoBlurb"> {store.description}</div>

        <div className="storeInfoMaps">
          <Iframe
            url={`https://maps.google.com/maps?q=${store.address}&output=embed`}
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            width="100%"
            height="100%"
            allowFullScreen
          />
        </div>
      </div >
    );
  }
}

export default StoreInfo;
