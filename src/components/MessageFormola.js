import React from 'react'

const MessageFormola = () => {
  return (
    <div>
        <div className="message">
    <div className="container">
      <h2>Leave us a message</h2>
      <h2>for any information.</h2>
      <div className="input-info">
        <input type="text" placeholder="Name*" />
        <input type="text" placeholder="Email*" />
        <input type="text" id="M" placeholder="Your Message*" />
      </div>
      <div className="button-sendMessage">
        <a className="btn-yellow" href="services.html">
          Browse Team
          <i className="fa-solid fa-arrow-up-right-from-square" />{" "}
        </a>
      </div>
    </div>
  </div>
  </div>
  )
}

export default MessageFormola