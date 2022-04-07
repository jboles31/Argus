import React from 'react';
import { useState } from 'react'

import { Typeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css';

const SearchBar = ( props ) => {

  let [zip, updateSearch] = useState('')

  return (
    <div className="search-wrapper">
      {/* <input className="searchbar" type="text" placeholder="Search by Home Address"></input> */}

          <input type="searchbar" placeholder="Enter US Zipcode" onChange={(e) => updateSearch(e.target.value)}></input>
          <button type="submit" className="search-button" onClick={() => props.getReps(zip)}>Search</button>

      {/* // <Typeahead 
      //   className='searchbar'
      //   id="typeahead"
      //   labelKey="Address"
      //   options={options}
      //   placeholder="Search by Home Address"
      //   onKeyDown={(e) => {
      //     if(e.key == "Enter") {
      //       console.log(e.value)
      //       props.getReps(e.value)
      //     }
      //   }}
      // /> */}
    </div>

  )
}

export default SearchBar;