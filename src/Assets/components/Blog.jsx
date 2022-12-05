import React from 'react'
import post1 from '../images/blog-post1.jpg'
import post2 from '../images/blog-post2.jpg'
import post3 from '../images/blog-post3.jpg'
import {AiOutlineArrowRight} from 'react-icons/ai'


export default function Blog() {
  return (
    <div>
          <section id="blog" className="section-padding ">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="setion-title text-center" data-aos="fade-up" data-aos-delay="100">
                        <h1>Blog</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci architecto dignissimos saepe iste soluta. Aperiam exercitationem doloribus soluta.</p>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
            <div className="row gy-5">
                <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                    <div className="bp">
                        <img src={post1} alt=""/>
                        <div className="bp-content pt-4">
                            <h4>Website Design</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <a href="#" className="custom-link">
                                <span>Read More</span>
                                <i><AiOutlineArrowRight /></i> 
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                    <div className="bp">
                        <img src={post2} alt=""/>
                        <div className="bp-content pt-4">
                            <h4>Website Design</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <a href="#" className="custom-link">
                                <span>Read More</span>
                              <i><AiOutlineArrowRight /></i>  
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                    <div className="bp">
                        <img src={post3} alt=""/>
                        <div className="bp-content pt-4">
                            <h4>Website Design</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <a href="#" className="custom-link">
                                <span>Read More</span>
                                <i><AiOutlineArrowRight /></i> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
