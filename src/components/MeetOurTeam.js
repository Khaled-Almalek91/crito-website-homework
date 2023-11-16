import React from 'react'

import KristinImage from '../assets/images/Kristin.png'
import MarkImage from '../assets/images/Mark.jpeg'
import KimperlyImage from '../assets/images/Kimberly.png'
import JustinImage from '../assets/images/Justin.png'

const MeetOurTeam = () => {
  return (
    <section className="meet-our-team">
  <div className="container">
    <div className="head-section">
      <div className="section-title">
        <p>Meet Our Team</p>
        <h2>Experience Team Members</h2>
      </div>
      <div className="button">
        <a className="btn-yellow" href="services.html">
          Browse Team
          <i className="fa-solid fa-arrow-up-right-from-square" />{" "}
        </a>
      </div>
    </div>
    <div className="photos">
      <div className="kristin photo-item">
        <img src={KristinImage} alt="" />
        <h2>Kristine Palmer</h2>
        <h3>Chef Operation Officer</h3>
      </div>
      <div className="mark photo-item">
        <img src={MarkImage} alt="" />
        <h2>Mark Aubri</h2>
        <h3>Senior Consultant</h3>
      </div>
      <div className="kimberly photo-item">
        <img src={KimperlyImage} alt="" />
        <h2>Kimberly Hansen</h2>
        <h3>Senior Consultant</h3>
      </div>
      <div className="justin photo-item">
        <img src={JustinImage} alt="" />
        <h2>Justin Willoman</h2>
        <h3>Senior Tech Consultant</h3>
      </div>
    </div>
    <div className="page-dots">
      <i className="fa-solid fa-ellipsis" />
    </div>
  </div>
</section>
  )
}

export default MeetOurTeam