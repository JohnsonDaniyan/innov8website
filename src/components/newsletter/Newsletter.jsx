import React from 'react'
import './newsletter.css'

function Newsletter() {
  return (
    <>
        <form className="nl-form" action="submit">
            <input placeholder='Email Address' type="text" />
            <div className="nl-button">
            <div className="nl-button-text">Submit</div>
            </div>
        </form>
    </>
  )
}

export default Newsletter
