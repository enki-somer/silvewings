import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import Logo from "../assets/lw.png"
import { HiOutlineArrowNarrowUp } from 'react-icons/hi'
import './footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div>
            <footer>
                <div className="grid">
                    <div className="foterList">
                        <ul>
                            <li><Link to="whoweare" target={"_blank"} >Who We Are</Link></li>
                            <li> <Link to="ourmanagment" target={"_blank"}>Our Managments</Link></li>
                            <li><Link to="mission&vission" target={"_blank"}>Mission & Vision</Link></li>
                            <li><Link to="ourservices" target={"_blank"}>Our Services</Link></li>
                            <li><Link to="contact" target={"_blank"}>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="adress">
                        <p> Iraq, Baghdad - AL-Arasat</p>
                        <p>  +9647713322336<br />
                            +9647826377701</p>
                        <p>silverwings.supply@gmail.com</p>
                        {/* <div className="social">
                            <a href="#"><BsFacebook /></a>
                            <a href="#"><BsInstagram /></a>
                            <a href="#"><BsLinkedin /></a>
                        </div> */}

                    </div>
                    <div className="ic">
                        <img src={Logo} alt="" />
                    </div>
                </div>
                <div className="copy">
                    <h4>&copy; 2022 SilverWings Company</h4>

                </div>
                <div className="clickUp" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
                    <HiOutlineArrowNarrowUp className='upArrow' />
                </div>
            </footer>
        </div>
    )
}

export default Footer