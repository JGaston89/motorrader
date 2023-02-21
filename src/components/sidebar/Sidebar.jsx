import React from 'react'
import './sidebar.css'
import {GiClothes} from 'react-icons/gi'
import {FaTshirt} from 'react-icons/fa'
import {GiShirt} from 'react-icons/gi'
import {GiPoloShirt} from 'react-icons/gi'
import {GiArmoredPants} from 'react-icons/gi'
import {GiFullMotorcycleHelmet} from 'react-icons/gi'
import { useState } from 'react'


const data = 
[
    {
       "title": "Indumentaria",
       "icon": "<GiClothes/>",
       "Childrens":[{       
            "title": "Remeras",
            "icon": "{FaTshirt}"
        },
        {
            "title": "Chombas",
            "icon": "{GiShirt}"
        }
       ]
    }
]



export default function Sidebar(){
    const [open, setOpen] = useState(false) 
  return (
    <sidebar className='sidebar'>
        <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className='sidebar-title'>
                    <span className='brand'><a href="#">
                    <GiClothes/></a>Indumentaria
                        <i className='bi-chevron-down toggle-btn' onClick={() => setOpen(!open)}>
                        </i>
                    </span>
                </div>
            <div className='sidebar-content'>
                <ul className='tools'>
                    <li>
                        <a href="#">
                            <FaTshirt/>
                        <span>Remeras</span>    
                        </a>
          
                    </li>
        
                    <li>
                        <a href="#">
                            <GiPoloShirt/>
                        <span>Chombas</span>    
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <GiShirt/>
                        <span>Buzos</span>    
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <GiArmoredPants/>
                        <span>Pantalones</span>    
                        </a>
                    </li>
                </ul>
            </div>


            <hr />
            <div className={open ? "sidebar-item open" : "sidebar-item"}></div>
                <div className='sidebar-title'>       
                    <span className='brand'><a href="#">
                    <GiFullMotorcycleHelmet/></a>Cascos <i className='bi-chevron-down toggle-btn' onClick={() => setOpen(!open)}></i></span>
                </div>
                <div className='sidebar-content'>
                <ul className='tools'>
                    <li>
                        <a href="#">
                            <GiFullMotorcycleHelmet/>
                        <span>Honda</span>    
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <GiFullMotorcycleHelmet/>
                        <span>Yamaha</span>    
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <GiFullMotorcycleHelmet/>
                        <span>BMW</span>    
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <GiFullMotorcycleHelmet/>
                        <span>Mercedes</span>    
                        </a>
                    </li>
                </ul>
                </div>
            </div>   
            
    </sidebar>
  )
}


/* VIDEO "https://www.youtube.com/watch?v=sOhLV-lfgjs&list=LL&index=8&t=86s"*/ 