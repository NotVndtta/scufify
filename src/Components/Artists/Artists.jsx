import React from 'react'
import './artists.css'
import mironus from '../../assets/mirron.png'
import kumir from '../../assets/kumir.jpg'

const Artists = () => {
  return (
    <div className='container'>
      <div className='artists'>

        <div className='artist'>
          <div className='artist_avatar'>
            <img className='artist_img' src={mironus} alt='avatar'/>
          </div>
          <div className='artist_text'>
            <div className='artist_name'> Oxxxymiron </div>
            <div className='artist_description'>Главный эмси Руси, воплощение эпохи. <br/>
            Порвет любого за лирического героя. <br />
            Оксимирон для думающих.<br />
            Любимый фильм BEEF.</div>
        </div>
        </div>
          
        <div className='artist'>
          <div className='artist_avatar'>
            <img className='artist_img' src={kumir} alt='avatar'/>
          </div>
          <div className='artist_text'>
            <div className='artist_name'> 1.Kla$ </div>
            <div className='artist_description'>Гениальнейший классик русского репа. <br />
            Родоначальник такого понятия как стиль. <br />
            Легенда как Цой.</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Artists
