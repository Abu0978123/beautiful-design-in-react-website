import React from 'react'
import {BsStack} from 'react-icons/bs'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {BsPencilSquare} from 'react-icons/bs'
import {AiTwotoneCamera, AiOutlineProfile} from 'react-icons/ai'
// import {BsPencilSquare} from 'react-icons/be'
import { Link } from 'react-router-dom'


export default function Services() {
  return (
    <div>
        <section id="services" className="section-padding  ">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="setion-title text-center" data-aos="fade-up" data-aos-delay="100">
                        <h1>Services</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci architecto dignissimos saepe iste soluta. Aperiam exercitationem doloribus soluta.</p>
                        <div className="line pb-0"></div>
                    </div>
                </div>
            </div>
            <div className="row gy-4 text-center">
                <div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-delay="100">
                    <div className="service py-5 px-4 border">
                        <div className="service-icon">
                         <Link> <BsStack /></Link>  
                        </div>
                        <h5 className="mt-4">Branding</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facere nihil</p>
                        <a href="#" className="custom-link">
                            <span>Read More</span>
                          <i> <AiOutlineArrowRight/></i>  
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="service py-5 px-4 border">
                        <div className="service-icon">
                            <i ><AiOutlineProfile/></i>
                        </div>
                        <h5 className="mt-4">UI Design</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facere nihil</p>
                        <a href="#" className="custom-link">
                            <span>Read More</span>
                            <i> <AiOutlineArrowRight/></i>  
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="service py-5 px-4 border">
                        <div className="service-icon">
                            <i >< AiTwotoneCamera/></i>
                        </div>
                        <h5 className="mt-4">Photography</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facere nihil</p>
                        <a href="#" className="custom-link">
                            <span>Read More</span>
                            <i> <AiOutlineArrowRight/></i>  
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-delay="400">
                    <div className="service py-5 px-4 border">
                        <div className="service-icon">
                            <i><BsPencilSquare/></i>
                        </div>
                        <h5 className="mt-4">UX Design</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facere nihil</p>
                        <a href="#" className="custom-link">
                            <span>Read More</span>
                            <i> <AiOutlineArrowRight/></i>  
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
