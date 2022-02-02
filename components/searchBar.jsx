import React from 'react';

import { Typeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css';

const SearchBar = ( props ) => {

  const options = ['1', '2', '3'];

  return (
    <div className="search-wrapper">
      {/* <input className="searchbar" type="text" placeholder="Search by Home Address"></input> */}
      <Typeahead 
        className='searchbar'
        id="typeahead"
        labelKey="Address"
        options={options}
        placeholder="Search by Home Address"
      />
    </div>

  )
}

export default SearchBar;