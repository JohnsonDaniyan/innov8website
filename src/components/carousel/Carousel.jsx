import React, { useState } from 'react'

import heroMain from '../../images/hero/hero.svg'
import heroMain2 from '../../images/hero/hero2.svg'
import tetfair from "../../images/hero/Tetfair.svg"
import innov8learn from "../../images/hero/innov8Learn.svg"


function Carousel() {
    let [turns,setTurns] = useState(0)
    let [facing,setFacing] = useState(0)
    const move=()=>{
      if (facing<=2){setFacing(facing+=1)}else{setFacing(0)}
      console.log(facing)
      setTurns(turns-=90);
    }
  return (
          <div onClick={()=>{move()}} style={{perspective:"300000px"}} className="carousel-container absolute bottom-0 left-0 lg:right-0 lg:left-auto w-full lg:w-1/3 lg:h-auto h-1/3 lg:aspect-square ">
            <div style={{transformStyle:"preserve-3d",transform:`rotateY(${turns}deg)`}} className="carousel w-full h-full relative">
              <div style={{transform:"rotateY(0deg) translateZ(50%)"}} className={` absolute w-full h-full transition duration-1000 ${facing===0?"opacity-1":"opacity-0"}`}><img src={heroMain} alt="" className="w-full h-full object-contain " /></div>
              <div style={{transform:"rotateY(90deg) translateZ(50%)"}} className={` absolute w-full h-full transition duration-1000 ${facing===1?"opacity-1":"opacity-0"}`}><img src={innov8learn} alt="" className="w-full h-full object-contain" /></div>
              <div style={{transform:"rotateY(180deg) translateZ(50%)"}} className={` absolute w-full h-full transition duration-1000 ${facing===2?"opacity-1":"opacity-0"}`}><img src={heroMain2} alt="" className="w-full h-full object-contain" /></div>
              <div style={{transform:"rotateY(270deg) translateZ(50%)"}} className={` absolute w-full h-full transition duration-1000 ${facing===3?"opacity-1":"opacity-0"}`}><img src={tetfair} alt="" className="w-full h-full object-contain" /></div>
            </div>
          </div>
        )
}

export default Carousel