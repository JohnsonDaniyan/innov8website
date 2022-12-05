import React from 'react'
import './ilHero.css'
import '../../../src/index.css'
import bg from "../../images/innov8learn/bg_mesh.png"
import { useState ,useEffect} from 'react'
function IlHero() {
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
  return (
    <div className='Ih' style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"repeat", backgroundSize:`${isMobile?"50%":"20%"}%`}}>
      Innov8<span  style={{ color: "#EA7F1E"}}>Learn</span> 
    </div>
  )
}

export default IlHero
