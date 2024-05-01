import React from 'react'
import Header from './Header'
import Carousel from 'react-bootstrap/Carousel';
import '../Home/Home.css'
import img1 from'../../assets/1.png'
import img2 from'../../assets/2.png'
import img3 from'../../assets/1 (1).jpg'
import img4 from'../../assets/2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated } from 'react-spring';

import Data from '../../Data';

function Home () {
  
const AnimatedNumber = ({ value }) => {
  const props = useSpring({ value, from: { value: 0 }, delay: 400 });

  return (
    <animated.span>{props.value.interpolate(value => Math.round(value))}</animated.span>
  );
  }
  const blogitem = Data.map((item,i) => {
    return(
      <div className='col-md-4 box-item' key={i}>
        <div className='box-item' >
        <img src={item.img}/>
        <h4>{item.title}</h4>
        <p>{item.time} | {item.serves}</p>
        <span>{item.price}</span>
        </div>
        <button className="primary" >Order Now</button>
      </div>
    )
  })
  return (
    <>
    <Header/>

<section className='numbers'>
  <div className='container'>
    <div className='row'>
      <div className='col-md-3'>
        <div className='saving'>
          <h2>
          <AnimatedNumber value={1287} />+
          </h2>
          <h6>SAVINGS</h6>
        </div>
      </div>
      <div className='col-md-3'> 
        <div className='photos'>
          <h2><AnimatedNumber value={5786} />+</h2>
          <h6>PHOTOS</h6>
        </div>
      </div>
      <div className='col-md-3'>  
        <div className='rockets'>
          <h2><AnimatedNumber value={1440} />+</h2>
          <h6>ROCKETS</h6>
        </div>
      </div>
      <div className='col-md-3'>
        <div className='globes'>
          <h2><AnimatedNumber value={7110} />+</h2>
          <h6>GLOBES</h6>
        </div>
      </div>
    </div>
  </div>
</section>

<section className='about'>
  <div className='container'>
    <div className='row'>
      <div className='col-md-7'>
        <div className='about-img'>
          <img src={img1}/>
        </div>
      </div>
      <div className='col-md-5'>
        <div className='about-text'> 
          <h2>We pride ourselves on making real food from the best ingredients.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
          <button className="primary">Learn More</button>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="ingredints">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h2>We make everything by hand with the best possible ingredients.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <ul>
          <li> <FontAwesomeIcon icon={faCheck} />   Etiam sed dolor ac diam volutpat.</li>
          <li><FontAwesomeIcon icon={faCheck} />    Erat volutpat aliquet imperdiet.</li>
          <li><FontAwesomeIcon icon={faCheck} />    purus a odio finibus bibendum.</li>
        </ul>
        <button className="primary">Learn More</button>
      </div>
      <div className="col-md-6">
        <div className='img-ingredints'>
        <img src={img2} />
        </div>
      </div>
    </div>
  </div>
</section>
<section className='paralex'>
  <div className='container'>
    <div className='row'>
      <div className='col-lg-12 col-md-12'>
        <h2>When a man's stomach is full it makes no <br/>difference whether he is rich or poor.</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br/>finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
         <div  className='div-watch'>
         <a href="#"> <FontAwesomeIcon icon={faPlay}  style={{ marginRight: '10px' }}/>Watch Our Story</a>
         </div>
      </div>
    </div>
  </div>
</section>
<section className='blog'>
  <div className='container'>
    <div className='row'>
      <div className='col-md-12 col-lg-12' >
        <h3>Explore Our Foods</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
      </div>
    </div>
    <div className='row '>
      {blogitem}
    </div>
  </div>
</section>
<section className='slider'>
  <h1>Testimonials</h1>
  <div className='container'>
  <Carousel>
      <Carousel.Item>
        <img src={img3} />
        <Carousel.Caption>
          <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</p>
          <span>Simab Dave - Web Designer</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img4} />
        <Carousel.Caption>
        <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</p>
          <span>Simab Dave - Web Designer</span>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
</section>
<section className='faq'>
  <div className='container'>
    <h3>Frequently Asked Questions</h3>
    <div className='row'>
      <div className='col-md-6'>
        <h4> <span>~</span>Is Foodera Bread really baked fresh each day?</h4>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
      </div>
      <div className='col-md-6'>
        <h4> <span>~</span>Do you bake breads containing animal fats or products?</h4>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
      </div>
      <div className='col-md-6'>
        <h4> <span>~</span>Can I order your products online?</h4>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
      </div>
      <div className='col-md-6'>
        <h4> <span>~</span>When are you opening a shop near me?</h4>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
      </div>
    </div>
  </div>
</section>
<section className='parallax-content'>
  <div className='overlay'></div>
  <div className='container-fluid'>
    <div className='row'>
    <div className='col-md-8 col-12'><h4>Baked fresh daily by bakers with passion.</h4></div>
    <div className='col-md-4 col-12'><button className="primary">Learn More</button></div>
    </div>
  </div>
</section>
<section className='subscribe'>
  <div className='container'>
    <h1>Hurry up! Subscribe our newsletter<br/>and get 25% Off</h1>
    <p>Limited time offer for this month. No credit card required.</p>
    <form>
      <div className='row'>
        <div className='col-md-8 col-12'>
          <input type="text" placeholder="Email Address here"/>
        </div>
        <div className='col-md-4 col-12'>        <button className="primary">Learn More</button></div>
      </div>
    </form>
  </div>
</section>
    </>
  )
}



export default Home