import React from 'react'
import kd from './image/netflixkid.png'

const H4 = () => {
  return (
    <div class="h">
      <div class="himage">
        <img
          src={kd}
          class="fimage"
        />
      </div>

      <div class="hdetails">
        <h3 class="htitle">Create profiles for children.</h3>
        <h5 class="hsub">
          Send children on adventures with their favourite characters in a
          space made just for them—free with your membership.
        </h5>
      </div>
    </div>
  )
}

export default H4