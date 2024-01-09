import { useEffect, useState } from 'react';
import './App.css'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar'
import Artists from './Components/Artists/Artists';
import Hero from './Components/Hero/Hero';
import mironus from './assets/mirron.png'
import kumir from './assets/kumir.jpg'
import dora from './assets/dora.png'
import slava from './assets/slava.jpg'
import love from './assets/love.jpg'

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './Components/Footer/Footer';




const artistsData = [
  {avatar: mironus,
  name: 'Oxxymiron',
  description: 'Главный эмси Руси, воплощение эпохи. Порвет любого за лирического героя. Оксимирон для думающих. Любимый фильм BEEF.'
},
  {avatar: kumir,
  name: '1.Kla$',
  description: 'Гениальнейший классик русского репа. Родоначальник такого понятия как стиль. Легенда как Цой.'
},
  {avatar: dora,
  name: 'Дора',
  description: 'Ну такая зая. Главный амбассадор Мотор 8. Ее оглушительный концерт в Севастополе в 41-ом останется в памяти на веки'
},
  {avatar: slava,
  name: 'Слава КПСС',
  description: 'Валентин Дядька, Гнойный, Воровская лапа, Бутер Бродский, Три дня говна, Птичий пепел, Соня Мармеладова, бля чел определись уже.'
},
  {avatar: love,
  name: 'Мэйби бэйби',
  description: 'Не ну это супер зая. Кумир всех работяг с завода. Своим флоу уничтожит даже оксимирона. Галат спасибо за детство и реп-баттлы'
}
]


const App = () => {
  let heroData = [
    {text1:"Oxxxymiron", text2:"1.Kla$"},
    {text1:"Indulge", text2:"your passions"},
    {text1:"Give in to", text2:"your passions"},
  ]

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(true);

  useEffect(() =>{
    setInterval(() => {
    setHeroCount((count) => {return count === 2? 0:count+1})
    }, 5000);
  },[])
  return (
    <BrowserRouter>
    <Navbar /> 
    <Background playStatus={playStatus} heroCount={heroCount}/>
    <Hero 
     setPlayStatus={setPlayStatus}
     heroData={heroData[heroCount]}
     heroCount={heroCount}
     setHeroCount={setHeroCount}
     playStatus={playStatus}
    /> 
    
    <Routes>
        <Route path='/artists' element={artistsData.map((artist, index) => (
          <Artists
            key={index}
            name={artist.name}
            description={artist.description}
            avatar={artist.avatar}
          />)) } />
    
     </Routes>
      <Footer />
    </BrowserRouter>
    
  )
}

export default App
