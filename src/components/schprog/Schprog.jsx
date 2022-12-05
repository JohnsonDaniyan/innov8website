import React from 'react'
import {useRef,useEffect, useState} from 'react'
import './schprog.css'
import ill from "../../images/schprog/ill.svg"
import { AiOutlineArrowRight } from "react-icons/ai";

function Schprog() {
    const myRef = useRef();
    const [spVisible,setSpVisible] = useState();
    useEffect(() => {
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            setSpVisible(entry.isIntersecting);
        });
        observer.observe(myRef.current)
    },[])
  return (
    <div ref={myRef} className="sp">
        <div className={`sp-wrapper ${spVisible ? "sp-wrapper-anim" : ""}`}>
            <div className="sp-text-wrapper">
                <div className={`sp-text-header ${spVisible ? "sp-text-header-anim" : ""}`}><span style={{ color: "#326E35"}}>SCHOLARSHIP</span><br />PROGRAM</div>
                <div className={`sp-text-cta ${spVisible ? "sp-text-cta-anim" : ""}`}>Coming Soon</div>
            </div>
            <div className="sp-illustration-wrapper">
                <img src={ill} alt="" className={`sp-img ${spVisible ? "sp-img-anim" : ""}`} />
            </div>
        </div>
    </div>
  )
}

export default Schprog