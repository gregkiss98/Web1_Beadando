import React, { Component, useEffect, useState } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import axios from 'axios';
import Home from "./components/Home";
import Deals from "./components/Deals";
import Search from "./components/Search";


/*
function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
   let mounted = true;
   getList()
     .then(items => {
       if(mounted) {
         setList(items)
       }
     })
   return () => mounted = false;
 }, [])}*/


 

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
            </ul>
            <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/deals" component={Deals}/>
            <Route path="/search" component={Search}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main; 