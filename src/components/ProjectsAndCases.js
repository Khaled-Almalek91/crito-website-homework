import React from 'react'
import Hands from '../assets/images/hands and newspapper.png'
import Glasses from '../assets/images/classes and pen.png'
import Pen from '../assets/images/pen and block.png'
import Laptop from '../assets/images/laptop.png'
const ProjectsAndCases = () => {
  return (
    <section className="project-and-cases">
  <div className="container">
    <div className="section-title">
      <p>Project &amp; Case Studies</p>
      <h2>Let’s Looks Our Global Projects</h2>
    </div>
    <div className="cases">
      <article>
        <img
          src={Hands}
          alt="man hand and business papper"
        />
        <h3>Grow your business</h3>
        <a href="">
          Read more <i className="fa-solid fa-arrow-up-right-from-square" />
        </a>
      </article>
      <article>
        <img src={Glasses} alt="classes and pen" />
        <h3>Why your client needs a responsive website</h3>
        <a href="">
          Read more <i className="fa-solid fa-arrow-up-right-from-square" />
        </a>
      </article>
      <article>
        <img src={Pen} alt="pen and papper" />
        <h3>Educate your employees to get better results</h3>
        <a href="">
          Read more <i className="fa-solid fa-arrow-up-right-from-square" />
        </a>
      </article>
      <article>
        <img src={Laptop} alt="laptop" />
        <h3>Business Insights is a important piece of your business</h3>
        <a href="">
          Read more <i className="fa-solid fa-arrow-up-right-from-square" />
        </a>
      </article>
    </div>
    <div className="center-content">
      <a className="btn-black" href="login.html">
        All Recent Projects
        <i className="fa-solid fa-arrow-up-right-from-square" />{" "}
      </a>
    </div>
  </div>
</section>
  )
}

export default ProjectsAndCases