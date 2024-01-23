import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ContentList from './components/ContentList'
function App() {

  return (
    <div className='app'>
      <Header />
      <Hero />
      <ContentList />
    </div>
  )
}

export default App


// <i class="fa-solid fa-play"></i>
// <i class="fa-solid fa-volume-high"></i>