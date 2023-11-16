import React from 'react'
import womanImage from '../assets/images/woman image.png'

const About = () => {
  return (
    <div className="about">
  <div className="container">
    <div className="image">
      <img
        className="wm"
        src={womanImage}
        alt="photo of the founder of the company"
      />
      <div className="blue-box">
        <div className="name-role">
          <div className="name">Samantha Brown,</div>
          <div className="role">Founder</div>
        </div>
        <div className="text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        </div>
      </div>
    </div>
    <div className="section-title">
      <p>About Company</p>
      <h2>We Are Business Consulting &amp; Credit Repair Experts</h2>
      <h3>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse
        quasi incidunt adipisci accusantium libero provident voluptate amet.
      </h3>
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        officiis quas assumenda esse obcaecati? Ex esse error voluptates iure
        vel totam eos.
      </h4>
      <div className="buttons">
        <a className="btn-black" href="login.html">
          Learn more
          <i className="fa-solid fa-arrow-up-right-from-square" />{" "}
        </a>
        <a className="play-icon" href="">
          <i className="fa-regular fa-circle-play" />
        </a>
        <p>Intro Video</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default About