import React from 'react'
import "../FirstDom/navbar.css"
import Menu from './Menu';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/lw.png"


const NavBar = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    })
    return (
        <div>
            <Menu />
            <div className="list" data-aos="fade-up" >
                <ul>
                    <li><Link to='whoweare'>Who We Are</Link></li>
                    <li><Link to='ourmanagment'>Our Managment</Link></li>
                    <li><Link to='mission&visiion'>Mission & Vission</Link></li>
                    <li><Link to='ourservices'>Our Services</Link></li>
                    <li><Link to='contact'>Contact Us</Link></li>


                </ul>
                <div className='logo_warb'>
                    <Link to="/"><img src={Logo} alt="" /></Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar