import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';

const Header = ( props ) => {

  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand href="#home">
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header;