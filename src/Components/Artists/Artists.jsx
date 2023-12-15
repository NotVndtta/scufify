import React from 'react'
import './artists.css'


const Artists = ({avatar,name,description}) => {
  return (
    <div className='container'>
      <div className='artist'>
        <div className='artist_avatar'>
          <img className='artist_img' src={avatar}/>
        </div>
        <div className='artist_text'>
          <div className='artist_name'> {name} </div>
          <div className='artist_description'> {description} </div>
        </div>
      </div>
    </div>      
  )
}

export default Artists
