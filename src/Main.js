import React, { Component, useEffect, useState, useContext } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import Deals from "./components/Deals";
import ActiveStores from "./components/ActiveStores";
import { ThemeContext } from './theme-context'


const Main = () => {
  
  const { theme, toggle, dark } = React.useContext(ThemeContext)

  return (
    
    <body style={{ backgroundColor: theme.backgroundColor,
    color: theme.color }}>
      <button
                    type="button"
                        onClick={toggle}
                          style={{
                            backgroundColor: theme.backgroundColor,
                              color: theme.color,
                              outline: 'none',
                              
                          }}
                  >
                    Váltás {!dark ? 'sötét' : 'világos'} módra
                  </button>
      
      <h1 style={{ backgroundColor: theme.backgroundColor,
    color: theme.color }}>GAIN Deals</h1>
      <HashRouter>
      <ul className="header" >
                
                <li ><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/deals">Deals</NavLink></li>
                <li><NavLink to="/ActiveStores">Active Stores</NavLink></li>
                
            </ul>
            <div className="content">
                
                <Route exact path="/home" component={Home}/>
                <Route path="/deals" component={Deals}/>
                <Route path="/ActiveStores" component={ActiveStores}/>

            </div>
      </HashRouter>
      </body>
  );
};
export default Main;