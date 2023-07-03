import React,{useState} from 'react';
import './Navbar.css';

import {Link} from 'react-scroll';
const Navbar =()=>{
    const [nav,setNav]=useState(false);

    const changeBackground =()=>{
    if(window.scrollY >=50){
        setNav(true);
    }
    else{
        setNav(false);
    }

    }
    window.addEventListener('scroll',changeBackground);
return <>
   <nav className={nav ? "nav active" : "nav"}>
    <Link to='main' className='logo'   duration={1000}>
        <h4 className='logoname'> MAHA</h4>
    </Link>
   <input className='menu-btn' type='checkbox' id='menu-btn'/>
   <label className='menu-icon' htmlFor='menu-btn'>
    <span className='nav-icon'></span>
   </label>
   <ul className='menu'>
    <li><Link to='home'   duration={1000}>Home</Link></li>
    <li><Link to='about'   duration={1000} >About</Link></li>
    <li><Link to='educat'   duration={1000} >Eduction</Link></li>
    <li><Link to='pro'   duration={1000} >Project</Link></li>
    <li><Link to='cont'   duration={1000} >Contact</Link></li>
   </ul>
   
   </nav>


</>

}

export default Navbar;