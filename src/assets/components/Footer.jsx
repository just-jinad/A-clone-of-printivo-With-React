import React from "react";

const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "#384a62" }} className="p-5">
        <div className="container row text-white">
          <ul className="col-3">
            <p className="fw-bold">Printivo</p>
            <li>About us</li>
            <li>Contact</li>
            <li>Track Order</li>
            <li>Printivo Promise</li>
            <li>Printivo Blog</li>
            <li>Career</li>
          </ul>

          <ul className="col-md-3">
            <p className="fw-bold">Help and Information</p>
            <li>Paper Quality</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Font Licenses</li>
            <li>Shipping and Delivery</li>
          </ul>

          <ul className="col-md-3">
            <p className="fw-bold">Make Money</p>
            <li>Refer a friend & earn N1,000</li>
            <li>Become a Reseller</li>
            <li>Sell your Designs</li>
            <li>Merch Store</li>
          </ul>

          <ul className="col-md-3">
            <p className="fw-bold">Follow Us</p>
            <li className="">
              <i className="bi bi-facebook text-white"></i>
              <i className="bi bi-twitter text-white"></i>
              <i className="bi bi-instagram text-white"></i>
            </li>
            <p className="fw-bold">Accepted Payment</p>
            <li><img src="printivo verve.png" alt="" /></li>
            <p className="fw-bold">Delivery</p>
            <li>
                <img src="printivo shipping.png" alt="" />
            </li>
          </ul>
        </div>
      </div>

      <div style={{backgroundColor: "#cacac9"}} className="p-4 text-center col-md-12">
        <p>Copyright © 2023 Printivo. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
