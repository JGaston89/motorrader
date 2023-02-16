import React from 'react'
import './nav.css'
import {FaMotorcycle} from 'react-icons/fa'
import {GiFullMotorcycleHelmet} from 'react-icons/gi'
import {FaTshirt} from 'react-icons/fa'
import {GiShorts} from 'react-icons/gi'
import {GiSonicShoes} from 'react-icons/gi'

const Nav = () => {
  // const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#"><FaMotorcycle/></a>
      <a href="#"><GiFullMotorcycleHelmet/></a>
      <a href="#"><FaTshirt/></a>
      <a href="#"><GiShorts/></a>
      <a href="#"><GiSonicShoes/></a>

    </nav>
  )
}

export default Nav