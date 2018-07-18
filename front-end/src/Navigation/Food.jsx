import React from "react";
import axios from "axios";
import { Route, Switch, Link } from "react-router-dom";
import StoreTiles from "./StoreTiles";
import Subcategories from "./Subcategories";
import StoreInfo from "./StoreInfo";

class Food extends React.Component {
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
      .get("/food")
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
    const url = this.props.location.pathname;
    const urlFix = url.split("/");
    urlFix.pop();
    const subcategories = this.state.subcategories;
    console.log("this is the categories", subcategories);
    console.log("this is the url fix", urlFix.join("/"));
    return (
      <div className="content">
        <div className="food">
          <div className="food-title">
            <Link to={urlFix.join("/")}>{urlFix.join("/").toUpperCase()}</Link>
          </div>
          <div className="food-description">
            <span>
              Jackson Heights has the best food to offer from amazing sdqsdqw
            </span>
          </div>
        </div>
        <Switch>
          <Route exact path="/food" render={this.renderSubcategories} />
          <Route path="/food/:subcategory/:storeName" component={StoreInfo} />
          <Route path="/food/:subcategory" component={StoreTiles} />
        </Switch>
      </div>
    );
  }
}

export default Food;
