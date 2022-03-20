import React from 'react'
import './Slider.css'
import AdmCitasJS from '../../media/admCitas.png'
import apiRYMreact from '../../media/RandMN.jpg'
import appClimaJS from '../../media/appClima.webp'
import appCriptoJS from '../../media/criptomonedas.jpg'
import heroesAppReact from '../../media/marvelDC.jpg'
import triquireact from '../../media/tri-qui.png'






 const slidesInfo = [
     {
         src: apiRYMreact,
         alt: 'project 1',
         desc:'App rick and Morty',
         href: 'https://github.com/victorFresneda/api-rick-and-morty-reactjs.git'
     },
     {
        src: AdmCitasJS,
        alt: 'project 2',
        desc:'Administrador de citas',
        href:'https://github.com/victorFresneda/adminCitas.git' 
    },
    {
        src: appClimaJS,
        alt: 'project 3',
        desc:'App clima ',
        href:'https://github.com/victorFresneda/appDelClima.git'
    },
    {
        src: appCriptoJS,
        alt: 'project 4',
        desc:'App criptomonedas',
        href:'https://github.com/victorFresneda/proyecto_cripto_monedas.git'
    },
    {
        src: heroesAppReact,
        alt: 'project 5',
        desc:'App Marvel-Dc ',
        href:'https://github.com/victorFresneda/heroes-App-React.git'
    },
    {
        src: triquireact,
        alt: 'project 6',
        desc:'tri-qui react',
        href:'https://github.com/victorFresneda/tri-qui-reaact.git'
    },
 ] 

 const Slides = slidesInfo.map(slide => (
     <div className='slider-container'>

        <img src={slide.src} alt={slide.alt}/>
        <div className='slide-desc'>
        <span><a href={slide.href} target='_blank'>{slide.desc}</a></span>
        </div>

     </div>
 ))

 export default Slides;

