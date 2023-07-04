import React from 'react'
import img from './img.png'

function About() {
  return (
    <>
    <div id='about'>

<div   className='about-container'>
     <img  src={img} className='img1' alt='...'/>
    
     <p>
       <h3> ABOUT</h3>
                 I'm a quick learner who thrives in fast-paced environments. With my highly organized and detail-oriented approach, I'm able to manage multiple tasks and deadlines simultaneously. Whether it's in a team or working independently, <br/><br/>I'm dedicated to delivering high-quality work and exceeding expectations.
                  <br/><br/>I'm always looking for new challenges and opportunities to grow both personally and professionally.
            

             <br/><br/><br/>
                 in my free time - i enjoy playing games, speaking with friends which have helped me maintain a good work-life balance.<br/>
                 and keep me motivated both inside and outside of work.


                 <button className=' hire-btn btn'> Hire me</button>
             <button className=' down-cv btn'> Download cv</button>
             </p>
              </div>
    

              </div>
    </>
  )
}

export default About