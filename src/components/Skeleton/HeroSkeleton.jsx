

import React from 'react'
import '../../styles/heroskeleton.scss'

const HeroSkeleton = () => {
  return (
    <div className='hero-skeleton'>
        <div className="hero-img">
                </div>
                <div className="hero-txt">
                  <div>
                    <div className="header">
                      <div className="category"></div>
                      <div></div>
                      <div className="date"></div>
                    </div>
                    <h2 className="title">
                    </h2>
                    <p className="excerpt"></p>
                  </div>
                  <div>
                    <div></div>
                    <div>
                      <h2 className="author">

                      </h2>
                    </div>
                  </div>
                </div>

               
    </div>
  )
}

export default HeroSkeleton