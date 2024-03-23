import React from 'react'
import './content.css'
import slavaAva from '../../assets/slava-ava.jpg'

const Content = () => {
  return (
    <section>
        <div className="singer">
          <div className="singer__header">

            <div className="singer__avatar">
            <img src={slavaAva} alt='' className='singer__image'/>
            </div>
            <div className="singer__name">
            <span> ИСПОЛНИТЕЛЬ </span> <br/>
            Слава КПСС
            <div className="singer__counter">
            Количество слушателей: 441 990
            </div>
            <div className="singer__lable">
            <span> Лейбл </span> <br/>
            Антихайп
            </div>
            </div>
          </div>
          <div className="singer__navigation">
            Навигация
          </div>
          <div className="singer__content">
            Контент
    <iframe 
      frameborder="0" 
      style={{ border: "none", width: "100%", height: "500px" }} 
      width="100%" 
      height="500" 
      src="https://music.yandex.ru/iframe/album/12659818/">
      Слушайте <a href='https://music.yandex.ru/album/12659818'>ЧУДОВИЩЕ ПОГУБИВШЕЕ МИР</a> — <a href='https://music.yandex.ru/artist/4622988'>Слава КПСС</a> на Яндекс Музыке
    </iframe>

    <iframe frameborder="0" style={{ border: "none", width: "100%", height: "500px" }} 
      width="438" 
      height="570" 
      src="https://music.yandex.ru/iframe/album/8950811">Слушайте 
      <a href='https://music.yandex.ru/album/8950811'>ОТТЕНКИ БАРДА</a> — 
      <a href='https://music.yandex.ru/artist/4622988'>
      Слава КПСС</a> на Яндекс Музыке</iframe>

          </div>

        </div>
    </section>
      
  )
}

export default Content
