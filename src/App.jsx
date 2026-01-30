import { useState } from 'react'
import './App.css'
import {HashRouter, Route, Routes} from 'react-router'

import Footer from './footer/Footer.jsx'
import Header from './header/Header.jsx'
import About from './main_content/about/About.jsx'
import Home from './main_content/home/Home.jsx'
import Skill from './main_content/skill/Skill.jsx'
import Portfolio from './main_content/portfolio/Portfolio.jsx'
import Contact from './main_content/contact/Contact.jsx'
import Main from './main_content/main/main.jsx'
import Tech from './main_content/tech_stack/tech.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
        <HashRouter>
          <div id='root'>
            <Header/>
            <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/home' element={<Home/>} />
              <Route path='/about' element={<About />} />
              <Route path='/tech_stack' element={<Tech/>}/>
              <Route path='/skill' element={<Skill/>}/>
              <Route path='/portfolio' element={<Portfolio/>}/>
              <Route path='/contact' element={<Contact/>}/>
            </Routes>
            <Footer/>
     </div>
    </HashRouter>
  )
}

export default App
