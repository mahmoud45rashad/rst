import React from 'react'
import '../Home/Header.css'
import { Button } from 'react-bootstrap'
function Header()  {
  return (
    <header>
        <div className='container'>
            <div className='col-md-5 text-header'>
                <h2>Good food choices are good investments.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
                <Button variant="primary">Order Now</Button>
                <Button className='learn-more'>Learn More</Button>
            </div>
        </div>
    </header>
  )
}

export default Header