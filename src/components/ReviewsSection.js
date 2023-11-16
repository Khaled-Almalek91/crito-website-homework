import React from 'react'
import Star from '../assets/images/star.png'
import CasandraImage from '../assets/images/casadnra.png'
import AmandaImage from '../assets/images/amanda.png'
import JackImage from '../assets/images/Jack.png'

const ReviewsSection = () => {
  return (
    <section className="reviews-section">
  <div className="container">
    <div className="section-title">
      <p>Testimonial</p>
      <h2>What Our Client Says</h2>
    </div>
    <div className="openions">
      <div className="casandra-openion">
        <div className="stars">
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
        </div>
        <h2>
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt
          nemo eligendi numquam voluptate"
        </h2>
        <div className="image-name">
          <div className="on">
            <img src={CasandraImage} alt="" />
          </div>
          <div className="name-role">
            <p>Cassandra Warren</p>
            <h3>Business Manager, Dorfus</h3>
          </div>
        </div>
      </div>
      <div className="amanda-openion">
        <div className="stars">
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
        </div>
        <h2>
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt
          nemo eligendi numquam voluptate"
        </h2>
        <div className="image-name">
          <div className="on">
            <img src={AmandaImage} alt="" />
          </div>
          <div className="name-role">
            <p>Amanda Tulling</p>
            <h3>Senior Developer, Square</h3>
          </div>
        </div>
      </div>
      <div className="jack-openion">
        <div className="stars">
          <img src={Star} alt="" />
          <img src={Star}alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
        </div>
        <h2>
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt
          nemo eligendi numquam voluptate"
        </h2>
        <div className="image-name">
          <div className="on">
            <img src={JackImage} alt="" />
          </div>
          <div className="name-role">
            <p>Jack McDogglas</p>
            <h3>Key Account Manager, Gobona</h3>
          </div>
        </div>
      </div>
    </div>
    <div className="center-content">
      <a className="btn-black" href="login.html">
        All Reviews
        <i className="fa-solid fa-arrow-up-right-from-square" />{" "}
      </a>
    </div>
  </div>
</section>
  )
}

export default ReviewsSection