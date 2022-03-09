import React from 'react';

const Header = ( props ) => {

  return (
    <div className="navbar">
      <div className="logo" onClick={() => window.location.reload(true)}>
        ARGUS
      </div>
    </div>
  )
}

export default Header;