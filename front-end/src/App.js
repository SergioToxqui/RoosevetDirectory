import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "./Stylesheets/Header.css";
import "./Stylesheets/Categories.css";
import "./Stylesheets/Navigation.css";
import "./Stylesheets/Front.css";
import Header from "./Navigation/Header";
import Categories from "./Navigation/Categories";
import Navigation from "./Navigation/Navigation";
import Front from "./Navigation/Front";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div><Header /></div>
        <div><Categories /></div>
        <div><Navigation /></div>
        <div><Front /></div>
        <div className="render"></div>
      </div>
    );
  }
}

export default App;
