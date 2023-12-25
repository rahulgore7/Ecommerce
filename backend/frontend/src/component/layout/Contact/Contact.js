import React from "react";
import "./Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Contact = () => {
  return (
    <div className="cont-1">
      <div className="container">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <FaLocationDot />
              <div className="topic">Address</div>
              <div className="text-one">Mumbai</div>
              <div className="text-two">Maharashtra</div>
            </div>
            <div className="phone details">
              <FaPhoneAlt />
              <div className="topic">Phone</div>
              <div className="text-one"><a href="tel:+918446331146"> 8446331146 </a></div>
            </div>
            <div className="email details">
              <MdEmail />
              <div className="topic">Email</div>
              <div className="text-one"> <a href="mailto:rahulgore575@gmail.com">rahulgore575@gmail.com</a> </div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div className="input-box message-box">
                <input type="text" placeholder="Enter your message" />
              </div>
              <div className="button">
                <input type="button" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
