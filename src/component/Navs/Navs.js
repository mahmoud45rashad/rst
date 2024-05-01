import React from 'react'
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

<nav className='navbar navbar-expand-lg navbar-light sticky-top'>
<div className='container'>
<a className='navbar-brand' href="#home"><img src={logo}/></a>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <div className='navbar-collapse collapse' id="basic-navbar-nav">
    <div className='nav'>
      <a className='nav-link' href="#home">Home</a>
      <a  className='nav-link' href="#link">About</a>
      <a className='nav-link' href="#link">Explore Food</a>
      <a className='nav-link' href="#link">Review</a>
      <a  className='nav-link' href="#link">Faq</a>
      <a  className='nav-link link-call' href="#deets" >1800 789 123</a>
    </div>
  </div>
</div>
</nav>
  )
}

export default Navs