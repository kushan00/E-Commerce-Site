import React from "react";
import "./Footer.css";
import logo from "../images/Logo.png";
import fashion from "../images/fashion.jpg";
import electronic from "../images/Electronic.jpg";
import autoparts from "../images/autoparts.jpg";
import furnitures from "../images/furnitures.jpg";
import garden from "../images/garden.jpg";
import house from "../images/house.jpg";

const Home = ({ setLoginUser }) => {
  return (
    <div className="homepage">
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
            &nbsp;&nbsp;
            <button
              className="btn btn-success"
              onClick={() => setLoginUser({})}
            >
              Logout
            </button>
            &nbsp;&nbsp;
          </form>
        </nav>
      </div>
      {/* middle body of the home page */}
      <div>
        {/* Row 1 */}
        <div class="row" style={{marginLeft:"500px"}}>
          <div class="col-sm-3">
            {" "}
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={electronic} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Electronics</h5>
                <p class="card-text">
                  Any kind of electronic item that you want for your day to day life or for any special purposes.
                </p>
                <a href="/electronics" class="btn btn-primary">
                 Visit
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            {" "}
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={furnitures} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Furnitures</h5>
                <p class="card-text">
                Any kind of Funrnitures item that you want for your day to day life or for any special purposes.
                </p>
                <a href="/furnitures" class="btn btn-primary">
                  Visit
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            {" "}
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={autoparts} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Auto parts & Accessories</h5>
                <p class="card-text">
                Any kind of Auto parts & accessories item that you want for your vehicle or for your business.
                </p>
                <a href="/autoparts" class="btn btn-primary">
                Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
<br/><br/>
      {/* Row 2 */}
      <div class="row" style={{marginLeft:"500px"}}>
          <div class="col-sm-3">
            {" "}
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={garden} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Garden</h5>
                <p class="card-text">
                Any kind of Garden items and outdoor cleaning utilities that you want for your day to day life or for any special purposes.
                </p>
                <a href="/garden" class="btn btn-primary">
                Visit
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            {" "}
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={fashion} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Fashion</h5>
                <p class="card-text">
                Any kind of Fashion items such as clothes, fancy items that you want for your day to day life or for any special purposes.
                </p>
                <a href="/fashion" class="btn btn-primary">
                Visit
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            {" "}
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={house} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">House holds</h5>
                <p class="card-text">
                Any kind of House holds items and indoor cleaning utilities that you want for your day to day life or for any special purposes.
                </p>
                <a href="/house" class="btn btn-primary">
                Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      {/* end of the middle part */}
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
                      Garden 
                    </a>
                  </li>
                  <li>
                    <a href="/" style={{ textDecoration: "none" }}>
                      Fashion
                    </a>
                  </li>
                  <li>
                    <a href="/" style={{ textDecoration: "none" }}>
                      House holds
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

export default Home;
