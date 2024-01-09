import React from 'react'
import './hero.css'
import arr_btn from '../../assets/arrow-button.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'

const Hero = ({heroData, setHeroCount, heroCount, setPlayStatus, playStatus}) => {
  return (
    <div className='hero'>
    <div className='hero-text'>
      {/* достаем текст из пропса, который сам по себе массив */}
        <p>{heroData.text1}</p> 
        <p>{heroData.text2}</p>
    </div>
    <div className="hero-explore">
        <p>See artist...</p>
        <img src={arr_btn} alt='arr_btn' />
    </div>
    <div className="hero-dot-play">
      <ul className='hero-dots'>
        {/* установка на маркер списка нужное значение при нажатии и с помощью тернарного оператора устанавливаем нужное значение класса */}
        <li onClick={()=> setHeroCount(0)} className={heroCount===0?"hero-dot orange": "hero-dot"}></li>
        <li onClick={()=> setHeroCount(1)} className={heroCount===1?"hero-dot orange": "hero-dot"}></li>
        <li onClick={()=> setHeroCount(2)} className={heroCount===2?"hero-dot orange": "hero-dot"}></li>
       
      </ul>
    <div className="hero-play">
      {/* при нажатии на кнопку меняется статус воспроизведения и в зависимости от статуса меняем иконки с помощью тернарного оператора */}
      <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus? pause_icon:play_icon} alt="" />
      <p>See the video</p>
    </div>
    </div>
  </div>
)
}

export default Hero
