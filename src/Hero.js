import React from 'react'
import ntcover from './image/netflixcover.jpg'
import N1 from './N1'
import { FaChevronRight }from 'react-icons/fa'


const Hero = () => {
  return (
    <main className='hero'>

        <div className="blackscreen"></div>

        <N1/>

        <div className="hicontainer">
            <img src={ntcover} alt="Netflixcoverimage" className='netflixcover' />
        </div>

       <div className='herotxtcontainer'>
        <div className="herotxt">
            <h1 className="herotitle">Unlimited movies, TV shows, and more</h1>
            <p className="subtitle">Plans now start at <span>USD2.99/</span>month</p>
            <p className="sub">Ready to watch? Enter your email to create or restart your membership.</p>

            <div className="emailcontainer">
                <div className="formcontainer">
                    <input type="email" name="email" className="einput" placeholder='' />
                    <label htmlFor="email" className='elabel'>Email address</label>
                </div>
                <button className="btn">
                    <span className='btntxt'>Get Started</span> <span className='btnsign'><FaChevronRight/></span>
                </button>
            </div>
        </div>
       </div>

    </main>
  )
}

export default Hero