import {React, useEffect, useRef, useState} from 'react'
import "./progAndEvents.css"
import vector from "../../images/VectorWite.png"
import vectorBottom from  "../../images/vector-bottom.svg"
import standingLady from "../../images/standinglady.svg"
import innov8Learn from "../../images/pande/pande-innov8learn.png"
import ifair from "../../images/pande/pande-ifair.png"
import tetfund from "../../images/pande/pande-tetfund.png"
import sittingGuy from "../../images/pande/sittingGuy.svg"
import innov8Logo from "../../images/innov8Float.png"
import {motion,  useInView} from 'framer-motion'
import { useParallax } from 'react-scroll-parallax'
import Button from '../button/Button'
import { AiOutlineArrowRight,AiOutlineLeft,AiOutlineRight } from "react-icons/ai";
import { SiPlex } from "react-icons/si";

function ProgAndEvents() {
  
  const card = useRef(null);
  const [width, setWidth] = useState(0);
  useEffect(()=>{
    setWidth(card.current.offsetWidth)
    console.log(card.current.offsetWidth)})
  // const parallax = useParallax({
  //   speed: -10,
  // });
  let isDown = false;
  let startX;
  let scrollLeft;
  const slide = useRef()
  
  const end = () => {
    isDown = false;
  }
  
  const start = (e) => {
    console.log("start")
    isDown = true;
    startX = e.pageX || e.touches[0].pageX - slide.current.offsetLeft;
    scrollLeft = slide.current.scrollLeft;	
  }
  
  const move = (e) => {
    if(!isDown) return;
  
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - slide.current.offsetLeft;
    const dist = (x - startX);
    slide.current.scrollLeft = scrollLeft - dist;
  }
  let moved = 0;
  
  const moveLeft = ()=>{
    console.log("moveLeft")
    if(moved > -(width*3) ){
    moved-=width;slide.current.style.transform = "translateX("+moved+"px)"}
    else{
      moved = 0;slide.current.style.transform = "translateX("+moved+"px)"}
  }
  const moveRight = ()=>{
    if(moved < 0 ){
    moved+=width;slide.current.style.transform = "translateX("+moved+"px)"}
    else{
      moved = -(width*3);slide.current.style.transform = "translateX("+moved+"px)"}
  }
  // useEffect(() => {
    
  //   slide.current.addEventListener('mousedown', start);
  //   slide.current.addEventListener('touchstart', start);
  
  //   slide.current.addEventListener('mousemove', move);
  //   slide.current.addEventListener('touchmove', move);
  
  //   slide.current.addEventListener('mouseleave', end);
  //   slide.current.addEventListener('mouseup', end);
  //   slide.current.addEventListener('touchend', end);
  // });
  const ref = useRef(null);
  
  const isInView = useInView(ref, { once: true });
  const item = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        x: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      x: 50,
      opacity: 0,
      transition: {
        x: { stiffness: 1000 }
      }
    }
  };
  const list = {
    open: {
      transition: { staggerChildren: .2, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.1, staggerDirection: -1 }
    }
  }
  return (
    <div id="programs" className='pande' ref={ref}>
      <div className="pande-controls-wrapper md:pointer-events-none">
        <div onClick={moveRight} className="pande-control pande-controls-left"><SiPlex/></div>
        
        <div onClick={moveLeft} className="pande-control pande-controls-right"><SiPlex/></div>
      </div>
      <img src={vector} alt="" className="vector" />
      <img src={vectorBottom} alt="" className="vectorBottom" />
      
      <img src={innov8Logo} alt="" className="floatingLogo1" />
        <div   className="pande-slider-wrapper ">
        <motion.div 

        initial="closed"
        animate={isInView ? "open" : "closed"}
        variants={list}
        className="pande-slider" ref={slide} >
            <motion.div ref={card} className="pande-slider-card back1" variants={item}>
            <img src={sittingGuy} alt="" className="sittingGuy" />
            <div className="cont">
              <div className="pande-img-wrapper">
                <img src={tetfund} alt="" className="pande-card-img" />
              </div>
                
                <h5 className="pande-card-header">TETFund Alliance For Innovative Research (TETFAIR)</h5>
                <p style={{fontSize: ".74vw"}} className="pande-card-desc">TETFund Alliance for Innovatiove Research is an initiative designed to pull researchers and innovators from various tertiary institutions together under the same roof at the Innov8 Hub, to work on their researches or inventions with the aid of the aviable state-of-the art facilities and experts; as well as institutions in Israel.</p>
                <div className="pande-cta-wrapper">
                <a href="https://innov8hub.ng/tetfund-innovation-drive/">
                  <Button link="https://github.com/" variant="swipeGrad left-round green">Register Now</Button>
                  </a>
                  <div className="pande-cta-arrow-wrapper"><div className="arrow-mover"><AiOutlineArrowRight className='arrow' style={{fill:"inherit"}}/></div></div>
                </div> 
              </div>
            </motion.div>
            <motion.div className="pande-slider-card back1" variants={item}>
            <div className="cont">
                <div className="pande-img-wrapper">
                  <img src={tetfund} alt="" className="pande-card-img" />
                </div>
                <h5 className="pande-card-header">Pathway To Triple Helix Concept 2021</h5>
                <p style={{fontSize: ".74vw"}} className="pande-card-desc">TETFund in partnership with Innov8 implements R&D Capacity Building program for Academics and Researchers. Researchers, scholars and innovators will go through a 10-day intensive developmental program on R&D procedure, ideation and prototype development.</p>
                <div className="pande-cta-wrapper">
                  <a href="https://innov8hub.ng/tetfund-innovation-drive/">
                  <Button link="https://github.com/" variant="swipeGrad left-round green">Register Now</Button>
                  </a>
                  <div className="pande-cta-arrow-wrapper"><div className="arrow-mover"><AiOutlineArrowRight className='arrow' style={{fill:"inherit"}}/></div></div>
                </div> 
              </div>
            </motion.div>
            <motion.div className="pande-slider-card back1" variants={item}>
            <div className="cont">
                <div className="pande-img-wrapper">
                  <img src={ifair} alt="" className="pande-card-img" />
                </div>
                <h5 className="pande-card-header">Have an Innovative idea?</h5>
                <p className="pande-card-desc">Apply for The Innovation Fellowship for Aspiring Inventors and Researchers (i-FAIR 2020/21)</p>
                <div className="pande-cta-wrapper">
                  <a href="https://ifair-israelnigeria.com/">
                  <Button link="https://github.com/" variant="swipeGrad left-round green">Register Now</Button>
                  </a>
                  <div className="pande-cta-arrow-wrapper"><div className="arrow-mover"><AiOutlineArrowRight className='arrow' style={{fill:"inherit"}}/></div></div>
                </div> 
              </div>
            </motion.div>
            <motion.div className="pande-slider-card back1" variants={item}>
            
              <div className="cont">
              <img src={standingLady} alt="" className="standingLady" />
                <div className="pande-img-wrapper">
                  <img src={innov8Learn} alt="" className="pande-card-img" />
                </div>
                <h5 className="pande-card-header">Kids and Teens Coding and Robotics Holiday Programme</h5>
                <p className="pande-card-desc">Let your kids acquire 21st century tech skills while working on fascinating projects in collaboration with other brilliant kids.</p>
                <div className="pande-cta-wrapper">
                  <a href="https://innov8hub.ng/k/">
                  <Button link="https://github.com/" variant="swipeGrad left-round green">Register Now</Button>
                  </a>
                  <div className="pande-cta-arrow-wrapper"><div className="arrow-mover"><AiOutlineArrowRight className='arrow' style={{fontSize:"inherit", fill:"inherit"}}/></div></div>
                </div> 
              </div>
            </motion.div>
        </motion.div>
        </div>
    </div>
  )
}

export default ProgAndEvents