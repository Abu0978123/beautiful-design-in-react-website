import React, { useState } from 'react'
import {  BsGoogle } from 'react-icons/bs';
import  {MdFacebook}  from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
      email: "",
      password: "",
    });
  //    let name , value;
    function onchangeFun(e){
  
      setUser({...user, [e.target.name]:e.target.value})
    }
    
    function getData(e){
      e.preventDefault();
      if(user.email && user.password ){
      alert(`my subjext is ${user.email}. and the last one my password ${user.password}`)
      navigate('/')
  } else{
      alert('All field are mendatory')
  }
  }
  return (
    <div>
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
                <h1>Login Here</h1>
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
                <div className="form-group col-md-12">
                  <input
                    type="email"
                    className="form-control"
                    onChange={onchangeFun}
                    placeholder="Enter your Email"
                    name="email"
                    value={user.name}
                  />
                </div>
                <div className="form-group col-md-12">
                  <input
                    className="form-control"
                    onChange={onchangeFun}
                    placeholder="Enter Your Password"
                    type='password'
                    name="password"
                    value={user.name}
                  ></input>
                </div>
                <div className="form-group text-center col-md-12 buttonEdit login">
                  <button className="btn btn-success" type='submit' onClick={getData}>
                    Login
                  </button>
                </div>
                <div>
                <button
                      className="btn btn-primary"
                      type="submit"
                    >
                     <span className="fbicon"><MdFacebook /></span>  &nbsp; Signup with Facebook 
                    </button>
                  </div>
                  <div className="form-group text-center col-md-12">
                    <button
                      className="btn btn-danger"
                      type="submit"
                    >
                     <span className="googleicon"><BsGoogle/></span>  &nbsp; Signup with Google
                    </button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}
