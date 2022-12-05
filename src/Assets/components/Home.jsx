import React from 'react'
import { Link } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <section id="home" className="d-flex align-items-center min-vh-100">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="display-2 fw-bold" data-aos="fade-up">Hi there! I am <span className="text-brand">Abu Bakar.</span></h1>
                    <h4 data-aos="fade-up" data-aos-delay="100" className="mt-2 mb-5">Mars based web designer and photographer</h4>
                    <div data-aos="fade-up" data-aos-delay="200"><Link to={'/services'} className="btn btn-outline-danger">Get Connected</Link></div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
