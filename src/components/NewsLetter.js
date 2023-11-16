import React from 'react'
import BackgroundLines from '../assets/images/background-wavy-lines.svg'
const NewsLetter = () => {
  return (
    <section className="news-letter">
  <img
    className="background-lines"
    src={BackgroundLines}
    alt=""
  />
  <div className="container">
    <div className="section-title">
      <h2>Get News Updates By Signup</h2>
    </div>
    <form>
      <input type="text" placeholder="username@domain.com" />
      <a className="btn-yellow" href="services.html">
        Subscribe
        <i className="fa-solid fa-arrow-up-right-from-square" />{" "}
      </a>
    </form>
  </div>
</section>
  )
}

export default NewsLetter