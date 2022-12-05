import React from 'react'
import './landingAnim.css'

function LandingAnim() {
  return (
    <div className='la'>
        <div className="la-sides">
                <div className="la-side la-side1"></div>
                <div className="la-side la-side2"></div>
        </div>
        <div className="la-wrapper">
            <div className="la-col la-col1"></div>
            <div className="la-col la-col2"></div>
            <div className="la-col la-col3"></div>
        </div>
        <div className="la-pinstripes">
            <div className="la-pinstripe"></div>
            <div className="la-pinstripe"></div>
            <div className="la-pinstripe"></div>
            <div className="la-pinstripe"></div>
        </div>
    </div>
  )
}

export default LandingAnim