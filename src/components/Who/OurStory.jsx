import React from 'react'
import "../Who/ourstory.css"
import Im from "../assets/logo.png"

const OurStory = () => {
    return (
        <div id='story'>
            <div className="storyCard">
                <div className="storyImage">
                    <img src={Im} alt="image" />
                </div>
                <div className="storyList">
                    <h1>ملف الشركة</h1>
                    <h3>من نحن؟</h3>
                    <p>شركة الاجنحة الفضية هي شركة مختصة في مجال تجهيز المواد الغذائية حيث أنها كانت وما زالت تعمل في مجال تجهيز المواد الغذائية منذ اكثر من 9 اعوام
                        من خلال تجهيز المواد الغذائية المستوردة والمحلية , اعتمادا على تجهيز مشاريع الزبائن من شركات ومستثمرين , قدمت الشركة دعمها اللوجيستي الى هذه المشاريع وذالك لتسهيل مهامهم  وانجاز عملهم  باسرع وقت , تتعامل الشركة ايضًا مع مقاولين ثانويين محليين و مستوردين ثانويين في مختلف فروع مجال المواد الغذائية لتعزيز الجانب  الاقتصادي في بلدنا العراق , تقدم شركة الاجنحة الفضية اجود الانواع الاغذية العالمية والمحلية الخاضعة للقانون الصحي العراقي والسيطرة النوعية
                        ان شركة الاجنحة الفضية تبحث عن ارباح كالشركات البقية  لكنها تختلف عن الشركات الاخرى فهي تبحث عن تقديم افضل الخدمات و اجود انواع الطعام لزبائنها لكسب ثقتهم و رضاهم  , كما ان شركة الاجنحة الفضية لم تقصتر عملها في تجهيز المواد الغذائية بل طورت نفسها واضافة نشاط اخر يحتسب  لها حيث بدات مشوراها في خدمات التنظيف في مدينة بسماية والذي جعل من المدينة اجمل وانظف بجهود كوادر شركة الاجنحة الفضية العراقية
                        شيدت شركة الاجنحة الفضية مول واسع لتلبي جميع احتياجات سكنة المدينة حيث يحتوي على كل ما يتطلب المواطن العراقي
                        تتميز شركة الاجنحة الفضية عن باقي الشركات كونها ذات كادر عراقي 100% تشجيعا لليد العاملة  الوطنية</p>
                </div>

            </div>
        </div>
    )
}

export default OurStory