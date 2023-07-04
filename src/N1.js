import React from 'react'
import ntflg from './image/netflixlogo.png'

const N1 = () => {
  return (
    <header className='n1'>
      <nav className='navbar'>
        <div className="navlogo">
          <img
            src={ntflg}
            alt="logo"
            class="nlogo"
          />
        </div>
        <div className="signinbtn">
          <button className="signin">Sign In</button>
        </div>
      </nav>
    </header>
  )
}

export default N1