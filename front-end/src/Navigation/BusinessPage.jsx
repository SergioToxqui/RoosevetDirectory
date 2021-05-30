import React from "react";
import axios from "axios";
import Iframe from "react-iframe";
import "./BusinessPage.css";
import Slider from "react-slick";
import "../slick/slick.css";
import "../slick/slick-theme.css";

class BusinessPage extends React.Component {
  state = {
    biz: {},
    schedule: [],
    categories: []
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

  getSchedule = () => {
    const { slug } = this.props.match.params
    axios
      .get(`/api/biz/${slug}/schedule`)
      .then(resp => {
        this.setState({ schedule: resp.data.payload });
      })
      .catch(error => {
        console.log(error);
      });
  };

  getCategories = () => {
    const { slug } = this.props.match.params
    axios
      .get(`/api/biz/${slug}/categories`)
      .then(resp => {
        this.setState({ categories: resp.data.payload });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getBusiness();
    this.getSchedule();
    this.getCategories();
  }

  render() {
    const { biz, schedule, categories } = this.state
    const formattedAddress = `${biz.address_1} ${biz.address_2 ? ", " + biz.address_2 : ""}`
    if (!biz || !biz.id) return <p>Loading...</p>
    let items = biz.objects.map((obj, i) => {
      return (
        <div className="img-wrapper">
          <div className="img-backdrop" style={{
            backgroundImage: `url("${obj.url}")`,
            backgroundPosition: "center"
          }}
          ></div>
          <img key={obj.url} className="ui image" src={obj.url} alt={`${biz.name} dishes and store front`} />
        </div>
      )
    })
    return (
      <div>
        <h1 className="ui header">{biz.name}</h1>
        <div className="ui grid container">
          <div className="column eight wide">
            <div className="ui segment vertical basic">
              <h3>Gallery</h3>
              <div className="slider-wrapper">
                <Slider dots={true}>{items}</Slider>
              </div>
            </div>
            <div className="ui segment vertical basic">
              <h3>Address & Location</h3>
              <p> {formattedAddress}</p>
              <div className="storeInfoMaps">
                <Iframe
                  url={`https://maps.google.com/maps?q=${formattedAddress}&output=embed`}
                  id="myId"
                  className="myClassname"
                  display="initial"
                  position="relative"
                  width="100%"
                  height="100%"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="eight wide column">
            <div className="ui segment vertical basic">
              <h3 className="ui header">Description:</h3>
              <p> {biz.description}</p>
            </div>

            <div className="ui segment vertical basic">
              <h3 className="ui header">Phone:</h3>
              <p> {biz.phone}</p>
            </div>

            <div className="ui segment vertical basic compact">
              <h3>Schedule:</h3>
              <table class="ui striped compact table">
                <tbody>
                  {schedule.map(day => (
                    <tr key={day.day} >
                      <td className="dow">{day.day}</td>
                      <td>{day.open_time + " - " + day.close_time}</td>
                      {/* <td>{day.close_time}</td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p> {biz.address}</p>
            </div>

            <div className="ui segment vertical basic">
              <h3>Categories:</h3>
              <div className="ui tag labels">
                {categories.map(category => (
                  <span className="ui label"> {category.name}</span>
                ))}
              </div>
            </div>

            <div className="ui segment vertical basic">
              <h3>Keywords:</h3>
              <div className="ui circular labels">
                {biz.keywords.split(' ').map(keyword => (
                  <span className="ui label"> {keyword}</span>
                ))}
              </div>
            </div>
          </div>
        </div >
      </div >
    );
  }
}

export default BusinessPage;
