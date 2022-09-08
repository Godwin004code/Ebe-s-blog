
import React from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaRemoveFormat, FaSearch, FaTimes} from 'react-icons/fa'


const Nav = ({showNav,setShowNav}) => {
  return (
    <header>
        <div className='logo-header'>
            <div className='bars' onClick={() => setShowNav(!showNav)}>
                {<FaBars />}
            </div>
            
            <h2 style={{color: 'white'}}>Blogr</h2>

            <div className='bars'>
            <FaSearch  />
            </div>
            <nav className={showNav === true ? 'active' : ''}>
                <ul>
                <li className='times bars' onClick={() => setShowNav(false)}>
                        <FaTimes /> 
                    </li>
                    <li onClick={() => setShowNav(false)}>
                        <Link to="/">Home</Link>
                    </li>
                    <li onClick={() => setShowNav(false)}>
                        <Link to="/">About</Link>
                    </li>
                    <li onClick={() => setShowNav(false)}>
                        <Link to="/">Blog</Link>
                    </li>
                    <li onClick={() => setShowNav(false)}>
                        <Link to="/">Contact</Link>
                    </li>
                    
                </ul>
            </nav>
        </div>
        <div className='input-flex'>
        <FaSearch className='search' />
            <input type="text" placeholder='Search' />
            
        </div>
    </header>
  )
}

export default Nav