import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Reviews from './components/Reviews'
import Subscription from './components/Subscription'

function App() {

  return (
    <div className='container-fluid p-0 wrapper'>
      <Header/>
      <Reviews/>
      <Subscription/>
    </div>
  )
}
export default App
