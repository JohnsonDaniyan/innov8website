import React, { useRef } from 'react'
import { useEffect, useState } from 'react';
import './hero.css'
import heroMain from '../../images/hero/hero.svg'
import heroMain2 from '../../images/hero/hero2.svg'
import tetfair from "../../images/hero/Tetfair.svg"
import innov8learn from "../../images/hero/innov8Learn.svg"
import heroBack from '../../images/hero/heroback.svg'
import heroBack1 from '../../images/hero/heroback3.svg'
import heroBack2 from '../../images/hero/heroback2.svg'
import { useParallax } from 'react-scroll-parallax'
import greenSmall from "../../images/hero/greenSmall.svg"
import orangeSmall from "../../images/hero/orangeSmall.svg"
import greenSmallrob from "../../images/hero/greenSmall.svg"
import orangeSmallrob from "../../images/hero/orangeSmall.svg"
import logo from '../../images/Innov8 LOGO.svg'
import tetfund from '../../images/partners/ptr-img4.png'
import Button from '../button/Button';

function Hero() {
  const timeoutRef = React.useRef(null);
  var [robotized , setRobotized] = useState(0);
  const colors = ["","","",""];
const delay = 2500;
  let Stage = useRef()
  const handleRobot =() =>{
    Stage+= 1;

    setRobotized(Stage);
  }
    const parallax = useParallax({
        speed: 10,
      });
    const parallax2 = useParallax({
        speed: -10,
      });


      function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
    // const parallax3 = useParallax({
    //     speed: -20,
    //   });



    // useEffect(()=>{ var i =0;
    //   let mainloop;
    //   setRobotized(i)
    //   // clearInterval(mainloop)
    //   mainloop = setTimeout(()=>{

    //   i +=1 ;
    //   if (i === 4){
    //     i =0
    //   }
    //   setRobotized(i);
    // },5000)
    // console.log(i)
    React.useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setRobotized((prevIndex) =>
            prevIndex === colors.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {
        resetTimeout();
      };
    }, [colors.length]);
    // let testt = document.querySelector(".testt")
    // testt.addEventListener("click",()=>{
    //   alert("click")
    //   i=0
    // })
  

  return (
    <div className={`h ${" h-"+robotized}`} onClick={handleRobot}>
      <img src={greenSmall} alt="" className={`h-green-small h-small ${robotized === 0? "h-green-hide":""}`} />
        <img src={orangeSmall} alt="" className={`h-orange-small h-small ${robotized === 0? "h-orange-hide":""}`} />
      <img src={greenSmallrob} alt="" className={`h-green-smallrob h-small h-rob${robotized === 2? "":" h-green-hiderob"}`} />
        <img src={orangeSmallrob} alt="" className={`h-orange-smallrob h-small h-rob${robotized === 2? "":" h-orange-hiderob"}`} />
        <div ref={parallax2.ref} className="h-grid-wrapper">
            <div className="h-node-1">
              <div className={`h-node-1-text ${robotized === 0? "" : "moved-text"}`}> Innovation <span style={{ color: "#EA7F1E"}}>Start-up</span> Hub</div>
              <div className={`h-node-1-text robot-text ${robotized === 1 ? "" : "moved-text"}`}> <span style={{ color: "white"}}>Innov8 </span><span  style={{ color: "#EA7F1E"}}>Learn</span> </div>
              <div className={`h-node-1-text robot-text ${robotized === 2 ? "" : "moved-text"}`}> <span style={{ color: "#326E35"}}>Robotics Club</span> </div>
              <div className={`h-node-1-text robot-text-h ${robotized === 3 ? "" : "moved-text"}`}> <span style={{ color: "#326E35"}}>TETFund Alliance For Innovative <br /> Research (TETFAIR)</span></div>
            </div>
        <div className="h-node-2">
          <div className={`node2-text2 text-node2 ${robotized === 0 ? "" : "hidden-text2"}`}><span style={{ color: "white"}}>Innovation | Invention | Start-up Incubation | <br />
            Technology Transfer | Research and Development |
            Prototype Development | Fabrication | Hman Capital Development|
            mentorship.
            </span>
          </div>
          <div className={`node2-text2 text-node2 ${robotized === 1 ? "" : "hidden-text2"}`}><span style={{ color: "white"}}>A platform that offers a carefully curated number of courses to develop capacity in <span style={{ fontWeight: "bold" }}>STEM</span> (Primary, Secondary & Tertiary), <span style={{ fontWeight: "bold" }}>Communication</span>, and other relevant  skills for navigating the modern world.</span>
          </div>
          <div className={`node2-text2 text-node2 ${robotized === 2 ? "" : "hidden-text2"}`}>Let your kids acquire 21st century tech skills while working on fascinating projects in collaboration with other brilliant kids.
          </div>
          <div className={`node2-text2 text-node2 ${robotized === 3 ? "" : "hidden-text2"}`}>An initiative designed to pull researchers and innovators from various tertiary institutions together under the same roof at the Innov8 Hub, to work on their researches or inventions.
          </div>

        </div>
        <div className="h-node-3">
          <div className={`h-node-3-cta h-cta-white ${robotized === 1? "":" h-node-3-cta-hidden"}`}>Learn More</div>
          <div className={`h-node-3-cta h-cta-green ${robotized === 2? "":" h-node-3-cta-hidden"}`}>Register Now</div>
          <div className="h-node-3-logo-wrapper">
            <img src={logo} alt="" className={`node-3-logo ${robotized === 3 ? " node-3-logo-hidden1" : ""}`} />
            <img src={tetfund} alt="" className={`node-3-logo ${robotized === 3 ? " node-3-logo-hidden2" : ""}`} />
          </div>
          <div className="test-button">
          <div className={`h-node-3-cta h-cta-green delayMe ${robotized === 3? "":" h-node-3-cta-hidden-last"}`}>Apply Now</div>
          </div>
          
        </div>
        </div>

        {/* <img ref={parallax.ref} src={heroBack} alt="" className="h-imgs h-img-back" /> */}
        {/* // <img ref={parallax.ref} src={heroBack2} alt="" className="h-imgs h-img-back h-img-back2"/> */}
        <img ref={parallax.ref} src={heroBack1} alt="" className={` h-img-back${robotized === 0 ? "" : " move-back1"}`}/>
        

        <div className="containerr">
  <div className={`carousel ${"carousel-"+robotized}`} >
    <div className={`item a ${robotized === 0 ? "" : "hidden"}`}>
        <img src={heroMain} alt="" className="h-imgs h-img-main absolute right-0 bottom-0" />
    </div>
    <div className={`item b ${robotized === 1 ? "" : "hidden"}`}>
        <img src={innov8learn} alt="" className="h-imgs h-img-main2 innov8Learn" />
    </div>
    <div className={`item c ${robotized === 2 ? "" : "hidden"}`}>
        <img src={heroMain2} alt="" className="h-imgs h-img-main2 h-robotImg" />
    </div>
    <div className={`item d ${robotized === 3 ? "" : "hidden"}`}>
        <img src={tetfair} alt="" className="h-imgs h-img-main" />
    </div>
  </div>
</div>
{/*
        <img src={heroMain} alt="" className="h-imgs h-img-main" /> */}
     {/* <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div key={idx} className="slideshowDot"
          onClick={() => {
            setRobotized(2);
            console.log(robotized)
          }}
          ></div>
        ))}
      </div> */}
    </div>
  )
}

export default Hero
