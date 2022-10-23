import React from 'react'
import { useEffect } from 'react';
import '../FirstDom/firstdom.css'
import ved from '../../assets/trans2.mp4'
import { IoIosArrowDown } from "react-icons/io"
import Aos from 'aos'
import 'aos/dist/aos.css'


const FirstDom = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    })

    return (
        <div className='all' >
            <nav>

                <video autoPlay muted loop className='bgv' >
                    <source src={ved} typeof='video/mp4'></source>
                </video>
                <h2 className='greet' data-aos="fade-up" >Welcome to the <p> Silver Wings Company</p></h2>

                <span className='scrol'><a href="#greet">Scroll <br /> <IoIosArrowDown /></a></span>

            </nav>


        </div>
    )
}

export default FirstDom