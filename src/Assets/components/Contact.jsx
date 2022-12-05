import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
    const navigate = useNavigate();
  const [user, setUser] = useState({
    namee: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
//    let name , value;
  function onchangeFun(e){

    setUser({...user, [e.target.name]:e.target.value})
  }
  
  function getData(e){
    e.preventDefault();
    if(user.namee && user.phone && user.email && user.subject && user.message ){
    alert(`my name is ${user.namee}. my phone numb is ${user.phone}. my email is ${user.email}. my subjext is ${user.subject}. and the last one my message ${user.message}`)
    navigate('/')
} else{
    alert('All field are mendatory')
}
}

  return (
    <div>
      <section id="contact">
        <div className="container section-padding">
          <div className="row">
            <div className="col-12">
              <div
                className="setion-title text-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h1>Contact</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci architecto dignissimos saepe iste soluta. Aperiam
                  exercitationem doloribus soluta.
                </p>
                <div className="line"></div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8" data-aos="fade-up" data-aos-delay="200">
              <form action="#" className="row g-3">
                <div className="form-group col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    onChange={onchangeFun}
                    placeholder="Name"
                    name="namee"
                    value={user.name}
                  />
                </div>
                <div className="form-group col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    onChange={onchangeFun}
                    placeholder="Phone Number"
                    name="phone"
                    value={user.name}

                  />
                </div>
                <div className="form-group col-md-4">
                  <input
                    type="email"
                    className="form-control"
                    onChange={onchangeFun}
                    placeholder="Email Address"
                    name="email"
                    value={user.name}
                  />
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    onChange={onchangeFun}
                    placeholder="Enter Subject"
                    name="subject"
                    value={user.name}
                  />
                </div>
                <div className="form-group col-md-12">
                  <textarea
                    className="form-control"
                    onChange={onchangeFun}
                    placeholder="Enter Your Message"
                    rows="4"
                    name="message"
                    value={user.name}
                  ></textarea>
                </div>
                <div className="form-group text-center col-md-12">
                  <button className="btn btn-outline-danger" onClick={getData}>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
