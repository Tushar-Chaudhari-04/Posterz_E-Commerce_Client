import React from 'react'
import "./Footer.scss"
import {FaFacebookF} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import {FiMail} from "react-icons/fi"
import creditCardImg from "../../assets/crdeit card.svg"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='content'>
        <div className='footer-left'>
        <h3 className='follow' >Follow Us</h3>
        <div className='footer-social-media'>
          <FaFacebookF className='social-media-icon' style={{color:"#1877f2"}}/>
          <FaTwitter className='social-media-icon' style={{color:"#1da1f2"}}/>
          <AiFillInstagram className='social-media-icon' style={{color:"#c32aa3"}}/>
          <FiMail className='social-media-icon' style={{color:"#db4437"}}/>
        </div>
        </div>
        <div className='footer-right'>
          <ul className='footer-policy'>
            <li><h4>About</h4></li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Corporate Information</li>
            <li>Posterz Stories</li>
            <li>Posterz Wholesale</li>
          </ul>
        </div>

        <div className='footer-right'>
          <ul className='footer-policy'>
            <li><h4>CONSUMER POLICY</h4></li>
            <li>Return Policy</li>
            <li>Terms Of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
            <li>Grievance Redressal</li>
          </ul>
        </div>

        <div className='footer-right'>
          <ul className='footer-policy'>
            <li><h3>Posterz .</h3></li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Return & Exchange Policy</li>
            <li>Shipping Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>

      </div> 
      <div className='sub-footer'>
      <div className='creditCardImg'>
            <img src={creditCardImg} alt="creditCardImg"/>
          </div>
        <p className='copyright'>CopyRight {new Date().getFullYear()} © Posterz.</p>
        </div>
    </div>
  )
}

export default Footer