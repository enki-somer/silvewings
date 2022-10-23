import React from 'react'
import './rest.css'
import { useEffect } from 'react'
import Logo from "../assets/eco.svg"
import Blog from "../assets/logo.png"
import Aos from 'aos'
import 'aos/dist/aos.css'

const Resturant = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    })
    return (
        <div className='rest'>

        </div>
    )
}

export default Resturant