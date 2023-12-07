import { useEffect, useState } from 'react';
import './App.css'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar'
import Artists from './Components/Artists/Artists';

function App() {
  const [heroCount, setHeroCount] = useState(5);
  const [playStatus, setPlayStatus] = useState(true);

  useEffect(() =>{
    setInterval(() => {
    setHeroCount((count) => {return count === 5? 0:count+1})
    }, 5000);
  },[])
  return (
    <div>
    <Background playStatus={playStatus} heroCount={heroCount}/>
    <Navbar />
    <Artists />
    </div>
  )
}

export default App
