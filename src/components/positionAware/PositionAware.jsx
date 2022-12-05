import React, { useRef } from 'react'
import './positionAware.css'
function PositionAware(props) {

      const _handleIn= () => {
        var but = document.querySelector('.btn-6');
        var span = document.querySelector('.span1');
        but.addEventListener('mouseenter', (e)=> {
      		var relX = e.pageX - but.offsetLeft;
      		var relY = e.pageY - but.offsetTop;
            console.log(relX, relY);
			span.style.top = relY+"px"
			span.style.left = relX+"px"
        })
      }
    const _handleOut = () => {
        var but = document.querySelector('.btn-6');
        var span = document.querySelector('.span1');
        but.addEventListener('mouseout', (e)=> {
      		var relX = e.pageX - but.offsetLeft;
      		var relY = e.pageY - but.offsetTop;
            console.log(relX, relY);
			span.style.top = relY+"px"
			span.style.left = relX+"px"
        })
    }      
      
  return (
    <div  className='posAw'>
      <a onMouseOut={_handleOut} onMouseEnter={_handleIn} className="btn-6" href="#">{props.children}<span className="span1"></span></a>
    </div>
  )
}

export default PositionAware