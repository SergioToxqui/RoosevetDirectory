import React from "react";
import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";
import StoreTiles from "./StoreTiles";
import Subcategories from './Subcategories'




class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subcategories: [],
    };
  };

renderSubcategories = () => {
  return (<Subcategories subcategories = {this.state.subcategories} />)
}

getSubcategories = () => {
  axios.get('/subcategory/1') 
   .then((resp) => {
    console.log('this is the response', resp);
    this.setState({subcategories: resp.data.data})
  })
  .catch((error) => {
    console.log(error);
  });
}

componentDidMount(){
  this.getSubcategories()
}


      render(){
  const subcategories= this.state.subcategories
  console.log('this is the categories', subcategories)
    return (
      <div className="food">
      <div className="food-title">FOOD</div>
      <div className="food-image"></div>
      <div className="food-description">
      <span>
      Jackson Heights has the best food to offer from amazing restaurants, bakerys, street venders blah ablah blah
     </span>
      </div>

      <Switch>   
       <Route path="/:subcategory" render={this.renderSubcategories} />
       <Route path="/food/:" render={this.renderSubcategories} />
      </Switch>
    </div>
    );
  };
}

  export default Food;