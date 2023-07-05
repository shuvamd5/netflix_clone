import React from 'react'
import ntvp from './image/netflixtvmob.png'
import ntvpv from './video/netflixtvmobvideo.m4v'

const H3 = () => {
  return (
    <div class="h">
      <div class="hdetails h3details">
        <h3 class="htitle">Watch everywhere.</h3>
        <h5 class="hsub">
          Stream unlimited movies and TV shows on your phone, tablet,
          laptop, and TV.
        </h5>
      </div>
      <div class="himage feature3imagecontainer">
        <img
          src={ntvp}
          alt='feature'
          class="fimage feature3image"
        />
        <div
          class="
            fbgvideocontainer
            f3bgvideocontainer
          "
        >
          <video
            autoPlay
            loop
            muted
            class="fbgvideo f3bgvideo"
          >
            <source
              src={ntvpv}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  )
}

export default H3