import React,{useEffect, useState} from 'react'
import './ourcore.css'
import lady from '../../images/oc-lady.png'
import lightbulb from "../../images/lightbulb.svg"
import loop from "../../images/loop.svg"
import { useParallax } from 'react-scroll-parallax'


function Ourcore() {
    const [width, setWidth] = useState(window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    
    const isMobile = width <= 768;
    const parallax = useParallax({
        speed: -10,
      });
    const parallax2 = useParallax({
        speed: 5,
      });
    // const ladyStyle={
    //     backgroundImage:`url(${lady})`,
    //     backgroundSize:`contain`,
    //     backgroundRepeat:`no-repeat`,
    //     position:`absolute`,
    //     width:`15rem`,
    //     height:`8vw`,
    //     bottom:`9vw`,
    //     transform:`translateX(-34%)`,
    //     zIndex:`2`,
    //     pointerEvents:"none"
    // }
    const ladyStyle={
        backgroundImage:`url(${lady})`,
        backgroundSize:`contain`,
        backgroundRepeat:`no-repeat`,
        position:`absolute`,
        width:`32vw`,
        height:`8vw`,
        bottom:`8.5vw`,
        transform:`translateX(-34%)`,
        zIndex:`2`,
        pointerEvents:"none",
        display:"block"
    }
    isMobile?ladyStyle.display="none": ladyStyle.display="block"
    const imgStyle={
        width:"5rem",height:"5rem"
    }
    const _handleIn= () => {
        var but = document.querySelectorAll('.oc-card');
        var span = document.querySelectorAll('.span1');
        but.addEventListener('mouseenter', (e)=> {
            var relX = e.pageX - but.offsetLeft;
            var relY = e.pageY - but.offsetTop;
            console.log(span);
			span.style.top = relX+"px"
			span.style.left = relY+"px"
        })
      }
    const _handleOut = () => {
        var but = document.querySelector('.oc-card');
        var span = document.querySelector('.span1');
        but.addEventListener('mouseout', (e)=> {
      		var relX = e.pageX - but.offsetLeft;
      		var relY = e.pageY - but.offsetTop;
			span.style.top = relY+"px"
			span.style.left = relX+"px"
        })
    }      
  return (
    <div className='oc'>
        
        <h1 className="oc-header">Our <span style={{ color: "#EA7F1E"}}>Services</span></h1>
      <div className="oc-wrapper">
        <div className="oc-cards-wrapper">
            <div className="oc-card"  >
                <lord-icon
                     src="https://cdn.lordicon.com/nobciafz.json"
                     trigger="loop"
                     colors="primary:#121331,secondary:#94d37b"
                    style={imgStyle}>
                </lord-icon>
                <h3 className="oc-card-header">Innovation</h3>
                <p className="oc-card-desc">
                We aid individuals in transforming 
their ideas into invention, invention 
into solution, solution into entreprise. 
Innov8 Hub is the focal point for developing 
ideas into innovation and prototypes.
                </p>
                <span className="span1"></span>
            </div>
            <div className="oc-card"   >
                
                <lord-icon
    src="https://cdn.lordicon.com/sbiheqdr.json"
    trigger="loop"
    style={imgStyle}>
</lord-icon>
                <h3 className="oc-card-header">Research & Development</h3>
                <p className="oc-card-desc">
                At Innov8, we support organizatons and 
individuals searching to find new ways 
of doing things, and improve on 
existing innovations
                </p>
                <span className="span1"></span>
            </div>
            <div className="oc-card"   >
            <lord-icon
    src="https://cdn.lordicon.com/aqajnirr.json"
    trigger="loop"
    style={imgStyle}>
</lord-icon>
                    
                <h3 className="oc-card-header">Prototype Development</h3>
                <p className="oc-card-desc">
                Innov8 Hub facilitates the processes and 
procedures of prototype development 
and proof of concept for individuals 
and start-ups
                </p>
                <span className="span1"></span>
            </div>
        </div>
        <div className="oc-cards-wrapper">
        <div className="lady" style={ladyStyle}></div>
            <div className="oc-card oc-card-1"  >
            <lord-icon
                    src="https://cdn.lordicon.com/zpxybbhl.json"
                    trigger="loop"
                    delay="2000"
                    colors="primary:#121331,secondary:#08a88a"
                    style={imgStyle}>
                </lord-icon>
                
                <h3 className="oc-card-header">Innovation Consulting</h3>
                <p className="oc-card-desc">
                Through our expertise network of partnerships, we provide strategic direction / mentoring to organisations and individuals looking to implement new development in innovation startup.
                </p>
                <span className="span1"></span>
            </div>
            <div className="oc-card"   >
            <lord-icon
    src="https://cdn.lordicon.com/hbbeevsh.json"
    trigger="loop"
    style={imgStyle}>
</lord-icon>
                <h3 className="oc-card-header">Start-Up Incubation</h3>
                <p className="oc-card-desc">
                The Hub is a platform for 
entrepreneurs to accelerate their 
enterprises, and for start-ups 
to be incubated for growth 
and investment. 
                </p>
                <span className="span1"></span>
            </div>
            <div className="oc-card"   >
            <lord-icon
    src="https://cdn.lordicon.com/baiwwlyi.json"
    trigger="loop"
    style={imgStyle}>
</lord-icon>
                <h3 className="oc-card-header">Human Capital Development</h3>
                <p className="oc-card-desc">
                Innov8 offers courses in several 
fields of expertise. The training 
content will impart beneficiaries 
with knowledge and skills as well
 as strategic direction for 
self-sustainability and 
development.
                </p>
                <span className="span1"></span>
            </div>
        </div>
      </div>
      <img ref={parallax.ref} src={loop} alt="" className="loop" />
      <img ref={parallax2.ref} src={lightbulb} alt="" className="lightbulb" />
      
    </div>
  )
}

export default Ourcore
