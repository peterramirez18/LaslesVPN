import React from 'react';
import './footer.scss';

import logo from "../../assets/Logo.png"
import iconFacebook from "../../assets/icon-facebook.png";
import iconTwitter from "../../assets/icon-twitter.png";
import iconInstagram from "../../assets/icon-instagram.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__col1">
          <div className="footer__logo">
            <img src={logo} alt="" />
          </div>
          <p><span>LaslesVPN</span> is a private virtual network that<br />has unique features and has high security.</p>
          <div className="footer__redes">
            <div><img src={iconFacebook} alt="facebook logo" /></div>
            <div><img src={iconTwitter} alt="twitter logo" /></div>
            <div><img src={iconInstagram} alt="instagram logo" /></div>
          </div>
          <p><span>©2020LaslesVPN</span></p>
        </div>
        <div className="footer__col2">
          <ul>
            <li>Product</li>
            <li>Download </li>
            <li>Pricing</li>
            <li>Locations</li>
            <li>Server</li>
            <li>Countries</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer__col3">
          <ul>
            <li>Engage</li>
            <li>LaslesVPN ?  </li>
            <li>FAQ</li>
            <li>Tutorials</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className="footer__col4">
          <ul>
            <li>Earn Money</li>
            <li>Affiliate </li>
            <li>Become Partner</li>
          </ul>
        </div>

      </div>
    </>
  )
}

export default Footer