import React from 'react';

import SearchBar from './searchBar';
import Results from './results';

const DashBoard = ( props ) => {

  if(props.reps.length > 0) {
    return (
      <div className="db-wrapper db-reps">  
        <Results
          reps={props.reps} 
        />
      </div>
    )
  } else {
    return (
      <div className="db-wrapper db-search">  
        <SearchBar 
          getReps={props.getReps}
        />
      </div>
    )
  }
}

export default DashBoard;