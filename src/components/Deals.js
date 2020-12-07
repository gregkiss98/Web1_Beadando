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

/*class Search extends Component {
  render() {
    return (
      <div>
        <h2>Search</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
      </div>
    );
  }
}*/
 
export default App;