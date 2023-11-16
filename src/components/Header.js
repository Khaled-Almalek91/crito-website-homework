import React from 'react'

import logo from '../assets/images/LogoType.svg';



const header = () => {
  return (


    <header>
    <div className="container">
      <a href="index.html">
        <img src={logo} alt="crito logotype" />
      </a>
      <button className="menu-bars">
        <i className="fa-solid fa-bars-staggered" />
      </button>
      <div className="menu">
        <div className="top-menu">
          <div className="contact-information">
            <div className="content-box">
              <i className="fa-solid fa-phone" />
              073234xxxx
            </div>
            <div className="content-box">
              <i className="fa-regular fa-envelope" />
              info@crito.com
            </div>
            <div className="content-box last">
              <i className="fa-solid fa-location-dot" />
              sveavägen xx , Stockholm
            </div>
          </div>
          <div className="social-media">
            <a href="https://instagram.com" target="_blank">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="https://facebook.com" target="_blank">
              <i className="fa-brands fa-facebook" />
            </a>
            <a href="https://twitter.com" target="_blank">
              <i className="fa-brands fa-square-x-twitter" />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <i className="fa-brands fa-linkedin" />
            </a>
          </div>
        </div>
        <div className="main-menu">
          <nav>
            <a className="active" href="index.html">
              Home
            </a>
            <a href="services.html">Service</a>
            <a href="news.html">News</a>
            <a href="contacts.html">Contact</a>
          </nav>
          <a className="btn-yellow" href="login.html">
            Login <i className="fa-solid fa-arrow-up-right-from-square" />{" "}
          </a>
        </div>
      </div>
    </div>
  </header>







  
   


 

  )
}

export default header