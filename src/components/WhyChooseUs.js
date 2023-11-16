import React from 'react'
import TowWomenTalking from '../assets/images/two women talking.png'

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
  <div className="container">
    <div className="text-section">
      <div className="section-title">
        <p>Why Choose Us</p>
        <h2>Why We Are The Best Business Consulting Agency</h2>
      </div>
      <div className="subjects">
        <h1 className="p1">
          <i className="fa-regular fa-thumbs-up" />
          <p>Process Excellence</p>
        </h1>
        <div className="text-1">Lorem, ipsum dolor sit amet consectetur.</div>
        <h1 className="p2">
          <i className="fa-solid fa-bullseye" />
          <p>Process Excellence</p>
        </h1>
        <div className="text-2">Lorem, ipsum dolor sit amet consectetur.</div>
        <h1 className="p3">
          <i className="fa-solid fa-pen" />
          <p>Process Excellence</p>
        </h1>
        <div className="text-3">Lorem, ipsum dolor sit amet consectetur.</div>
        <h1 className="p4">
          <i className="fa-solid fa-head-side-virus" />
          <p>Process Excellence</p>
        </h1>
        <div className="text-4">Lorem, ipsum dolor sit amet consectetur.</div>
      </div>
    </div>
    <div className="image-section">
      <div className="photo">
        <img src={TowWomenTalking} alt="" />
      </div>
      <div className="gray-box" />
    </div>
  </div>
</section>
  )
}

export default WhyChooseUs