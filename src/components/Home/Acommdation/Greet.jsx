import React from 'react'
import { useEffect } from 'react'
import "../Acommdation/greet.css"
import bc from '../../assets/logo.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Greet = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    })
    return (
        <div id='greet'>
            <div className="explore" data-aos="fade-up">
                <h1>Company Profile</h1>
                <p>silver wings is a company that specialized in foodstuff supplying filed the comp any has been working has been in food supplying than      years
                    and has built a strong sales network througth supplying imported and local food items (fruits,vegetables,frozen and fresh meat , and frozen frish fish ,dry food and ,beverages) dependig on
                    providing the projects of the compaines in order to make thier missions easier .the company is also dealling with local sub-contracors and sub -distrbutors in various locations and filed
                    in order to encourage the developing of the iraqi economy .sliver wings has offerd the best quality of food items that are subject to the iraqi laws of health and the quality control laws
                    like all the companies ,silver wings seek to obtain more profits but silver wings seek to offer the best services and the best products to our customers in order to obtain their satisfaction
                    and their trust .in addition.silver wings continue the process of developing starting from concering in thr quality of the supplied foodstuff
                    silver wings expanded and added cleaning services to its activities . it started the cleaning services career in basmayah new city project which added a clean and good looking for the project
                    silver wings built a mall has super markets ,grocery and all other needs silver wings is distinguished in           iraqi crew</p>
                <a href="#">Food supply
                    and LTD. general services</a>
            </div>
            <div className="image">
                <img src={bc} alt="img" />
            </div>


        </div>
    )
}

export default Greet