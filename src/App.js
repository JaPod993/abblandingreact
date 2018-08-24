import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import Navbar from './navbar.js';
import Header from './header.js';
import About from './about.js';

class App extends Component {
  render() {
    return (
      <div className="container-fluid outer-bg">
        <div className="container inner-bg">
            <Navbar/>
            <Header/>
            <About/>
        </div>
      </div>
    );
  }
}

export default App;
