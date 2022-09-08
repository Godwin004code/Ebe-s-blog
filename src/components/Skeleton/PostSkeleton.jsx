

import React from 'react'
import '../../styles/skeleton.scss';


const PostSkeleton = () => {
  return (
    <div className='skeleton'>
            <div className='img'>
              </div>
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
  )
}

export default PostSkeleton