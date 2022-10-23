import "../OurServ/ourserv.css"
import React from 'react'
import DataServ from "../OurServ/Dataserv"


const Ourserv = () => {
    return (
        <div id="ourserv">
            <div className="serv-title">
                <h1>خدماتنا</h1>
                <h4>ان مهمتنا في تجارة الغذاء هي التفن بالذوق هي التفنن بالذوق  وكذالك تجهيز مواد غذائية متعددة مختلفة لتطابق متطلبات وذوق الزبون نحن مختصون في مساعدة الزبون على اكتشاف انواع جديدة من المنتجات والاذواق من خلال عرض  احدث المنتجات المطروقة في السوق</h4>
            </div>
            <div className="serv-cards">
                {DataServ.map(({ id, tit1, tit2, logo }) => {
                    return (
                        <div className="grids" key={id}>
                            <div className="grid-card">
                                <h4>{tit1}</h4>
                                <h3>{tit2}</h3>
                                <div className="grid-logo">
                                    <img src={logo} alt="" />
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Ourserv