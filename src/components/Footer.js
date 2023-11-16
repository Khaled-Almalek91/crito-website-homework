import React from 'react'
import logoWhite from '../assets/images/logotype-white.svg';
const Footer = () => {
  return (
    <footer>
  <div className="container">
    <div className="topics">
      <div className="crito">
        <a href="index.html">
          <img src={logoWhite} alt="crito logotype" />
        </a>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          obcaecati voluptas voluptates! Voluptates laborum nam ratione minus
          necessitatibus, iure praesentium.
        </h2>
      </div>
      <div className="company">
        <p>Company</p>
        <h2>About</h2>
        <h2>Features</h2>
        <h2>Work</h2>
        <h2>Career</h2>
      </div>
      <div className="help">
        <p>Help</p>
        <h2>Customer support</h2>
        <h2>Delivery Details</h2>
        <h2>Terms &amp; Conditions</h2>
        <h2>Privecy Policy</h2>
      </div>
      <div className="resources">
        <p>Resources</p>
        <h2>Free eBooks</h2>
        <h2>Development Tutorial</h2>
        <h2>How to-Blog</h2>
        <h2> Youtube Playlist</h2>
      </div>
      <div className="link">
        <p>Link</p>
        <h2>Free eBooks</h2>
        <h2>Development Tutorial</h2>
        <h2>How to-Blog</h2>
        <h2> Youtube Playlist</h2>
      </div>
    </div>
    <div className="last-row">
      <h3>© 2023 Crito - Consulting Company Inc. All Rights Reserved</h3>
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
  </div>
</footer>
  )
}

export default Footer