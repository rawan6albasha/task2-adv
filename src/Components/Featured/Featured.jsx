import React from 'react'
import style from './Featured.module.css'


import featured_img from '/src/assets/images/featured.jpg'
import featured_icon from '/src/assets/images/featured-icon.png'
import info1 from '/src/assets/images/info-icon-01.png'
import info2 from '/src/assets/images/info-icon-02.png'
import info3 from '/src/assets/images/info-icon-03.png'
import info4 from '/src/assets/images/info-icon-04.png'
const Featured = () => {
    return (
        <div className={`${style.featured} container section_margin `}>
            <div className={style.part1}>
                <img src={featured_img} className={style.img_part1} />
                <span><img src={featured_icon} /></span>
            </div>


            <div className={`${style.part2} ${style.display_flex_col}`}>
                <span className="main-span">FEATURED</span>

                <p className={`${style.title_featured} main-p`}>
                    Best Appartment & Sea View
                </p>

                <div className={style.featured_card}>
                    <span className={`${style.featured_span2} ${style.padding_left}`} >Best useful links?</span>
                    <hr />
                    <p className={ style.padding_left}>Get <strong>the best villa </strong>website template in HTML CSS
                        and Bootstrap for your business. TemplateMo
                        provides you the<a href='#'> best free CSS templates </a>in the
                        world. Please tell your friends about it.</p>
                    <div className={style.featured_q }>
                        <h4 className={style.padding_left}>How does this work ?</h4>
                        <hr className={style.hr_padd} />
                        <h4 className={style.padding_left}>Why is Villa Agency the best ?</h4>
                    </div>
                </div>


            </div>

<div className={style.part3}>
            <div className={style.display_flex_col}>
                <div className={`${style.space} ${style.display_flex_row}`}>
                    <img src={info1} /> <div><b>250 m2</b> <p>Total Flat space</p></div>
                </div>
                <hr/>
                <div className={`${style.contract} ${style.display_flex_row}`}>
                    <img src={info2} /> <div><b>Contract</b> <p>Contract Ready</p></div>
                </div>
                <hr/>
                <div className={`${style.payment} ${style.display_flex_row}`}>
                <div> 
                   <img src={info3} />
                   <p>Process</p>
                   </div> <div><b>Payment</b> <p>Payment</p></div>
                </div>
                <hr/>
                <div className={`${style.safety} ${style.display_flex_row}`}>
                   <div> 
                   <img src={info4} />
                   <p>Control</p>
                   </div>
                    <div><b>Safety</b> <p>24/7 Under</p></div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Featured
