import React from 'react'
import img from './img.png'

function Home() {
  return (
    <>
    <section id='home'>
    <div className='text-container'> 
        <h3> Hello,</h3>
        <h2> I'M Mahalakshmi</h2>
        <h4> Full stack Developer Fresher</h4>
        <button className='hire-btn btn'> Hire Me</button>
        <button className='down-cv btn '> Download CV</button>
    </div>
    <img  src={img} className='my-img' alt='...'/>
    </section>
    
    </>
  )
}

export default Home