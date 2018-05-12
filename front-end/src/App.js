import React, { Component } from "react";
import { render } from "react-dom";
import { Route, Link, Switch, Redirect} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import "./Stylesheets/Header.css";
import "./Stylesheets/Categories.css";
import "./Stylesheets/Navigation.css";
import "./Stylesheets/Front.css";
import "./Stylesheets/Food.css";
import "./Stylesheets/Stores.css";
import "./Stylesheets/Services.css";
import "./Stylesheets/Nightlife.css";
//import Header from "./Navigation/Header";
//import Categories from "./Navigation/Categories";
//import Navigation from "./Navigation/Navigation";
import Front from "./Navigation/Front";
import Food from "./Navigation/Food";
import Stores from "./Navigation/Stores";
import Services from "./Navigation/Services";
import Nightlife from "./Navigation/Nightlife";


class App extends React.Component {
  render() {
    return (
      <div className="App">
      <div className="header">
      <div className="header-image"><Link to ='/'><img src="https://image.ibb.co/n3Qkin/logo50.png"/></Link></div>
      <div className="header-text">|  <Link to ='/'> Roosevelt Directory</Link></div>
      <div className="header-search">
      <input type="text" placeholder="search.." />      
      <button type="submit" className="header-button"><img src="https://image.ibb.co/jf7heS/search30.png"/></button>
      </div>
      </div>
        <div className="categories">
      <div className="foodCat"><Link to ='/food'><span>FOOD</span></Link></div>
      <div className="storesCat"><Link to ='/stores'><span>STORES</span></Link></div>
      <div className="servicesCat"><Link to ='/services'><span>SERVICES</span></Link></div>
      <div className="nightlifeCat"><Link to ='/nightlife'><span>NIGHTLIFE</span></Link></div>
      </div>
      <div className="navigation">
      <Link to ='/'>DIRECTORY</Link> >  CATEGORY >  SUBCATEGORY > DETAILS PAGE
      </div>
      <Switch>
      <Route exact path="/" render={Front} />
      <Route path="/food" render={Food} />
      <Route path="/stores" render={Stores} />
      <Route path="/services" render={Services} />
      <Route path="/nightlife" render={Nightlife} />
    </Switch>
      </div>
    );
  }
}

export default App;
