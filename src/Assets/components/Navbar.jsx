import React from 'react'
import { Link,  } from 'react-router-dom'
import  {BsInstagram , BsFacebook, BsLinkedin}  from 'react-icons/bs'
import {CiYoutube} from 'react-icons/ci'

export default function Navbar() {
  return (
    <div>
        <nav id="navbar" className="navbar navbar-expand-lg fixed-top">
        <div className="container">
            <Link className="navbar-brand" to="/">E-Lance.</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/work">Work</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li><li className="nav-item">
                        <Link className="nav-link" to="/signup">Signup</Link>
                    </li>
                </ul>
                <ul className="navbar-nav flex-row">  
                    <li className="nav-item">
                        <a className="social-icon rounded-3" href="https://www.linkedin.com/company/zetasoftit/" target={'_blank'}><BsLinkedin/></a>
                    </li>
                    <li className="nav-item"> 
                        <a className="social-icon rounded-3" href="https://www.facebook.com/ZetasoftIT/" target={'_blank'}><BsFacebook/></a>
                    </li>
                    <li className="nav-item">
                        <a className="social-icon rounded-3" href="https://www.instagram.com/itx__abu" target={'_blank'}><BsInstagram/></a>
                    </li>
                    <li className="nav-item">
                        <a className="social-icon rounded-3" href="https:/youtube.com" target={'_blank'}><CiYoutube /></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
  )
}
