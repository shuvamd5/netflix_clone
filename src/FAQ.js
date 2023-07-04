import React, { useState } from 'react'
import { FaPlus }from 'react-icons/fa'
import { FaChevronRight }from 'react-icons/fa'

const FAQ = () => {
  const [show, setShow] = useState("zero")
  const onFAQshowbutton = (s) => {
    setShow(s)
  }
  return (
    <section className="FAQlistcontainer">
      <h1 className="FAQheading">Frequently Asked Questions</h1>
      <div className="FAQlist">
        <div className="FAQquestion">
          <button className="FAQtitle">
            What is Netflix?
            <button
            className={show == "one" ? "FAQbutton FAQhide" : "FAQbutton"}
              onClick={show == "one" ? () => onFAQshowbutton("zero") : () => onFAQshowbutton("one")}
            >
              <FaPlus />  
            </button>
          </button>
          <div className={show == "one" ? "FAQtextvisible" : "FAQtexthide"}>
            <p>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices.
              <br /><br />
              You can watch as much as you want, whenever you want, without a
              single ad – all for one low monthly price. There's always
              something new to discover, and new TV shows and movies are added
              every week!
            </p>
          </div>
        </div>
        <div className="FAQquestion">
          <button className="FAQtitle">
            How much does netflix cost?
            <button
            className={show == "two" ? "FAQbutton FAQhide" : "FAQbutton"}
            onClick={show == "two" ? () => onFAQshowbutton("zero") : () => onFAQshowbutton("two")}
            >
              <FaPlus />  
            </button>
          </button>
          <div className={show == "two" ? "FAQtextvisible" : "FAQtexthide"}>
            <p>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range
              from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.
            </p>
          </div>
        </div>
        <div className="FAQquestion">
          <button className="FAQtitle">
            Where can i watch?
            <button
            className={show == "three" ? "FAQbutton FAQhide" : "FAQbutton"}
            onClick={show == "three" ? () => onFAQshowbutton("zero") : () => onFAQshowbutton("three")}
            >
              <FaPlus />  
            </button>
          </button>
          <div className={show == "three" ? "FAQtextvisible" : "FAQtexthide"}>
            <p>
              Watch anywhere, anytime, on an unlimited number of devices. Sign
              in with your Netflix account to watch instantly on the web at
              netflix.com from your personal computer or on any
              internet-connected device that offers the Netflix app, including
              smart TVs, smartphones, tablets, streaming media players and
              game consoles.
              <br /><br />
              You can also download your favourite shows with the iOS,
              Android, or Windows 10 app. Use downloads to watch while you're
              on the go and without an internet connection. Take Netflix with
              you anywhere.
            </p>
          </div>
        </div>
        <div className="FAQquestion">
          <button className="FAQtitle">
            How do I cancel?
            <button
            className={show == "four" ? "FAQbutton FAQhide" : "FAQbutton"}
            onClick={show == "four" ? () => onFAQshowbutton("zero") : () => onFAQshowbutton("four")}
            >
              <FaPlus />  
            </button>
          </button>
          <div className={show == "four" ? "FAQtextvisible" : "FAQtexthide"}>
            <p>
              Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
            </p>
          </div>
        </div>
        <div className="FAQquestion">
          <button className="FAQtitle">
            What can I watch from Netflix?
            <button
            className={show == "five" ? "FAQbutton FAQhide" : "FAQbutton"}
            onClick={show == "five" ? () => onFAQshowbutton("zero") : () => onFAQshowbutton("five")}
            >
              <FaPlus />  
            </button>
          </button>
          <div className={show == "five" ? "FAQtextvisible" : "FAQtexthide"}>
            <p>
              Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
            </p>
          </div>
        </div>
        <div className="FAQquestion">
          <button className="FAQtitle">
            Is Netflix good for kids?
            <button
            className={show == "six" ? "FAQbutton FAQhide" : "FAQbutton"}
            onClick={show == "six" ? () => onFAQshowbutton("zero") : () => onFAQshowbutton("six")}
            >
              <FaPlus />  
            </button>
          </button>
          <div className={show == "six" ? "FAQtextvisible" : "FAQtexthide"}>
            <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
              <br /><br />
            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
          </div>
        </div>
      </div>
      <div className="FAQgetstartedemail">
        <h3>
          Ready to watch? Enter your email to create or restart your
          membership.
        </h3>
        <div className="emailcontainer emailFAQcontainer">
          <div className="formFAQcontainer">
            <input type="email" className="einput" placeholder=" " />
            <label className="elabel eFAQlabel">Email address</label>
          </div>
          <button className="btn">
            <span className='btntxt'>Get Started</span> <span className='btnsign'><FaChevronRight/></span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQ