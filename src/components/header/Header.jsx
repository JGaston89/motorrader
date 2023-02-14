import React from 'react'
import './header.css'
import cocacola from '../../assets/cocacola.png'

const Header = () => {
  return (
    <header>
        <div className="card">
            <div className="circle">
                {/* <h1 className="logo">MOTORRADER</h1> */}
                <img src={cocacola} className="logo" alt="" />
            </div>            
        </div>
    </header>
  )
}

export default Header 


// https://www.youtube.com/watch?v=sHcYkyddTfk