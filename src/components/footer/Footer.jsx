import React from 'react'
import FacebookPosts from '../facebookPosts/FacebookPosts'
import "./footer.css"
import {FaFacebookSquare, FaInstagram, FaYoutube} from 'react-icons/fa'
import logo from '../../images/Innov8 LOGO.svg'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {FaTwitterSquare} from 'react-icons/fa'

function footer() {
  return (
    <div className='f'>
      <div className="f-main">
        <section id="" className="f-main-section f-sec-1 f-sec">
            <h1 className="f-section-header">Innov8 Hub</h1>
            <p className="f-section-p">
            Innov8 Hub, <br />
            Airport Road, Abuja. <br />
            E-mail: innov8techhub@gmail.com <br />
            Phone No: +234 906 520 0034 
            </p>
            <img src={logo} alt="" className="f-logo" />

        </section>
        <section id="" className="f-main-section f-sec-2 f-sec">
           <div className="f-main-section-mid1">
                <h1 className="f-section-header">Navigation</h1>
                <p className="f-section-p">
                News <br />
                Gallery <br />
                Innov8 Learn <br />
                Prototypes Developed <br />
                Kids and teens holiday programme <br />
                TETFund-Pathway to Triple Helix Concept
                </p>
           </div>
           <div className="f-main-section-mid2">
                <h1 className="f-section-header">Trending Courses</h1>
                <p className="f-section-p">
                    Introduction to Data Science with Python
                </p>
           </div>
        </section>
        <section id="" className="f-main-section f-sec-3 f-sec">
            <h1 className="f-section-header f-facebook-header"><FaFacebookSquare/>Facebook Posts</h1>
            <FacebookPosts/>
        </section>
      </div>
      <div className="f-copy"><div className="f-copy-inner"><div className="f-copy-at">Copyright &copy; 2022 Innov8 Hub | Powered by Innov8 Hub</div>
      <div className="f-copy-socials">
        <a classname="f-copy-social-link" href="https://www.linkedin.com/company/innov8hub/"><AiFillLinkedin/></a>
        <a classname="f-copy-social-link" href="https://www.facebook.com/Innov8hub.ng"><AiFillFacebook/></a>
        <a classname="f-copy-social-link" href="https://twitter.com/innov8hub"><FaTwitterSquare/></a>
        <a classname="f-copy-social-link" href="https://www.instagram.com/innov8hub.ng/"><AiFillInstagram/></a>
        <a classname="f-copy-social-link" href="https://www.youtube.com/channel/UC5K-fpwQti3DKkkgyR44PtA"><FaYoutube/></a>
      </div>
      </div></div>
    </div>
  )
}

export default footer
