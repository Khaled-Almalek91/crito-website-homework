import React from 'react'
import manPhoto from '../assets/images/showcase-image.svg'
import backGroundLins from '../assets/images/background-lines.svg'

const ShowCase = () => {
  return (
    <section className="showcase">
  <div className="background-lines">
    <img src={backGroundLins} alt="" />
  </div>
  <div className="container">
    <div className="content">
      <h1>We provide The Best business solutions</h1>
      <p>
        Establish your vision and value proposition and turn them into testable
        prototypes.
      </p>
      <a className="btn-yellow" href="consulting.html">
        Get consulting
        <i className="fa-solid fa-arrow-up-right-from-square" />{" "}
      </a>
      <a className="btn-transparent" href="services.html">
        Learn more
        <i className="fa-solid fa-arrow-up-right-from-square" />{" "}
      </a>
    </div>
    <img
      src={manPhoto}
      alt="image of a man in a suit with a tablet"
    />
  </div>

  



</section>







  )
}

export default ShowCase