// import { useState } from 'react'
import './App.css'
import BestDeal from './Components/BestDeal/BestDeal'
import Contact from './Components/Contact/Contact'
import Featured from './Components/Featured/Featured'
import Hero from './Components/Hero/Hero'
import NavBar from './Components/NavBar/NavBar'
import Properties from './Components/Properties/Properties'
import VideoView from './Components/VideoView/VideoView'

function App() {

  return (
    <>
    <header>
      <NavBar/> 
      <Hero/>
    </header>
    <main>
<Featured/>
<VideoView/>
<BestDeal/>
<Properties/>
<Contact/> 
    </main>
    </>
  )
}

export default App
