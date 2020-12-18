import React, { Component, useContext } from "react";
import { ThemeContext } from '../theme-context'
 

function Home() {
  const { theme, toggle, dark } = React.useContext(ThemeContext)
    return (
      <div>
        <h1 style={{ backgroundColor: theme.backgroundColor,
    color: theme.color }}>Üdvözöllek!</h1>
        <p style={{ backgroundColor: theme.backgroundColor,
    color: theme.color }}>Ez a weboldal a Web-es rendszerek programozása 1 nevű órára készült Kiss Gergő által, beadandó gyanánt. Kizárólag
            gyakorlati és tapasztalat szerzési célokat szolgál, valamint fejlesztés alatt áll.</p>
      </div>
    );
  
}
export default Home;