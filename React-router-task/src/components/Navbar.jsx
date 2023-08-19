import React from 'react'
import  '/src/App.css'
import All from './All'
import {BrowserRouter as Router,Route,Routes, Link} from "react-router-dom"
import Fullstack from './Fullstack'
import Datascience from './Datascience'
import Cybersecurity from './Cybersecurity'
import Career from './Career'

function Navbar() {
  return (
    <Router>
    <div>
      <header className='header '>
        <div className='logo '>
          <img src='/images/Guvi-blog-logo.webp'/>
        </div>
        <div className='top-nav'>
          <ul className='upper-nav'>
            <li>COURSES</li>
            <li>LIVE CLASS</li>
            <li>PRACTICE</li>
            <li>RESOURCES</li>
            <li>OUR PRODUCTS</li>
          </ul>
        </div>
      </header>
     <nav>
        <div >
            
        <div className='navbar1'>
            <div>
                <img src='/images/bg-cover.webp'/>
            </div>
            <nav className='d-grid ' >
                <ul className='container '>
            <li>
              <Link to="/">ALL</Link></li>
            <li><Link to="/full-stack-development">FULL STACK DEVELOPEMENT</Link></li>
            <li><Link to="/data-science">DATA SCIENCE</Link></li>
            <li><Link to="/cyber-security"> CYBER SECURITY</Link></li>
            <li><Link to="/career">CAREER</Link></li>
            </ul>
            </nav>
        </div>
        </div>
     </nav>
     
     <Routes>
      <Route exact path='/' Component={All}>all</Route>
      <Route  path='/full-stack-development' Component={Fullstack}>all</Route>
     <Route path='/data-science' Component={Datascience}>Datascience</Route>
     <Route path='/cyber-security' Component={Cybersecurity}>Cybersecurity</Route>
     <Route path='/career' Component={Career}>Career</Route>
     </Routes>
     
    
    </div>
    </Router>
  )
}

export default Navbar