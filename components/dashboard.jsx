import React from 'react';

import SearchBar from './searchBar';
import Results from './results';

const DashBoard = ( props ) => {

  if(props.reps.length > 0) {
    return (
      <div className="db-wrapper">  
        <Results
          reps={props.reps} 
        />
      </div>
    )
  } else {
    return (
      <div className="db-wrapper">  
        <SearchBar 
          getReps={props.getReps}
        />
      </div>
    )
  }
}

export default DashBoard;