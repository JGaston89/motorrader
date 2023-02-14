import React from 'react'
import './header.css'
import logohonda from '../../assets/logohonda.png'

const Header = () => {
  return (
    <header>
        <div className="card">
            <div className="circle">
                <h1 className="logo">MOTORRADER</h1>
            </div>  
            <div className='content'>
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum.</p>
                <a href="#">Ir a</a>
            </div>
            <img src={logohonda} className="product_img" alt="" />         
        </div>
    </header>
  )
}

export default Header 


// https://www.youtube.com/watch?v=sHcYkyddTfk