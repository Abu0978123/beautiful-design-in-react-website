import React from "react";
// import { BsSearch } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <section id="home" className="d-flex align-items-center min-vh-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="display-2 fw-bold" data-aos="fade-up">
                <span className="text-brand">E-Lance.</span>
              </h1>
              <h4 data-aos="fade-up" data-aos-delay="100" className="mt-2 mb-5">
                Find perfect freelancers for your business.
              </h4>
              <div data-aos="fade-up" data-aos-delay="200">
                <form class="form-inline my-2 my-lg-0 d-flex">
                  <input
                    className="form-control mr-sm-2 searchInput"
                    type="search"
                    placeholder='Try "building Mobile App"'
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-success my-2 my-sm-0 searchButton"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
