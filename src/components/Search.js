import React, { Component } from "react";
import { getList } from '../services/list';

class Search extends Component {
  render() {
    return (
      <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for Games.."></input>
      
    );
  }
}
 
export default Search;