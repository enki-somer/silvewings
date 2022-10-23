import "../OurServ/servdom.css"
import React from 'react'
import { IoIosArrowDown } from "react-icons/io"
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const ServDom = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    })
    return (
        <div className='serv-dom'>
            <h2 className='greet-serv' data-aos="fade-up" >خدماتنا</h2>

            <span className='scrol'><a href="#ourserv">Scroll <br /> <IoIosArrowDown /></a></span>

        </div>
    )
}

export default ServDom