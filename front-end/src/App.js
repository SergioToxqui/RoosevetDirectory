import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "./Stylesheets/Header.css";
import Header from "./Navigation/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div><Header /></div>
        <div className="navigation"></div>
        <div className="subcategory"></div>
        <div className="render"></div>
      </div>
    );
  }
}

export default App;
