import React, {useReducer} from 'react'
import { ThemeContext } from 'theme-context'

const initialState = 0;

const reducer = (state, action) => {

  switch (action) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'reset': return 0;
    default: throw new Error('Unexpected action');
  }
};

const Fav_Games = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const { theme} = React.useContext(ThemeContext)
  return (
    <div style={{ backgroundColor: theme.backgroundColor,
      color: theme.color }}>
      {count} darab kedvenc játékod van
      <br></br>
      
      <button onClick={() => dispatch('increment')}>1 játék hozzáadása</button>
      <button onClick={() => dispatch('decrement')}>1 játék elvétele</button>
      <button onClick={() => dispatch('reset')}>Nincs kedvenc játékom :(</button>
    </div>
  );
};

export default Fav_Games;