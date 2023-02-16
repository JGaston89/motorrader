import React from 'react'
import './catalogo.css'
import motocatalogo from '../../assets/motocatalogo.jpg'
import moto2catalogo from '../../assets/moto2catalogo.jpg'
import moto3catalogo from '../../assets/moto3catalogo.jpg'
import moto4catalogo from '../../assets/moto4catalogo.jpeg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: motocatalogo,
        name: 'Moto nro 1',
        review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
        avatar: moto2catalogo,
        name: 'Moto nro 1',
        review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
        avatar: moto3catalogo,
        name: 'Moto nro 1',
        review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
        avatar: moto4catalogo,
        name: 'Moto nro 1',
        review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
]


const Catalogo = () => {
  return (
    <section id='catalogo'>
        <h5>Titulo</h5>
        <h2>Catalogo</h2>

        <Swiper className='container catalogo__container'
              // install Swiper modules
              modules={[Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}>
            {
                data.map(({avatar, name, review}, index)=> {
                   return(
                    <SwiperSlide key={index} className='catalogo'>
                        <div className='client__avatar'>
                        <img src={avatar} alt="" />
                        </div>
                            <h5 className='catalogo__name'>{name}</h5>
                                <small className='catalogo__review'>{review}</small>
                </SwiperSlide>
                   )
                })
            }
        </Swiper>
    </section>
  )
}

export default Catalogo