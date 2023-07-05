import React from 'react'
import ntv from './image/netflixtv.png'
import ntvv from './video/netflixtvvideo.m4v'

const H1 = () => {
  return (
    <div className="h">
      <div className="hdetails">
        <h3 className='htitle'>Enjoy on your TV</h3>
        <h5 className='hsub'>Watch on smart TVs, Playstation, Xbox, chromecast, Apple TV, Blu-ray players, and more.</h5>
      </div>
      <div className="himage">
        <img
          src={ntv}
          alt="Feature"
          className="fimage"
        />
        <div className="fbgvideocontainer">
          <video
            autoPlay
            loop
            muted
            class="fbgvideo"
          >
            <source
              src={ntvv}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  )
}

export default H1