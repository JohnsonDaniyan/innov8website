import React, { useEffect, useRef } from 'react';
import './nav.css';
import innov8Logo from '../../images/LOGO.svg';
import {Parallax} from 'react-scroll-parallax';
import RotLogo from '../rotLogo/RotLogo';
import Button from '../button/Button';
import {AiOutlineMenu} from "react-icons/ai";
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {FaTwitterSquare} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Button2 from '../button2/Button2';

function NavBar() {
  const check = useRef();
  useEffect(()=>{
    var styles = window.getComputedStyle(check.current,':before')
    var content = styles['content'];
    console.log(content);
  })
  const undo = () => {
    document.getElementById("checkbox").checked = false;
    
  }
  
  return (
    <div className=" n">
        <div className="n-logo-wrapper"><Link to="/"><RotLogo/></Link></div>
        <ul className="n-links">
          <li className="n-link">
            <Link to="/">
              <Button2 
                variant="bgSwoop" 
                size ="large"
                colors={["innov8VeryDarkGreen","innov8LightGreen"]}
                textColors={{"from":"black","to":"white"}}>
                  Home
              </Button2>
            </Link>
          </li>
            <li className="n-link"><Link to="/innov8Learn">
              <Button2 
                variant="bgSwoop" 
                size ="large"
                colors={["innov8VeryDarkGreen","innov8LightGreen"]}
                textColors={{"from":"black","to":"white"}}>
                  Innov8Learn
              </Button2>
            </Link></li>
            <li className="n-link"><a href='#programs'>
              <Button2 
                variant="bgSwoop" 
                size ="large"
                colors={["innov8VeryDarkGreen","innov8LightGreen"]}
                textColors={{"from":"black","to":"white"}}>
                  Programs
              </Button2>
              </a></li>
            <li className="n-link"><a href='#'><Button2 
                variant="bgSwoop" 
                size ="large"
                colors={["innov8VeryDarkGreen","innov8LightGreen"]}
                textColors={{"from":"black","to":"white"}}>
                  Gallery
              </Button2></a></li>
            <li className="n-link "><a href='#'><Button2 
                variant="bgSwoop" 
                size ="large"
                colors={["innov8VeryDarkGreen","innov8LightGreen"]}
                textColors={{"from":"black","to":"white"}}>
                  Feeds
              </Button2></a></li>
            <li className="n-link"><a href='#'><Button2 
                variant="bgSwoop" 
                size ="large"
                colors={["innov8VeryDarkGreen","innov8LightGreen"]}
                textColors={{"from":"black","to":"white"}}>
                  Contact
              </Button2></a></li>
            <div className="hambuger">
              <div id="wrapper">
                <div id="menuToggle">
                  <input id="checkbox" type="checkbox" />
                  
                  <span></span>
                  <span></span>
                  <span></span>
                  <ul onClick={undo} ref={check}id="menu">
                  <Link to="/"><li>Home</li></Link>
                  <Link to="/innov8Learn"><li>Innov8Learn</li></Link>
                    <a href="#programs"><li>Programs</li></a>
                    <a href="#"><li>Gallery</li></a>
                    <a href="#"><li>Feeds</li></a>
                    <a href="#"><li>Contact</li></a>
                    <li className="n-socials">
                    <div className="f-copy-socials">
                      <a className="f-copy-social-link" href="https://www.linkedin.com/company/innov8hub/"><AiFillLinkedin/></a>
                      <a className="f-copy-social-link" href="https://www.facebook.com/Innov8hub.ng"><AiFillFacebook/></a>
                      <a className="f-copy-social-link" href="https://twitter.com/innov8hub"><FaTwitterSquare/></a>
                      <a className="f-copy-social-link" href="https://www.instagram.com/innov8hub.ng/"><AiFillInstagram/></a>
                      <a className="f-copy-social-link" href="https://www.youtube.com/channel/UC5K-fpwQti3DKkkgyR44PtA"><AiFillYoutube/></a>
                    </div>
                    </li>
                  </ul>
                </div>
            </div>
        </div>
        </ul>
       
    </div>
  )
}

export default NavBar