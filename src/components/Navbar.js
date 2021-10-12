import React from 'react'
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
            <li><Link style={{textDecoration: 'none', color: 'inherit'}} to="/navyanshkesarwani007/">Home</Link></li>
            <li><Link style={{textDecoration: 'none', color: 'inherit'}} to="/navyanshkesarwani007/projects">Projects</Link></li>
            <li><Link style={{textDecoration: 'none', color: 'inherit'}} to="/navyanshkesarwani007/about">About</Link></li>
        </ul>
        <CustomSwitch>
            <Route path="/navyanshkesarwani007/about">
                <About/>
            </Route>
            <Route path="/navyanshkesarwani007/projects">
                <Projects/>
            </Route>
            <Route path="/navyanshkesarwani007/">
                <Header/>
            </Route>
        </CustomSwitch>
        </div>   
        </nav>
        </Router>
    )
}
