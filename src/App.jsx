import { useEffect, useState } from 'react';
import './App.css'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar'
import Artists from './Components/Artists/Artists';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [heroCount, setHeroCount] = useState(5);
  const [playStatus, setPlayStatus] = useState(true);

  useEffect(() =>{
    setInterval(() => {
    setHeroCount((count) => {return count === 5? 0:count+1})
    }, 5000);
  },[])
  return (
    <BrowserRouter>
    <Background playStatus={playStatus} heroCount={heroCount}/>
    <Navbar />
      <Routes>

        <Route path='/artists' element={<Artists />} />
    
      </Routes>
    </BrowserRouter>
  )
}

export default App
