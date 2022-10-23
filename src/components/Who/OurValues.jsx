import React from 'react'
import { useState } from 'react'
import "../Who/ourvalues.css"
import Va from "../assets/value.jpg"

const OurValues = () => {
    const [isActive, setIsActive] = useState(false)
    const [content, setContent] = useState("")


    function clickHandle1() {
        if (!isActive) {
            setContent("Humble and authentic in what we stand for, how we act and the way we embody the spirit of the watchmakers.")

        } else {
            setContent("")
        }

    }
    function clickHandle2() {
        if (!isActive) {
            setContent("We break down the boundaries between Nature and Architecture, creating a space of harmony.")
        } else {
            setContent("")
        }

    }
    function clickHandle3() {
        if (!isActive) {
            setContent("Our spirit of innovation is inspired by our watchmaking roots and extends to our architecture and overall Guest experience.")
        } else {
            setContent("")
        }

    }
    function clickHandle4() {
        if (!isActive) {
            setContent("Time restrictions are replaced with the liberating feeling of making time for yourself and connecting with nature.")
        } else {
            setContent("")
        }

    }
    return (
        <div className='values'>


            <div className="table">
                <div className="vTitle">
                    <h1>Our Value</h1>
                </div>
                <div className="vlist">
                    <ul>
                        <li onClick={clickHandle1}>Authenticity</li>
                        <li onClick={clickHandle2}>Harmony</li>
                        <li onClick={clickHandle3}>Ingenuity</li>
                        <li onClick={clickHandle4}>Liberation</li>
                    </ul>

                </div>

                <div className='content'>
                    {content}
                </div>
            </div>

            <div className="vImage">
                <img src={Va} alt="valey" />
            </div>

        </div>
    )
}

export default OurValues