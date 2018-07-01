import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import './App.css';
import "./Stylesheets/Header.css";
import "./Stylesheets/Categories.css";
import "./Stylesheets/Navigation.css";
import "./Stylesheets/Front.css";
import "./Stylesheets/Food.css";
import "./Stylesheets/Home.css";
import "./Stylesheets/Stores.css";
import "./Stylesheets/Services.css";
import "./Stylesheets/Nightlife.css";
import "./Stylesheets/Tile.css";
import "./Stylesheets/StoreInfo.css";
import Home from "./Navigation/Home";
import Food from "./Navigation/Food";
import Stores from "./Navigation/Stores";
import Services from "./Navigation/Services";
import Nightlife from "./Navigation/Nightlife";


class App extends React.Component {
  render() {
    return (
      <div className="App">
      <div className="header">
      <div className="header-image"><Link to ='/'><img src="https://image.ibb.co/n3Qkin/logo50.png" alt="logo" /></Link></div>
      <div className="header-text">|  <Link to ='/'> Roosevelt Directory</Link></div>
      <div className="header-search"><Link to ='/'><img src="https://image.ibb.co/jf7heS/search30.png"/></Link></div>
      </div>
        <div className="categories">
      <div className="foodCat"><Link to ='/food'><span>FOOD</span></Link></div>
      <div className="storesCat"><Link to ='/stores'><span>STORES</span></Link></div>
      <div className="servicesCat"><Link to ='/services'><span>SERVICES</span></Link></div>
      <div className="nightlifeCat"><Link to ='/nightlife'><span>NIGHTLIFE</span></Link></div>
      </div>
      <Switch>
      <Route exact path="/" render={Home} />
      <Route path="/food" component={Food} />
      <Route path="/stores" component={Stores} />
      <Route path="/services" component={Services} />
      <Route path="/nightlife" component={Nightlife} />
    </Switch>
      </div>
    );
  }
}

export default App;
