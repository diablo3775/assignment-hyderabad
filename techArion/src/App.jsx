import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero/Hero'
import HeroTwo from './components/Hero/HeroTwo/HeroTwo'
import HeroThree from './components/Hero/HeroThree/HeroThree'
import Login from './components/authentication/Login'
import { useState } from 'react'

function App() {
  const [login,setLogin] = useState(false)

  return (
    <div className="App">
      {
        !login ? (<Login setLogin={setLogin} />) : (
          <>
            <Header />
            <Hero />
            <HeroTwo />
            <HeroThree />
          </>
        )
      }
    </div>
  )
}

export default App

