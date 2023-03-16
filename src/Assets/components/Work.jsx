import React from "react";
// the about section is for work 
import logo01 from '../images/logo01.svg'
import logo02 from '../images/logo02.svg'
import logo03 from '../images/logo03.svg'
import logo04 from '../images/logo04.svg'
import logo05 from '../images/logo05.svg'
import logo06 from '../images/logo06.svg'
import logo07 from '../images/logo07.svg'
import logo08 from '../images/logo08.svg'

export default function Work() {
  return (
    <div>
      <section id="work" className="section-padding ">
        <div className="section-padding pb-0">
          <div className="container">
            <div className="row">
              <div className="col-12" data-aos="fade-up" data-aos-delay="100">
                <div className="setion-title text-center">
                  <h1>Clients we have worked with</h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci architecto dignissimos saepe iste soluta. Aperiam
                    exercitationem doloribus soluta.
                  </p>
                  <div className="line"></div>
                </div>
              </div>
            </div>
            <div className="row g-0">
              <div
                className="col-lg-3 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="client p-5 border">
                  <img src={logo01} alt="" />
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="client p-5 border">
                  <img src={logo02} alt="" />
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="client p-5 border">
                  <img src={logo03} alt="" />
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="client p-5 border">
                  <img src={logo04} alt="" />
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="client p-5 border">
                  <img src={logo05} alt="" />
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="client p-5 border">
                  <img src={logo06} alt="" />
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="client p-5 border">
                  <img src={logo07} alt="" />
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="client p-5 border">
                  <img src={logo08} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
