import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import '../../index.css'

const Navbar = () => {
  return (
    <div className='navbar'>
    <nav>
        <div className='blobs'>
          <Link className="blob" to="/"><img src='/navbar/Home.png' alt='No Img' /><p>Home</p></Link>
          <Link className="blob" to="/Passions"><img src='/navbar/hob.png' alt='No Img' /><p>Passions</p></Link>
          <Link className="blob" to="/Projects"><img src='/navbar/pro.png' alt='No Img' /><p>Projects</p></Link>
          <Link className="blob" to="/Education"><img src='/navbar/edu.png' alt='No Img' /><p>Education</p></Link>
        </div>
      </nav>
      
    </div>
  )
}

export default Navbar;
