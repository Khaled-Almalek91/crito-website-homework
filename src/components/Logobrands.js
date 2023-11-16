import React from 'react'
import imageone from '../assets/images/paperz.svg'
import imageTwo from '../assets/images/dorfus.svg'
import imageThree from '../assets/images/martino.svg'
import imageFour from '../assets/images/square.svg'
import imageFive from '../assets/images/gobona.svg'

const Logobrands = () => {
  return (
    <div className="brands">
  <div className="container">
    <img src={imageone} alt="paperz" />
    <img src={imageTwo} alt="dorfus" />
    <img src={imageThree} alt="martino" />
    <img src={imageFour} alt="Square" />
    <img className="last" src={imageFive } alt="gobona" />
  </div>
</div>
  )
}

export default Logobrands