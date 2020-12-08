import React, { Component, useEffect, useState } from "react";
import axios from 'axios';
import { getList } from '../services/list';

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    let mounted = true;
    getList()
      .then(title => {
        if(mounted) {
          setList(title)
        }
      })
    return () => mounted = false;
  }, [])

  return(
   <div>
    <h1>Steam Deals</h1>
    <ul>
      {list.map(title => <li key={title.title}>{title.title}</li>)}
    </ul>

  </div>
 )
}
 
export default App;