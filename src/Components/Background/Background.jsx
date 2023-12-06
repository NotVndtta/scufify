import React from 'react'
import './background.css'
import zaya from './../../assets/zaya.jpeg'
import miron from './../../assets/miron.mp4'
import miron1 from './../../assets/miron.jpg'

const Background = ({playStatus, heroCount}) => {
    if (playStatus) {
        return (
            <video className='background grad-disp' autoPlay loop muted >
                <source src={miron} type='video/mp4'/>
            </video>
        )
    }
  return (
    <div>
      
    </div>
  )
}

export default Background
