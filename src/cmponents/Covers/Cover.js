import React from 'react'
import './Cover.css';
import coverVideo from '../../media/mart.mp4';

export const Cover = () => {
  return (
    <div className='cover-container'>
        <video className='video' src={coverVideo} autoPlay loop muted/>
        <h1>Victor Alfonso Fresneda Higuera</h1>
        <p>Electronic Ingineer | Front-end developer | React | JavaScript | HTML | CSS </p>
    </div>
  )
}
