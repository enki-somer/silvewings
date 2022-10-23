import React from 'react'
import "../Who/first.css"
import { IoIosArrowDown } from "react-icons/io"
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const FirstDom2 = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    })
    return (
        <div className='screen'>
            <h2 className='greet-who' data-aos="fade-up" >من نحن ؟</h2>

            <span className='scrol'><a href="#acom">Scroll <br /> <IoIosArrowDown /></a></span>

        </div>
    )
}

export default FirstDom2