import React from 'react'
import './hero.css'

const Hero = ({heroData, setHeroCount, heroCount, setPlayStatus, playStatus}) => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <p>Oksana</p>
        </div>
        <div className="hero-explore">
            <p>Listen</p>
        </div>
        <div className="hero-dot-play">
            <ul className='hero-dots'>
                    <li onClick={() => setHeroCount(0)} className={heroCount===0?"hero-dot orange": "hero-dot"}></li>
                    <li onClick={() => setHeroCount(1)} className={heroCount===0?"hero-dot orange": "hero-dot"}></li>
                    <li onClick={() => setHeroCount(2)} className={heroCount===0?"hero-dot orange": "hero-dot"}></li>
            </ul>
            <div className='hero-play'>
                <img onClick={() => setPlayStatus(!playStatus)} src={playStatus? pause_icon:play_icon} alt="pause/play icon" />
                <p>See the clip</p>
            </div>
        </div>
    </div>
  )
}

export default Hero
