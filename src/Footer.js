import React from 'react'
import { FaGlobe } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <section className='footercontainer'>
        <div class="footerrow1">
          <h4>Questions? Contact us.</h4>
        </div>
        <div className="footerlinks">
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Account</a></li>
            <li><a href="#">Media Center</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Ways to Watch</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookie Preferences</a></li>
            <li><a href="#">Corporate Information</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Speed Test</a></li>
            <li><a href="#">Legal Notices</a></li>
            <li><a href="#">Only on Netflix</a></li>
          </ul>
         </div>
        <div class="footerrow3">
          <div class="ddcontainer">
            <span className='globe'><FaGlobe /></span>
            <select
              name="languages"
              id="languagesSelect"
              class="ld"
            >
              <option value="english" selected>English</option>
            </select>
          </div>
        </div>
        <div class="footerrow4">
          <p>Netflix Nepal</p>
        </div>
      </section>
    </footer>
    // <div className="footercontainer">
    //     <p><a href="">Questions? Contact us.</a></p>
    //     <div className="footerlinks">
    //         <ul>
    //             <li><a href="#">FAQ</a></li>
    //             <li><a href="#">Help Center</a></li>
    //             <li><a href="#">Media Center</a></li>
    //             <li><a href="#">Account</a></li>
    //             <li><a href="#">Media Center</a></li>
    //             <li><a href="#">Investor Relations</a></li>
    //             <li><a href="#">Jobs</a></li>
    //             <li><a href="#">Ways to Watch</a></li>
    //             <li><a href="#">Terms of Use</a></li>
    //             <li><a href="#">Privacy</a></li>
    //             <li><a href="#">Cookie Preferences</a></li>
    //             <li><a href="#">Corporate Information</a></li>
    //             <li><a href="#">Contact Us</a></li>
    //             <li><a href="#">Speed Test</a></li>
    //             <li><a href="#">Legal Notices</a></li>
    //             <li><a href="#">Only on Netflix</a></li>
    //         </ul>
    //     </div>
    // </div>
  )
}

export default Footer