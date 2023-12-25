import React from "react";
import { FaTwitter, FaInstagram, FaGithubAlt } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="row">
          <a href="https://www.instagram.com/rahulgore7/"><FaInstagram className="rahulg" /></a>
          <a href="https://www.twitter.com/RahulGore54/"><FaTwitter className="rahulg"/></a>
          <a href="https://www.github.com/rahulgore7/"><FaGithubAlt className="rahulg"/></a>
        </div>

        <div className="row">
          <ul>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>

        <div className="row">
           Copyright © 2023 Rahul - All rights reserved || Designed By: Rahul Gore
        </div>
      </div>
    </footer>
  );
};

export default Footer;
