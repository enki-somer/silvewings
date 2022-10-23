import "../Contact/formc.css"
import React from 'react'
import { ImLocation } from "react-icons/im"
import { AiFillPhone } from "react-icons/ai"
import { HiMail } from "react-icons/hi"

const FormC = () => {
    return (
        <div className="formc">
            <div className="pup">
                <div className="loc-eng">
                    <h2>
                        <ImLocation />  Iraq, Baghdad - AL-Arasat
                        <br /><AiFillPhone /> +9647713322336
                        <br /> <AiFillPhone /> +9647826377701
                        <br /><HiMail /> silverwings.supply@gmail.com
                    </h2>
                </div>
                <div className="loc-ar">
                    <h2>
                        العراق , بغداد - العرصات<ImLocation />
                        <br /> +9647713322336 <AiFillPhone />
                        <br />  +9647826377701 <AiFillPhone />

                    </h2>
                </div>
            </div>
        </div >
    )
}

export default FormC