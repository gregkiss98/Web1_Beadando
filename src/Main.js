import React, { Component, useEffect, useState } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import Deals from "./components/Deals";
import Search from "./components/Search";
import ActiveStores from "./components/ActiveStores";


class Main extends Component {
 render() {
      return (
        <HashRouter>
          <div>
            <h1>GAIN Steam Deals</h1>
            <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/deals">Deals</NavLink></li>
            <li><NavLink to="/search">Search</NavLink></li>
            <li><NavLink to="/ActiveStores">Active Stores</NavLink></li>
            </ul>
            <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/deals" component={Deals}/>
            <Route path="/search" component={Search}/>
            <Route path="/ActiveStores" component={ActiveStores}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main; 