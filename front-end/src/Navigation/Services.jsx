import React from "react";
import axios from "axios";
import { Route, Switch, Link } from "react-router-dom";
import StoreTiles from "./StoreTiles";
import Subcategories from "./Subcategories";
import StoreInfo from "./StoreInfo";

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subcategories: [],
      pickedSubcategoryId: null
    };
  }

  handleSubcategoryId = categoryID => {
    this.setState({ pickedSubcategoryId: categoryID });
  };

  renderSubcategories = () => {
    return (
      <Subcategories
        subcategories={this.state.subcategories}
        handleSubcategoryId={this.handleSubcategoryId}
      />
    );
  };

  getSubcategories = () => {
    axios
      .get("/services")
      .then(resp => {
        console.log("this is the response", resp);
        this.setState({ subcategories: resp.data.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getSubcategories();
  }

  render() {
    const subcategories = this.state.subcategories;
    console.log("this is the categories", subcategories);
    return (
      <div className="content">
        <div className="services">
        <div className="services-title">
          <Link to="">SERVICES</Link>
          </div>
          <div className="services-description">
            <span>
              Jackson Heights has the best food to offer from amazing nail
              salons, barbershops and other
            </span>
          </div>
        </div>
        <Switch>
          <Route exact path="/services" render={this.renderSubcategories} />
          <Route
            path="/services/:subcategory/:storeName"
            component={StoreInfo}
          />
          <Route path="/services/:subcategory" component={StoreTiles} />
        </Switch>
      </div>
    );
  }
}

export default Services;
