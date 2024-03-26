import React from "react";
import "./Footer.css";
import footer from "../pic/logo.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer-box">
            <div className="logo">
              <div className="logo_img">
                <img src={footer} alt="" />
              </div>
              <h2>Good Food, Good Mood</h2>
            </div>
            <p className="details">Where every dish tells a delicious story.</p>
          </div>
          <div className="footer-box">
            <h4 className="footer_title"> Company</h4>
            <ul footer_links>
            <li><a href="">Our Programmes</a></li>

              <li><a href="">Our plans</a></li>

              <li>
               
                <a href="">Become a member</a>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <h4 className="footer_title"> Quick Links</h4>
            <ul footer_links>
            <li><a href=""> About us</a></li>
            <li><a href="">ontact us</a></li>
            <li><a href="">Supprt us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;