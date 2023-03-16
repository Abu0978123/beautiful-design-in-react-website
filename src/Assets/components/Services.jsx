import React from "react";
import { BsStack } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { AiTwotoneCamera, AiOutlineProfile } from "react-icons/ai";
// import {BsPencilSquare} from 'react-icons/be'
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div>
      <section id="services" className="section-padding  ">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div
                className="setion-title text-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h1>Services</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci architecto dignissimos saepe iste soluta. Aperiam
                  exercitationem doloribus soluta.
                </p>
                <div className="line pb-0"></div>
              </div>
            </div>
            <div
              className="col-md-6 filters"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="setion-title text-center">
                <h3>Filter</h3>
                <div className="form-data formData col-md-4">
                  <form action="">
                    <div className="label">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label htmlFor="radio">On-site job</label>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label htmlFor="radio">Remote job</label>
                    </div>
                    <br />
                   <div className="category">
                   <div className="selection-data">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Category</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="selection-data">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Niche</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      
                    </div>
                   </div> <br />
                   <div className="location">
                   <div >
                      <label htmlFor="location" >Location:</label>  	&nbsp;&nbsp;&nbsp;
                      <label htmlFor="location" >KM</label>	&nbsp;	&nbsp; &nbsp;&nbsp;&nbsp;
                    </div>
                    <div > 
                    <input type="number" />
                    </div>
                   </div>
                    <div>
                        <button className="btn searchButton btn-primary rounded-4  mt-4">Search</button>
                    </div>
                  </form>
                </div>

                {/* <div className="line pb-0"></div> */}
              </div>
            </div>
          </div>
          <div className="row gy-4 text-center">
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service py-5 px-4 border">
                <div className="service-icon">
                  <Link>
                    <BsStack />
                  </Link>
                </div>
                <h5 className="mt-4">Web Development</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore facere nihil
                </p>
                <a href="#" className="custom-link">
                  <span>Read More</span>
                  <i>
                    <AiOutlineArrowRight />
                  </i>
                </a>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="service py-5 px-4 border">
                <div className="service-icon">
                  <i>
                    <AiOutlineProfile />
                  </i>
                </div>
                <h5 className="mt-4">Android Application</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore facere nihil
                </p>
                <a href="#" className="custom-link">
                  <span>Read More</span>
                  <i>
                    <AiOutlineArrowRight />
                  </i>
                </a>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="service py-5 px-4 border">
                <div className="service-icon">
                  <i>
                    <AiTwotoneCamera />
                  </i>
                </div>
                <h5 className="mt-4">Networking</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore facere nihil
                </p>
                <a href="#" className="custom-link">
                  <span>Read More</span>
                  <i>
                    <AiOutlineArrowRight />
                  </i>
                </a>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="service py-5 px-4 border">
                <div className="service-icon">
                  <i>
                    <BsPencilSquare />
                  </i>
                </div>
                <h5 className="mt-4">UX Design</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore facere nihil
                </p>
                <a href="#" className="custom-link">
                  <span>Read More</span>
                  <i>
                    <AiOutlineArrowRight />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
