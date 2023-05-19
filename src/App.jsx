import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar"
import Hero from './components/Hero/Hero'
import { Suspense } from 'react'
import About from "./components/About/About"
import Projects from './components/Projects/Projects'
import Technologies from './components/Technologies/Technologies'
import Poster from './components/Poster'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
function App() {

  return (
    <BrowserRouter>
        <Navbar/>
        <Suspense fallback={null}>
          <Hero/>
        </Suspense>

      <About/>
      <Projects/>
      <Technologies/>
      <Poster/>
      <Testimonials/>
      <Contact/>
    </BrowserRouter>
  )
}

export default App
