import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="row gy-5">
              <div className="col-md-4">
                <h4>
                  <a href="#" className="text-white">
                    E-Lance
                  </a>
                </h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ullam accusantium vero sunt!
                </p>
                <ul className="navbar-nav flex-row">
                  <li className="nav-item">
                    <a className="social-icon" href="#">
                      <i className="ri-dribbble-line"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="social-icon" href="#">
                      <i className="ri-github-line"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="social-icon" href="#">
                      <i className="ri-instagram-line"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="social-icon" href="#">
                      <i className="ri-youtube-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 ms-auto">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                   <Link to={'/services'}><a>Services</a></Link> 
                  </li>
                  <li>
                  <Link to={'/blog'}><a >Blog</a></Link>
                  </li>
                  <li>
                  <Link to={'/contact'}> <a >Contact</a></Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4>Contact</h4>
                <ul>
                  <li>Email: hr@zetasoft.org</li>
                  <li>Phone: +931-190-10814</li>
                  <li>Address: Dalazak Road Peshawar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-auto">
                <p className="mb-0">Copyright text goes here</p>
              </div>
              <div className="col-auto">
                <p className="mb-0">
                  Template designed by
                  <a href="https://www.instagram.com/itx__abu"> Abu Bakar </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
