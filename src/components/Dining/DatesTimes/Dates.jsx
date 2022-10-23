import React from 'react'
import "../DatesTimes/dates.css"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Top from "../../assets/mang.jpg"

const Dates = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    })
    return (
        <div id='dates'>
            <div className="names">
                <h1>Our<br /><span className='blue'>Managment</span></h1>
                <h2>Mustafa Hasan</h2>
                <p>OWNER</p>
                <h2>Ali Hasan</h2>
                <p>CEO</p>
                <h2>Azad Hamerzom</h2>
                <p>CFO</p>
            </div>

            <div className="des">
                <img src={Top} alt="" />
            </div>
        </div>
    )
}

export default Dates