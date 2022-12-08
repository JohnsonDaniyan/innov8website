import React, { useEffect, useState } from 'react'
import heroMain from '../../images/hero/hero.svg'
import heroMain2 from '../../images/hero/hero2.svg'
import tetfair from "../../images/hero/Tetfair.svg"
import innov8learn from "../../images/hero/innov8Learn.svg"
import heroBack1 from '../../images/hero/heroback3.svg'
import greenSmall from "../../images/hero/greenSmall.svg"
import orangeSmall from "../../images/hero/orangeSmall.svg"
import greenSmallrob from "../../images/hero/greenSmall.svg"
import orangeSmallrob from "../../images/hero/orangeSmall.svg"
import logo from '../../images/Innov8 LOGO.svg'
import tetfund from '../../images/partners/ptr-img4.png'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'

function HeroUpdate() {
  let [turns,setTurns] = useState(0)
  let [facing,setFacing] = useState(0)
  useEffect(()=>{
    const timerId = setInterval(
      () => {
        setFacing((i) => (i + 1) % 4)
        setTurns((i) => (i - 90))
        console.log({facing})
      },
      5000
    );
    return () => clearInterval(timerId);
  })
    const move=()=>{
      if (facing<=2){setFacing(facing+=1)}else{setFacing(0)}
      console.log(facing)
      setTurns(turns-=90);
    }
    const moveBack=()=>{
      if (facing!==0){setFacing(facing-=1)}else{setFacing(3)}
      console.log(facing)
      setTurns(turns+=90);
    }

  return (
    <div  className={`h ${" h-"+facing}`} >
      <div className="controls bg-black/40 text-white absolute bottom-0 z-20 flex w-screen justify-around text-xl">
        <div onClick={()=>{moveBack()}} className=" p-2 cursor-pointer w-1/2 flex justify-center transition hover:bg-white hover:text-black"><AiOutlineArrowLeft /></div>
        <div onClick={()=>{move()}} className=" p-2 cursor-pointer w-1/2 flex justify-center transition hover:bg-white hover:text-black"><AiOutlineArrowRight /></div>
      </div>
    <img src={greenSmall} alt="" className={`h-green-small h-small ${facing === 0? "h-green-hide":""}`} />
      <img src={orangeSmall} alt="" className={`h-orange-small h-small ${facing === 0? "h-orange-hide":""}`} />
    <img src={greenSmallrob} alt="" className={`h-green-smallrob h-small h-rob${facing === 2? "":" h-green-hiderob"}`} />
      <img src={orangeSmallrob} alt="" className={`h-orange-smallrob h-small h-rob${facing === 2? "":" h-orange-hiderob"}`} />
      <div className="h-grid-wrapper">
          <div className="h-node-1">
            <div className={`h-node-1-text ${facing === 0? "" : "moved-text"}`}> Innovation <span style={{ color: "#EA7F1E"}}>Start-up</span> Hub</div>
            <div className={`h-node-1-text robot-text ${facing === 1 ? "" : "moved-text"}`}> <span style={{ color: "white"}}>Innov8 </span><span  style={{ color: "#EA7F1E"}}>Learn</span> </div>
            <div className={`h-node-1-text robot-text ${facing === 2 ? "" : "moved-text"}`}> <span style={{ color: "#326E35"}}>Robotics Club</span> </div>
            <div className={`h-node-1-text robot-text-h ${facing === 3 ? "" : "moved-text"}`}> <span style={{ color: "#326E35"}}>TETFund Alliance For Innovative <br /> Research (TETFAIR)</span></div>
          </div>
      <div className="h-node-2">
        <div className={`node2-text2 text-node2 ${facing === 0 ? "" : "hidden-text2"}`}><span style={{ color: "white"}}>Innovation | Invention | Start-up Incubation | <br />
          Technology Transfer | Research and Development |
          Prototype Development | Fabrication | Hman Capital Development|
          mentorship.
          </span>
        </div>
        <div className={`node2-text2 text-node2 ${facing === 1 ? "" : "hidden-text2"}`}><span style={{ color: "white"}}>A platform that offers a carefully curated number of courses to develop capacity in <span style={{ fontWeight: "bold" }}>STEM</span> (Primary, Secondary & Tertiary), <span style={{ fontWeight: "bold" }}>Communication</span>, and other relevant  skills for navigating the modern world.</span>
        </div>
        <div className={`node2-text2 text-node2 ${facing === 2 ? "" : "hidden-text2"}`}>Let your kids acquire 21st century tech skills while working on fascinating projects in collaboration with other brilliant kids.
        </div>
        <div className={`node2-text2 text-node2 ${facing === 3 ? "" : "hidden-text2"}`}>An initiative designed to pull researchers and innovators from various tertiary institutions together under the same roof at the Innov8 Hub, to work on their researches or inventions.
        </div>

      </div>
      <div className="h-node-3">
        <div className={`h-node-3-cta h-cta-white ${facing === 1? "":" h-node-3-cta-hidden"}`}>Learn More</div>
        <div className={`h-node-3-cta h-cta-green ${facing === 2? "":" h-node-3-cta-hidden"}`}>Register Now</div>
        <div className="h-node-3-logo-wrapper">
          <img src={logo} alt="" className={`node-3-logo ${facing === 3 ? " node-3-logo-hidden1" : ""}`} />
          <img src={tetfund} alt="" className={`node-3-logo ${facing === 3 ? " node-3-logo-hidden2" : ""}`} />
        </div>
        <div className="test-button">
        <div className={`h-node-3-cta h-cta-green delayMe ${facing === 3? "":" h-node-3-cta-hidden-last"}`}>Apply Now</div>
        </div>
        
      </div>
      </div>

      {/* <img ref={parallax.ref} src={heroBack} alt="" className="h-imgs h-img-back" /> */}
      {/* // <img ref={parallax.ref} src={heroBack2} alt="" className="h-imgs h-img-back h-img-back2"/> */}
      <img  src={heroBack1} alt="" className={` h-img-back${facing === 0 ? "" : " move-back1"}`}/>
      

      <div style={{perspective:"300000px"}} className="carousel-container absolute bottom-0 left-0 lg:right-0 lg:left-auto w-full lg:w-1/3 lg:h-auto h-1/3 lg:aspect-square ">
            <div style={{transformStyle:"preserve-3d",transform:`rotateY(${turns}deg)`}} className="carousel w-full h-full relative">
              <div style={{transform:"rotateY(0deg) translateZ(250px)"}} className={` absolute w-full h-full transition duration-1000 ${facing===0?"opacity-1":"opacity-0"}`}><img src={heroMain} alt="" className="w-full h-full object-contain " /></div>
              <div style={{transform:"rotateY(90deg) translateZ(250px)"}} className={` absolute w-full h-full transition duration-1000 ${facing===1?"opacity-1":"opacity-0"}`}><img src={innov8learn} alt="" className="w-full h-full object-contain" /></div>
              <div style={{transform:"rotateY(180deg) translateZ(250px)"}} className={` absolute w-full h-full transition duration-1000 ${facing===2?"opacity-1":"opacity-0"}`}><img src={heroMain2} alt="" className="w-full h-full object-contain" /></div>
              <div style={{transform:"rotateY(270deg) translateZ(250px)"}} className={` absolute w-full h-full transition duration-1000 ${facing===3?"opacity-1":"opacity-0"}`}><img src={tetfair} alt="" className="w-full h-full object-contain" /></div>
            </div>
          </div>
        </div>
  )
}

export default HeroUpdate