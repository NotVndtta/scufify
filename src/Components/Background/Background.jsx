import React from 'react'
import './background.css'
import zaya from './../../assets/zaya.jpeg'
import miron from './../../assets/miron.mp4'
import image1 from './../../assets/miron.jpg'
import image2 from './../../assets/miron.jpg'
import image3 from './../../assets/miron.jpg'
import { BrowserRouter, Routes, Route,Link, useLocation} from 'react-router-dom';

const Background = ({playStatus, heroCount}) => {
    const location = useLocation(); // получим объект с помомщью хука useLocation
    if (location.pathname !== '/') { // проверка, является ли текущий маршрут главной страницой, если нет возвращает null
        return null;
    }
    if (playStatus) {
        return (
            <video className='background grad-disp' autoPlay loop muted >
                <source src={miron} type='video/mp4'/>
            </video>
        )
    }
    else if (heroCount === 0){
        return <img src={image1} className='background fade-in' alt='image 1'/>
      }
      else if (heroCount === 1){
        return <img src={image2} className='background fade-in' alt='image 2'/>
      }
      else if (heroCount === 2){
        return <img src={image3} className='background fade-in' alt='image 3'/>
      }
        
}

export default Background
