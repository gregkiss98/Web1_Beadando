import React, { useEffect, useState } from "react";
import { getList } from '../services/list';
import { ThemeContext } from '../theme-context'

function Deals() {
  const { theme, toggle, dark } = React.useContext(ThemeContext)
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
    <h2 style={{ backgroundColor: theme.backgroundColor,
    color: theme.color }}>Éppen leárazott játékok Steamen</h2>
    <ul>
      {list.map(title => <li style={{ backgroundColor: theme.backgroundColor,
    color: theme.color }}  key={title.storeid}><img src={title.thumb}></img> Game name: {title.title} | Sale Price: {title.salePrice} | Normal Price: {title.normalPrice}</li>)}
    </ul>

  </div>
 )
}
 
export default Deals;