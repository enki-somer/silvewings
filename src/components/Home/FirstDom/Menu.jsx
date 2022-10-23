import React, { useState } from 'react'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import "./menu.css"



const Menu = () => {


    const [bar_class, setBarClass] = useState("bars unclicked")
    const [menu, setMenu] = useState("menuHide")
    const [isClicked, setIsclicked] = useState(false)



    function navUpdated() {
        if (!isClicked) {
            setBarClass("bars clicked")
            setMenu("menuVisible")

        } else {
            setBarClass("bars unclicked")
            setMenu("menuHide")
        }
        setIsclicked(prev => !prev)

    }

    return (
        <div>
            <nav className='navBar' >
                <div className='iconBar' onClick={navUpdated}>
                    <div className={bar_class}></div>
                    <div className={bar_class}></div>
                    <div className={bar_class}></div>

                </div>
            </nav>
            <div className={menu} >
                <div className='but_warb'>

                </div>
                <ul>

                    <li><Link to="whoweare" target={"_blank"}>Who We Are</Link>  <div className='imag1'></div></li>



                    <li><Link to="ourservices" target={"_blank"}>Our Services</Link> <div className="imag2"></div></li>



                    <li><Link to="mission&visiion" target={"_blank"}>Mission & Vission</Link> <div className="imag3"></div></li>


                    <li><Link to="ourmanagment" target={"_blank"}>Our Managment</Link><div className="imag4"></div></li>

                    <li><Link to="contact" target={"_blank"}>Contact Us</Link><div className="imag4"></div></li>


                </ul>

                <p className='location'> Iraq, Baghdad - AL-Arasat

                    +9647713322336
                    +9647826377701

                    silverwings.supply@gmail.com</p>

                {/* <div className="icons">
                    <a href="#"><BsFacebook /></a>
                    <a href="#"><BsInstagram /></a>
                    <a href="#"><BsLinkedin /></a>
                </div> */}
            </div>
        </div >
    )
}

export default Menu