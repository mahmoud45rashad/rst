import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png'
import '../Navs/Navs.css';
const Navs = () => {
  return (
  //   <Navbar expand="lg" className="bg-body-tertiary">
  //   <Container>
  //     <Navbar.Brand href="#home"><Image src={logo}/></Navbar.Brand>
  //     <Nav className="ml-auto">
  //           <Nav.Link href="#home">Home</Nav.Link>
  //           <Nav.Link href="#link">About</Nav.Link>
  //           <Nav.Link href="#link">Explore Food</Nav.Link>
  //           <Nav.Link href="#link">Review</Nav.Link>
  //           <Nav.Link href="#link">Faq</Nav.Link>
  //           <Nav.Link href="#deets" className='link-call'>1800 789 123</Nav.Link>
  //       </Nav>
  //   </Container>
  // </Navbar>

<Navbar expand="lg"  sticky="top">
<Container>
<Navbar.Brand href="#home"><Image src={logo}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About</Nav.Link>
      <Nav.Link href="#link">Explore Food</Nav.Link>
      <Nav.Link href="#link">Review</Nav.Link>
      <Nav.Link href="#link">Faq</Nav.Link>
      <Nav.Link href="#deets" className='link-call'>1800 789 123</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
  )
}

export default Navs
