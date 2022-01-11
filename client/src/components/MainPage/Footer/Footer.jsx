import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <div className="my-footer">
      <div>
        <strong>Shop</strong>
        <p className="para">Shop all</p>
        <p className="para">Greeting card</p>
        <p className="para">Assorted Card Sets</p>
        <p className="para">Notebooks</p>
      </div>
      <div className="first_footer_inner">
        <strong>About</strong>
        <p className="para">Our story</p>
        <p className="para">Our Values</p>
        <p className="para">Journal</p>
        <p className="para">Sustainability</p>
      </div>
      <div className="second_footer_inner">
        <strong>Customer care</strong>
        <p className="para">Contact Us</p>
        <p className="para">FAQs</p>
        <p className="para">Returns & Exchanges</p>
        <p className="para">Support</p>
      </div>
      <div className="third_footer_inner">
        <strong>Wholesale</strong>
        <p className="para">Overview</p>
        <p className="para">Register as a Wholesaler</p>
        <p className="para">Access the Wholesale Store</p>
      </div>
    </div>
  );
};

export default Footer;
