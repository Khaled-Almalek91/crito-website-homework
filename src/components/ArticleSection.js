import React from 'react'
import WomanSitting from '../assets/images/1stphoto.png'
import Screen  from '../assets/images/2nd photo.png'
import BookImage from '../assets/images/3thd photo.png'
const ArticleSection = () => {
  return (
    <section className="article">
  <div className="container">
    <div className="top-section">
      <div className="section-title">
        <p>Article &amp; News</p>
        <h2>Get Every Single Articles &amp; News</h2>
      </div>
      <div className="button">
        <a className="btn-transparent" href="services.html">
          Browse Articles
          <i className="fa-solid fa-arrow-up-right-from-square" />{" "}
        </a>
      </div>
    </div>
    <div className="events">
      <div className="event1">
        <img src={WomanSitting} alt="" />
        <p>Business</p>
        <h2>How To Use Digitalization In The Classroom</h2>
        <h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          sed hic libero.
        </h3>
      </div>
      <div className="event2">
        <img src={Screen} alt="" />
        <p>Business</p>
        <h2>How To Use Digitalization In The Classroom</h2>
        <h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          sed hic libero.
        </h3>
      </div>
      <div className="event3">
        <img src={BookImage} alt="" />
        <p>Business</p>
        <h2>How To Use Digitalization In The Classroom</h2>
        <h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          sed hic libero.
        </h3>
      </div>
    </div>
    <div className="page-dots">
      <i className="fa-solid fa-ellipsis" />
    </div>
  </div>
</section>
  )
}

export default ArticleSection