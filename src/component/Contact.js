import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import { BsEnvelope, BsPhoneFlip,BsLinkedin } from "react-icons/bs";

function Contact() {
  return (
    <>

    <div id='cont'>
   
<div  className='footer'>

<div className='form' >
    <h1> Contact</h1>
        <h3 > Get in Touch</h3> 
        <div className="row">
  <div className="col">
    <input type="text" className="form-control" placeholder="FullName" 
     aria-label="FullName"/>
  </div>
  <div className="col">
    <input type="number" className="form-control" placeholder="Phone no" 
     aria-label="Phone no"/>
  </div>
</div><div className="row">
  <div className="col">
    <input type="email" className="form-control" placeholder="Email" name="email"
    aria-label="mail"/>
  </div>
  <div className="col">
    <input type="text" className="form-control" placeholder="Company" 
     aria-label="Company"/>
  </div>
  <div className="row" >
    <textarea type="text" className="form-control" placeholder="Message" 
     aria-label="message"/> 
  </div>
  <div className="row" >
   <button className="submit"> Submit </button>
   
   </div>
</div>

    </div>


   <div className='foot'>
   <h1> Contact me</h1>
   <div>
    <div>
        <h6> <CiLocationOn className='icon'/>  Location</h6>
        <p> Sriperumbudur
            <br/> Kanchipuram
        </p>
    </div>
    </div>
    

    <div>
        <div>
            <h6> <BsEnvelope className='icon'/>  Email</h6>
            <p>mahacm98@gmail.com</p>
        </div>
    </div>

    <div>
        <div>
            <h6> <BsPhoneFlip className='icon'/>  Call</h6>
            <p>6385658025</p>
        </div>
    </div>

    <div>
        <div>
             <a href=' https://www.linkedin.com/in/mahacm' ><BsLinkedin className='icon'/> Linkedin</a>
            
        </div>
    </div>

    <div>
        <div>
             <a href=' https://www.linkedin.com/in/mahacm' ><AiFillGithub className='icon'/> Github</a>
            
        </div>
    </div>

  </div>






  

    </div>

    </div>
    
    
    
    </>
  )
}

export default Contact