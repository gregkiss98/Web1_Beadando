import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Deals from "./Deals";
import Fav_Games from "./Fav_Games";
import { ThemeContext } from './theme-context'


const Main = () => {
  
  const { theme, toggle, dark } = React.useContext(ThemeContext)

  return (
    
    <body style={{ backgroundColor: theme.backgroundColor,
    color: theme.color }}>
      <button
                    type="button" class="wdmodeButton"
                        onClick={toggle}
                          style={{
                            backgroundColor: theme.backgroundColor,
                              color: theme.color,                       
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
                <li><NavLink to="/Fav_Games">Favourite Games Counter</NavLink></li>
                
            </ul>
            <div className="content">
                
                <Route exact path="/home" component={Home}/>
                <Route path="/deals" component={Deals}/>
                <Route path="/Fav_Games" component={Fav_Games}/>

            </div>
      </HashRouter>
      </body>
  );
};
export default Main;