
import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Footer.css";
import logo from "../images/Logo.png";

const Furnitures = ({fposts}) => {

  const [serachItem,setserachItem] =useState([]);

  const[Furnitures,setFurnitures]  = useState([])

    return (

    <div>
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
          </form>
        </nav>
      </div>
<div  class="text-center mt-3">
<div className="container ">
  <div align="left">
<h4>Search Furnitures </h4>
</div>
<div class="input-group">
  
  <input type="search" class="form-control rounded" placeholder="Search Electronics" aria-label="Search" onChange={event=>{setserachItem(event.target.value)}} 
    aria-describedby="search-addon" />
  
</div>
   </div> 
   <br></br><br></br>
      <h1 className="text-center mt-3">All Furnitures List</h1>
    
 
      {fposts.filter((Furnitures)=>{
    if(serachItem==""){
      return Furnitures
    }else if(Furnitures.fitemName.toLowerCase().includes(serachItem.toLowerCase())){
      return Furnitures
    }
  })
 
      .map((Furnitures, key) =>(

       
<div  class="d-flex justify-content-center">
<div className="col-12 col-md-7 col-lg-78 mx-0 mb-2">
 
<div className="card p-0 overflow-hidden h-100 shadow" >
  <div className=" text-center mt-3">
  <div className="card-body text-center">
  <h4 className="card-title">&nbsp; {Furnitures.fitemName} </h4>
  <p className="card-title">&nbsp;Brand Name: {Furnitures.fbrandName} </p>
  <p className="card-text">&nbsp; Unit price: {Furnitures.funitPrice}</p>
  <p className="card-text">&nbsp;category: {Furnitures.fcategory}</p>
  <p className="card-text">&nbsp;Shipping cost: {Furnitures.fshippingCost}</p>
  <p className="card-text">&nbsp;Qunatity available: {Furnitures.fquntityAvailable}</p>
  <p className="card-text">&nbsp;💯 Certificate of quality </p>
    <Link to ={{
        pathname:``
      }}>
    <button type="button" class="btn btn-dark"><i class="fas fa-shopping-cart"></i>&nbsp;Buy</button>
    </Link>
  </div>
  
  
  
</div>

</div>

</div>
</div>



)
       
)}

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

)
}

export default Furnitures











