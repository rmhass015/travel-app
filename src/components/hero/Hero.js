import React from 'react'
import './Herostyles.css'
import {AiOutlineSearch} from 'react-icons/ai'

import header from '../../assets/img/portugal-header.jpg'

function Hero() {
    return (
    <div>
        <div className='hero'>
                <img src={header} alt="Portugal beaches" />
            <div className="overlay"></div>
            <div className="content">
                <h1>'DESTINATE'</h1>
                <h2>The ability to travel anywhere!</h2>
                <form className="form">
                    <div>
                        <input type="text" placeholder='Search Destinations' />
                    </div>
                    <div>
                        <button><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
                <h3>More destinations coming soon!</h3>
            </div>
        </div>
    </div>
  )
}

export default Hero
