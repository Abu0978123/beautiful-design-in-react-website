import React, { useState } from "react";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
  });
  //    let name , value;
  function onchangeFun(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function getData(e) {
    e.preventDefault();
    if (user.name && user.email && user.password) {
      alert(
        `my name is ${user.name} my subjext is ${user.email}. and the last one my password ${user.password}`
      );
      navigate("/");
    } else {
      alert("All field are mendatory");
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
                  <h1>Signup Here</h1>
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
                      type="text"
                      className="form-control"
                      onChange={onchangeFun}
                      placeholder="Enter your Name"
                      name="name"
                      value={user.name}
                    />
                  </div>
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
                      placeholder="Create Your Password"
                      type="password"
                      name="password"
                      value={user.name}
                    ></input>
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      className="form-control"
                      onChange={onchangeFun}
                      placeholder="Confirm Your Password"
                      type="password"
                      name="password"
                      value={user.name}
                    ></input>
                  </div>
                  <div className="form-group text-center col-md-12">
                    <button
                      className="btn btn-success"
                      type="submit"
                      onClick={getData}
                    >
                      Signup
                    </button>
                  </div>
                  <div className="form-group text-center col-md-12">
                    <button
                      className="btn btn-primary"
                      type="submit"
                    >
                     <span className="fbicon"><BsFacebook/></span>  &nbsp; Signup with Facebook 
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
  );
}
