import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { About } from './About'
import { Header } from './Home'
import { Projects } from './Projects'
import { CustomSwitch } from './CustomSwitch'
export const Navbar = () => {
    return (
        <Router>
        <nav>
        <div className="navbar">
        <ul className="nav-items">
            <li className="nav-link"><Link style={{textDecoration: 'none', color: 'inherit'}} to="/">Home</Link></li>
            <li className="nav-link"><Link style={{textDecoration: 'none', color: 'inherit'}} to="/projects">Projects</Link></li>
            <li className="nav-link"><Link style={{textDecoration: 'none', color: 'inherit'}} to="/about">About</Link></li>
        </ul>
        <CustomSwitch>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/projects">
                <Projects/>
            </Route>
            <Route path="/">
                <Header/>
            </Route>
        </CustomSwitch>
        </div>   
        </nav>
        </Router>
    )
}
