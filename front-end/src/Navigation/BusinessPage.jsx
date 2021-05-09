import React from "react";
import axios from "axios";
import Iframe from "react-iframe";
import { Carousel } from "react-responsive-carousel";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'


class BusinessPage extends React.Component {
  state = {
    biz: {}
  };

  getBusiness = () => {
    const { slug } = this.props.match.params
    axios
      .get(`/api/biz/${slug}`)
      .then(resp => {
        this.setState({ biz: resp.data.payload.business });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getBusiness();
  }

  render() {
    const { biz } = this.state
    if (!biz || !biz.id) return <p>Loading...</p>
    return (
      <div className="storeInfoBox">
        <Carousel style={styles} width='50vw' showThumbs={false} className="storeInfoPhotos"> {
          biz.photos.map(photo => (
            <div>
              <img src={photo} alt="main" />
              <p className={biz.name}>{biz.name}</p>
            </div>
          ))
        }</Carousel>
        <div className="storeInfoName"> {biz.name}</div>
        <div className="storeInfoAddress"> {biz.address}</div>
        <div className="storeInfoPhone"> {biz.phone}</div>
        <div className="storeInfoMon"> Monday</div>
        <div className="storeInfoMonH"> {biz.mon}</div>
        <div className="storeInfoTues"> Tuesday</div>
        <div className="storeInfoTuesH"> {biz.tues}</div>
        <div className="storeInfoWed"> Wednesday</div>
        <div className="storeInfoWedH"> {biz.wed}</div>
        <div className="storeInfoThurs"> Thursday</div>
        <div className="storeInfoThursH"> {biz.thurs}</div>
        <div className="storeInfoFri"> Friday</div>
        <div className="storeInfoFriH"> {biz.fri}</div>
        <div className="storeInfoSat"> Saturday</div>
        <div className="storeInfoSatH"> {biz.sat}</div>
        <div className="storeInfoSun"> Sunday</div>
        <div className="storeInfoSunH"> {biz.sun}</div>
        <div className="storeInfoBlurb"> {biz.description}</div>

        <div className="storeInfoMaps">
          <Iframe
            url={`https://maps.google.com/maps?q=${biz.address}&output=embed`}
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

export default BusinessPage;
