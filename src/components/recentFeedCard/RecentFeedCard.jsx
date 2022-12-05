import React, { useState } from 'react'
import './recentFeedCard.css'
import {BsSuitHeartFill} from 'react-icons/bs'
import {FaComment} from 'react-icons/fa'
import {AiFillStar} from 'react-icons/ai' 

function RecentFeedCard(props) {
  const [liked, setLiked] = useState(false)
  return (
    <div className='rfc'>
      <a className='rfc-link' href={props.link}>
      <div className="rfc-img-wrapper">
        <img src={props.img} alt="" className="rfc-img" />
        <h1 className="rfc-header">{props.header}</h1>
        <h5 className="rfc-date">{props.date}</h5>
      </div>
      </a>
      <div className="rfc-socialStuff">
        <div onClick={()=>{setLiked(true)}} className={`rfc-likes liked ${liked?"text-red-600":"text-gray-500"}`}>
            <BsSuitHeartFill className=''/>
            <div className="rfc-text text-red-300">
            {props.likes}
            </div>
        </div>
        <div className="rfc-comments">
            <FaComment/>
            <div className="rfc-text">
            {props.comments}
            </div>
        </div>
        <div className="rfc-star">
          <AiFillStar/>
        </div>
      </div>
    </div>
  )
}

export default RecentFeedCard
