import React from 'react'
import '../Footer/Footer.css';
import { FaDribbble, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <a>Register </a>
                    <a>Forum</a>
                    <a>Affiliate</a>
                    <a>FAQ</a>
                </div>
                <div className='footer-social'>
                    <a><FaFacebook /></a>
                    <a><FaTwitter /></a>
                    <a><TfiYoutube /></a>
                    <a><FaDribbble /></a>
                    <a><FaLinkedin /></a>
                    <a><FaInstagram /></a>
                </div>
            </div>
        </div>
        <div className="footer-copy">
            <div className="container">
                © 2021. Foodera. All rights reserved.
            </div>
        </div>
    </footer>
  )
}

export default Footer