import React from 'react'
import './header.css'
import hondabike from '../../assets/hondabike.png'
import rider from '../../assets/rider.png'
// import allbrands from '../../assets/allbrands.png'

const Header = () => {
  return (
    <header>
    
        <div className="card">  
            <div className="circle">
              <div className="logo">
              <h1 >MOTORRADER</h1>
              <img src={hondabike} alt="" />
            </div>
            </div> 
            <div className="content">
              <h2>Bienvenido</h2>
              <p>Trabajamos con los mejores repuestos de la ciudad y capital federal. Productos y merchandaise de todo el pais</p>
              <a href="#">Conocenos</a>
            </div>
            <img src={rider} className="product_img" />         
        </div>
      
        {/* <div className='marcas'>
        <img src={allbrands} alt="" />
        </div> */}

    </header>
  )
}

export default Header 


// https://www.youtube.com/watch?v=sHcYkyddTfk