import React from 'react'
import { useEffect, useState } from 'react';
import {Parallax} from 'react-scroll-parallax';
import './rotLogo.css'
import gear from '../../images/innov8gear.svg'
import text from '../../images/text.svg'

function RotLogo() {
    const [scroll, setScroll] = useState(0);
    useEffect(() => {
    window.addEventListener('scroll',(e) => {
        setScroll(window.pageYOffset/10)
    })
})
  return (
            <div className="yes h-fit relative" style={{ color: 'white',position: 'relative',zIndex: '100',width:"fit-content",gridColumnStart:"1"}}>
                
                <img className='h-[50px]' height="50px" src={text} alt="" style={{}} />
                <img className='h-[50px] absolute right-0 top-0' height="50px" src={gear} alt="" style={{ transform: 'translate(17.5%,19.7%) rotate('+ scroll+ 'deg)',position: 'absolute',zIndex:'-1',right:'0',}} />
            </div>
  )
}

export default RotLogo