import React, { useState } from "react";
import axios from "axios";
import "./Footer.css";
import logo from "../images/Logo.png";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios.post("http://localhost:8000/register", user).then((res) => {
        alert("Account created succefully");
        history.push("/login");
      });
    } else {
      alert("invlid input");
    }
  };
  return (
    <div className="register">
      {console.log("User", user)}

      <div style={{ marginBottom: "45px" }}>
        <nav className="navbar navbar-light bg-light">
          <div>
            <img
              src={logo}
              alt="logo"
              style={{
                width: 250,
                height: 150,
                marginLeft: "20px",
                marginRight: "20px",
              }}
            />
  
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-dark">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/Home"
                style={{ fontSize: "25px" }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/Categories"
                style={{ fontSize: "25px" }}
              >
                Categories
              </a>
            </li>
          </ul>
          <form className="d-flex">
            &nbsp;&nbsp;
            <a className="navbar-brand" href="/login">
              <b> Login </b>
            </a>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <a className="navbar-brand" href="/register">
              <b> Register </b>
            </a>
            &nbsp;&nbsp;
          </form>
        </nav>
      </div>

      <div className="container">
        <section className="padding-bottom">
          <header className="section-heading heading-line">
            <h4 className="title-section text-uppercase">
              Register My Account
            </h4>
          </header>

          <div className="row">
            <div className="col-md-8">
              <div
                className="card-banner banner-quote overlay-gradient"
                style={{
                  backgroundImage: "url('assets/images/banners/banner9.jpg')",
                }}
              >
                <div className="card-img-overlay white">
                  <h3 className="card-title">
                    Register this week get the Free Item biggest sale in world{" "}
                  </h3>
                  <p className="card-text" style={{ maxWidth: "400px" }}>
                    Enjoy Upto 80% Discount with AliExpress Coupon Code. Use Our
                    Valid Promo Code & Save! Fashion Coupons. Best Offers.
                    Electronics Promo. Get Seasonal Discounts. Upto 80% Savings.
                  </p>
                  <a href="" className="btn btn-primary rounded-pill">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-body">
                <h4 className="title py-3">Create An Account</h4>

                <div className="form-group">
                  <label>Email Address*</label>
                  <input
                    className="form-control"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Enter your Email"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label>Full Name*</label>
                  <input
                    className="form-control"
                    name="name"
                    value={user.name}
                    placeholder="Your Name"
                    onChange={handleChange}
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label>Password*</label>
                  <input
                    className="form-control"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    type="password"
                  />
                </div>
                <div className="form-group">
                  <label>Check Password</label>
                  <input
                    className="form-control"
                    name="reEnterPassword"
                    value={user.reEnterPassword}
                    onChange={handleChange}
                    placeholder="ReEnter your password"
                    type="password"
                  />
                </div>
                <div className="form-group">
                  <button className="btn btn-warning" onClick={register}>
                    Register
                  </button>
                  <br></br>
                  <br></br>
                  <h6 className="title-section text-uppercase">
                    If You Have Account Login
                  </h6>
                  <button
                    className="btn btn-success"
                    onClick={() => history.push("/login")}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <footer
          className="site-footer bg-dark text-dark"
          style={{ fontSize: "20px", marginTop: "60px" }}
        >
          <div>
            <div className="row">
              <div className="col-xs-6 col-md-3">
                <h6 style={{ color: "black", marginLeft: "200px" }}>
                  Categories
                </h6>
                <ul className="footer-links" style={{ marginLeft: "200px" }}>
                  <li>
                    <a href="/" style={{ textDecoration: "none" }}>
                      Electronics
                    </a>
                  </li>
                  <li>
                    <a href="/" style={{ textDecoration: "none" }}>
                      Furnitures
                    </a>
                  </li>
                  <li>
                    <a href="/" style={{ textDecoration: "none" }}>
                      Auto parts & Accessories
                    </a>
                  </li>
                  <li>
                    <a href="/" style={{ textDecoration: "none" }}>
                      Home & garden
                    </a>
                  </li>
                  <li>
                    <a href="/" style={{ textDecoration: "none" }}>
                      Fashion
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-xs-9 col-md-6">
                <center>
                  {" "}
                  <img
                    src={logo}
                    alt="logo"
                    style={{
                      width: 250,
                      height: 150,
                      marginLeft: "20px",
                      marginRight: "20px",
                    }}
                  />
                </center>
              </div>

              <div className="col-xs-5 col-md-2">
                <h6 style={{ color: "black" }}>Details</h6>
                <ul className="footer-links">
                  <li>
                    <a href="/" style={{ textDecoration: "none" }}>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/" style={{ textDecoration: "none" }}>
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="/" style={{ textDecoration: "none" }}>
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr></hr>
          </div>
        </footer>
        <div className="bg-light">
          <div className="row">
            <div
              className="col-md-6 col-sm-6 col-xs-12"
              style={{ marginLeft: "20px" }}
            >
              <p className="copyright-text">
                Copyright &copy; 2021 All Rights Reserved by
                <br />
                <a href="/" style={{ textDecoration: "none" }}>
                  Buy Goods
                </a>
                .
              </p>
            </div>
            <center>
              <div className="col-md-5 col-sm-6 col-xs-12">
                <ul className="social-icons">
                  <li>
                    <a className="facebook" href="www.facebook.com">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="www.twitter.com">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a className="dribbble" href="www.dribbble.com">
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </li>
                  <li>
                    <a className="linkedin" href="www.linkedin.com">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
