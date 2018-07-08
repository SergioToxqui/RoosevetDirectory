import React from "react";
import axios from "axios";
import { Route, Switch, Link } from "react-router-dom";
import StoreTiles from "./StoreTiles";
import Subcategories from "./Subcategories";
import StoreInfo from "./StoreInfo";

class Stores extends React.Component {
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
      .get("/stores")
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
        <div className="stores">
        <div className="stores-title">
          <Link to="">STORES</Link>
          </div>
          <div className="stores-description">
            <span>
              Jackson Heights has the best food to offer from amazing sneaker
              stores, bakerys, street venders blah ablah blah
            </span>
          </div>
        </div>
        <Switch>
          <Route exact path="/stores" render={this.renderSubcategories} />
          <Route path="/stores/:subcategory/:storeName" component={StoreInfo} />
          <Route path="/stores/:subcategory" component={StoreTiles} />
        </Switch>
      </div>
    );
  }
}

export default Stores;
