import React from 'react'
import "../FirstDom3/firstdom3.css"
import { IoIosArrowDown } from "react-icons/io"
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const FirstDom3 = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    })
    return (
        <div className='dining'>
            <h2 className='greet-din' data-aos="fade-up" >Managments</h2>

            <span className='scrol'><a href="#dates">Scroll <br /> <IoIosArrowDown /></a></span>

        </div>
    )
}

export default FirstDom3