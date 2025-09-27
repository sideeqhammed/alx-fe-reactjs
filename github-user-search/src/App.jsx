import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Notes from './components/Notes'
import AddNote from './components/AddNote'
import Search from './components/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Notes />} />
        <Route path='/add' element = {<AddNote />} />
        <Route path='/search' element = {<Search />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
