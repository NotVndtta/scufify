import React from 'react'
import './artists.css'
import mironus from '../../assets/mironchik.jpg'

const Artists = () => {
  return (
    <div className='container'>
      <div className='artist'>
        <div className='artist_avatar'>
          <img className='artist_img' src={mironus} alt='avatar'/>
        </div>
        <div className='artist_text'>
          <div className='artist_name'> Oxxxymiron </div>
          <div className='artist_description'></div>
      </div>
      </div>
    </div>
  )
}

export default Artists
