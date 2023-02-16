import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo'></a>
        <ul className='permalinks'>
            <li><a href="Home"></a>Home</li>
            <li><a href="Social"></a>Social</li>
            <li><a href="Direccion"></a>Direccion</li>
            <li><a href="Desde"></a>Desde</li>
        </ul>


    <div className='footer__copyright'>
        <small>&copy; Gaston A. Jurado. All right reserverd.</small>
    </div>

    </footer>
  )
}

export default Footer