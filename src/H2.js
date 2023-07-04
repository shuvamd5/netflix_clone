import React from 'react'
import ntp from './image/netflixmob.jpg'
import bs from './image/boxshot.png'
import di from './image/downloadicon.gif'

const H2 = () => {
  return (
    <div className="h">
        <div className="himage">
            <img
                src={ntp}
                alt="Feature image"
                class="fimage"
            />
            <div class="hpcontainer">
                <div class="hp">
                    <img
                    src={bs}
                    alt="poster"
                    class="p"
                    />
                </div>
                <div class="hpdetails">
                    <h4>Stranger Things</h4>
                    <h6>Downloading...</h6>
                </div>
                <div class="dgcontainer">
                    <img
                    src={di}
                    alt="downloading gif"
                    class="gif"
                    />
                </div>
            </div>
        </div>
        <div className="hdetails">
            <h3 class="htitle">
                Download your shows to watch offline.
                </h3>
                <h5 class="hsub">
                Save your favourites easily and always have something to watch.
                </h5>
        </div>
        
    </div>
  )
}

export default H2