import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
<GiHamburgerMenu />

const Navbar = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(() =>{
    window.addEventListener('scroll', () =>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = () =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }


  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src="http://www.addu.edu.ph/wp-content/uploads/2015/05/AdDU-Seal-White-head32.png" alt="" className='logo' /></a>
        <ul className= {mobileMenu ? '' : 'hide-mobile-menu'}>
            <li className='line' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</li>
            <li className='line' onClick={() => window.scrollTo({ top: 720, behavior: "smooth" })}>Program</li>
            <li className='line' onClick={() => window.scrollTo({ top: 1200, behavior: "smooth" })}>About us</li>
            <li className='line' onClick={() => window.scrollTo({ top: 1770, behavior: "smooth" })}>Campus</li>
            <li className='line' onClick={() => window.scrollTo({ top: 2310, behavior: "smooth" })}>Testimonials</li>
            <li onClick={() => window.scrollTo({ top: 2960, behavior: "smooth" })}><button className='btn'>Contact us</button></li>
        </ul>
        <GiHamburgerMenu className='menu-icon' onClick={toggleMenu} />
    </nav>

    
  )
}

export default Navbar