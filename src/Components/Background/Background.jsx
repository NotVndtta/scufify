import React from 'react'
import './background.css'
import zaya from './../../assets/zaya.jpeg'
import miron from './../../assets/miron.mp4'
import miron1 from './../../assets/miron.jpg'
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
    else {
      return (
          <img src={miron1} alt="background image" />
          )
        }
}

export default Background
