import React from 'react'
import brandLogo1 from '../assets/images/paperz.svg'
import brandLogo2 from '../assets/images/dorfus.svg'
import brandLogo3 from '../assets/images/martino.svg'
import brandLogo4 from '../assets/images/square.svg'
import brandLogo5 from '../assets/images/gobona.svg'

const brands = () => {
  return (
    <div className="brands">
  <div className="container">
    <img src={brandLogo1} alt="paperz" />
    <img src={brandLogo2} alt="dorfus" />
    <img src={brandLogo3} alt="martino" />
    <img src={brandLogo4} alt="Square" />
    <img className="last" src={brandLogo5} alt="gobona" />
  </div>
</div>
  )
}

export default brands