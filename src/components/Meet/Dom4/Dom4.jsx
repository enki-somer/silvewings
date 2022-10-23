import React from 'react'
import "../Dom4/dom4.css"
import { IoIosArrowDown } from "react-icons/io"
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Dom4 = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    })

    return (
        <div className='meet-dom'>
            <h2 className='greet-mis' data-aos="fade-up" >Mission & Vission</h2>

            <span className='scrol'><a href="#mission">Scroll <br /> <IoIosArrowDown /></a></span>

        </div>
    )
}

export default Dom4