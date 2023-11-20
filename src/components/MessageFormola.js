import React, { useState } from 'react'






const MessageFormola = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }

    if (!formData.message.trim()) {
      validationErrors.message = "Message is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully");
    }
  }





  return (
    <div>
      <div className="message-form">
      <div className="container">


        <form onSubmit={handleSubmit} method="post"  >

          <h2>Leave us a message</h2>
           <h2>for any information.</h2>
             <div className="input-info">
              <>
              <input id="name" type="text" placeholder="Name*" onChange={handleChange} />
               {errors.name && <span id="name-error">{errors.name} </span>}

                 </>
        
                 <>
                 <input id="email" type="text" placeholder="Email*" onChange={handleChange} />
                {errors.email  && <span id="email-error">{errors.email} </span>}

                 </>
        
                 <>
                 <input id="message" type="text" placeholder="Your Message*" onChange={handleChange} />
                 {errors.message && <span id="message-error">{errors.message} </span>}

                    </>
        
      </div>
      <div className="button-sendMessage">
        <button type="submit" className="btn-yellow"> Submit <i className="fa-solid fa-arrow-up-right-from-square" />
        </button>
      </div>

      </form>
    </div>
  </div>
  </div>
  )
}

export default MessageFormola