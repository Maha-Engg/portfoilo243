import React from 'react'
import img from './img.png'
import {Link} from 'react-scroll'



function Home() {
  return (
    <>
    <section id='home'>
    <div className='text-container'> 
        <h3> Hello,</h3>
        <h2> I'M Mahalakshmi</h2>
        <h4> Full stack Developer Fresher</h4>
        <Link to='cont' className='hire-btn btn'> Hire Me</Link>
       <a  href="./myresume.pdf" className='down-cv btn '> Download CV</a>
    </div>
    <img  src={img} className='my-img' alt='...'/>
    </section>
    
    </>
  )
}

export default Home