import React, { Component, useEffect, useState } from "react";
import { getList } from '../services/list';

function Deals() {
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
   <div class="deals">
    <h1>Steam Deals</h1>
    <h2>Hottest games right now</h2>
    <ul>
      {list.map(title => <li key={title.storeid}><img src={title.thumb}></img> Game name: {title.title} | Sale Price: {title.salePrice} | Normal Price: {title.normalPrice}</li>)}
    </ul>

  </div>
 )
}
 
export default Deals;