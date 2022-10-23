import React from 'react'
import { useEffect } from 'react'
import "../Acommdation/acom.css"
import Data from './Data'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Acom = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    })
    return (
        <div id="acom">
            <div className="acommdation" >

                <div className="title" data-aos="fade-down">
                    <h1>Company History</h1>
                    <p>since the establishment of our company we worked with diffrent
                        companies in diffrent field and business</p>
                </div>


                {
                    Data.map(({ id, img, title1, title2, year }) => {
                        return (
                            <article className='container' key={id}>
                                <div className="year"><h1>{year}</h1></div>
                                <div className="art">
                                    <div className="logo">
                                        <img src={img} alt="" />
                                    </div>
                                    <div className="content-log">
                                        <span className='eng'>{title1}</span>
                                        <span className='arb'>
                                            <h1>تجهيز المواد الغذائية</h1>
                                            {title2}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        )
                    })
                }



            </div>
        </div>
    )
}
export default Acom