import React from 'react'
import gym from './gym.jpg'
import website from './website.jpg'
import length from './length.jpg'
import password from './password.jpg'
import char from './char.jpg'

function Project() {
  return (
    <>
    <div id='pro'>
    <div  className='proj'>
    <h1  className='card-title'> Project</h1>
    
        <div  className='project'>
            

    <div className="card" >
  <img src={gym} class="card-img-top" className='image' alt="..." />
  <div className="card-body">
    <h1 className="card-title">Gym website</h1>
    <p class="card-text">Responsive gym website using ( Bootstrap , React , Html , JavaScript )</p>
    <a href="https://elegant-praline-c2f088.netlify.app/" class="btn btn-primary">See my Project</a>
  </div>
</div>

<div className="card" >
  <img src={website} class="card-img-top" className='image' alt="..." />
  <div className="card-body">
    <h1 className="card-title">Company Website</h1>
    <p class="card-text"> Responsive company website using MERN stack</p>
    <a href="https://chimerical-druid-0196bf.netlify.app/" class="btn btn-primary">See my project</a>
  </div>
</div>

<div className="card" >
  <img src={length} class="card-img-top" className='image img' alt="..." />
  <div className="card-body">
    <h1 className="card-title">Length Converter</h1>
    <p class="card-text">We can convert Length from meter to feet , inches to centimeter , meter to centimeter 
 Whatever we can convert using the length converter using( React )</p>
    <a href="https://master--gilded-meringue-8a4a5d.netlify.app/" class="btn btn-primary">see my project</a>
  </div>
</div>


<div className="card" >
  <img src={password} class="card-img-top" className='image img' alt="..." />
  <div className="card-body">
    <h1 className="card-title">Password Generator</h1>
    <p class="card-text">password generator create random 8 letters like captcha using ( React )</p>
    <a href="https://master--zesty-sunshine-a0dec5.netlify.app/" class="btn btn-primary">see my project</a>
  </div>
</div>


<div className="card" >
  <img src={char} class="card-img-top" className='image img' alt="..." />
  <div className="card-body">
    <h1 className="card-title">Character Counter</h1>
    <p class="card-text">We can count how many letters type in the text area by using Real Time Character 
 Counter using( React )</p>
    <a href="https://main--lustrous-sorbet-1934d3.netlify.app/" class="btn btn-primary">see my project</a>
  </div>
</div>






 </div>
 </div>


 </div>
    
    </>
  )
}

export default Project