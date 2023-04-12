import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyNavbar from './assets/components/MyNavbar'
import Hero from './assets/components/Hero'
import Products from './assets/components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MyNavbar/>
    <Hero/>
    <Products/>
    </>
  )
}

export default App
