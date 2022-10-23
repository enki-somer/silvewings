import React from 'react'
import "../Who/services.css"
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Ach from "../assets/Asset 1.png"
import Ach2 from "../assets/Asset 2.png"
import Ach3 from "../assets/Asset 3.png"



const Serviecs = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    })

    return (
        <div className='serv'>
            <div className="servTitle">
                <h1>ACHIEVMENTS</h1>
            </div>
            <div className="achev" >
                <h2 data-aos="fade-right">in modern business in every industry quality comes first we a reliable prestigious company have always tried to reach in high level of standards we a team have always made huge efforts towards increasing our company quality in every sector such as food supply and cleaning services and so on our priority is to satisfy our clients and this is our main achievements all of time</h2>
                <img src={Ach} alt="" data-aos="fade-left" />
            </div>

            <div className="arabic-ach" >
                <h3>في مجال العمل حيث وباي مجال عمل كان الجودة تاتي اولا نحن نعتمد اسلوب خاص بالشركة ودائما نحاول ان نرتقي الى اعلى المستويات لنجعل شركتنا موازية المعايير العالمية للشركات نحن كفريق دائما نضع جهودنا اتجاه تطوير عمل الشركة في جميع الاختصاصات مثل تجهيز المواد الغذائية وخدمات التنظيف وغيرها ان من اولويات الشركة هو ارضاء عملائنا وهذا هو انجازنا داذما وابدا</h3>
                <img src={Ach2} alt="" className='img1' />
                <img src={Ach3} alt="" className='img2' />
            </div>


        </div>

    )
}

export default Serviecs