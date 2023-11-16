

import React from 'react'


const Logobrands = () => {
  return (
    <div className="box">
  <div className="features">
    <div className="section-title">
      <p>Features</p>
      <h2>Our Accounting is trusted by thousand of companies</h2>
    </div>
    <a className="btn-yellow" href="services.html">
      Learn more
      <i className="fa-solid fa-arrow-up-right-from-square" />{" "}
    </a>
  </div>
  <div className="services">
    <div className="business">
      <a href="">
        <i className="fa-regular fa-handshake" />
      </a>
      <h1>Business Advice</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
    </div>
    <div className="start-up">
      <a href="">
        <i className="fa-regular fa-lightbulb" />
      </a>
      <h1>Startup Business</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
    </div>
    <div className="advice">
      <a href="">
        <i className="fa-solid fa-paper-plane" />
      </a>
      <h1>Financial Advice</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
    </div>
    <div className="manegment">
      <a href="">
        <i className="fa-solid fa-coins" />
      </a>
      <h1>Risk Management</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
    </div>
  </div>
</div>
  )
}

export default Logobrands