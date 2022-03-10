import React from 'react'
import './Slider.css'
// import AdmCitasJS from '../../media/AdmCitasJS.png'
// import apiRYMreact from '../../media/api-RYM-react.png'
// import appClimaJS from '../../media/appClimaJS.png'
// import appCriptoJS from '../../media/appCriptoJS.png'
// import heroesAppReact from '../../media/heroesAppReact.png'
// import triquireact from '../../media/tri-qui-react.png'






 const slidesInfo = [
     {
         src: 'https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg',
         alt: 'project 1',
         desc:'project 1'
     },
     {
        src: 'https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg',
        alt: 'project 2',
        desc:'project 2'
    },
    {
        src: 'https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg',
        alt: 'project 3',
        desc:'project 3'
    },
    // {
    //     src: appCriptoJS,
    //     alt: 'project 4',
    //     desc:'project 4'
    // },
    // {
    //     src: heroesAppReact,
    //     alt: 'project 5',
    //     desc:'project 5'
    // },
    // {
    //     src: triquireact,
    //     alt: 'project 6',
    //     desc:'project 6'
    // },
 ] 

 const Slides = slidesInfo.map(slide => (
     <div className='slider-container'>

        <img src={slide.src} alt={slide.alt}/>
        <div className='slide-desc'>
            <span>{slide.desc}</span>
        </div>

     </div>
 ))

 export default Slides;

