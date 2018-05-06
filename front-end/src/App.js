import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "./Stylesheets/Header.css";
import "./Stylesheets/Categories.css";
import Header from "./Navigation/Header";
import Categories from "./Navigation/Categories";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div><Header /></div>
        <div><Categories /></div>
        <div className="subtegory"></div>
        <div className="render"></div>
      </div>
    );
  }
}

export default App;
