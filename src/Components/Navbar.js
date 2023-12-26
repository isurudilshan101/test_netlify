import React from 'react';
import { BrowserRouter as Router, Route,Routes, Link  } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const Navbar = () => {
  return (
    <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    {/* <a className="nav-link" href="#">Home</a> */}
                    <Link className ="nav-link" to="/">Home</Link>
                  </li>

                  <li className="nav-item">
                    <Link className ="nav-link" to="/about">About</Link>
                  </li>
                  
                  <li className="nav-item">
                    <Link className ="nav-link" to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
    </Router>
    
  )
}

export default Navbar