import React from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import StoreTiles from "./StoreTiles";
import Subcategories from "./Subcategories";
import StoreInfo from "./StoreInfo";

class Nightlife extends React.Component {
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
      .get("/nightlife")
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
        <div className="nightlife">
          <div className="nightlife-title">NIGHTLIFE</div>
          <div className="nightlife-image" />
          <div className="nightlife-description">
            <span>
              Jackson Heights has the best bars, clubs, pool halls and lounges.
            </span>
          </div>
        </div>
        <Switch>
          <Route exact path="/nightlife" render={this.renderSubcategories} />
          <Route
            path="/nightlife/:subcategory/:storeName"
            component={StoreInfo}
          />
          <Route path="/nightlife/:subcategory" component={StoreTiles} />
        </Switch>
      </div>
    );
  }
}
export default Nightlife;
