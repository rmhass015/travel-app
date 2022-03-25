import React, { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

import { Link } from 'react-scroll'

import './Navbarstyles.css'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h2>DESTINATE.</h2>
            </div>
            <ul className="nav-menu">
                <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
                <Link to='destinations' smooth={true} duration={500} ><li>Destinations</li></Link>
                <Link to='carousel' smooth={true} duration={500} ><li>Travel</li></Link>
                <Link to='search' smooth={true} duration={500} ><li>Book</li></Link>
                <Link to='views' smooth={true} duration={500} ><li>Views</li></Link>
            </ul>
            <div className="nav-icons">
                <BiSearch className='icon' style={{ marginRight: '1rem' }} />
                <BsPerson className='icon' />
            </div>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}

            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
                <Link to='destinations' smooth={true} duration={500} ><li>Destinations</li></Link>
                <Link to='carousel' smooth={true} duration={500} ><li>Travel</li></Link>
                <Link to='search' smooth={true} duration={500} ><li>Book</li></Link>
                <Link to='views' smooth={true} duration={500} ><li>Views</li></Link>
                </ul>
                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default Navbar