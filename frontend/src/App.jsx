import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Events from './pages/Events'
import Preloader from './components/Preloader'
import SingleEvent from './pages/SingleEvent'

const App = () => {

  const [loader,setLoader] = useState(true)

  useEffect(()=>{
    const timer = setTimeout(()=>{
        setLoader(false)
    },1500)
    return ()=> clearTimeout(timer)
  },[])
  if(loader) return <Preloader/>

  return (
    <div className='px-4 md:px-8 lg:px-48 bg-gray-300 min-h-screen' >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/atom' element={<Events/>}/>
        <Route path='/atom/:cat' element={<Events/>}/>
        <Route path='/singleevent/:eventid' element={<SingleEvent/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App