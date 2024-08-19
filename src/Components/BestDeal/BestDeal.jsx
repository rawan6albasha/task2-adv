import React from 'react'
import style from './BestDeal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCalendar} from '@fortawesome/free-solid-svg-icons';

import property1 from '/src/assets/images/property-05.jpg'
const BestDeal = () => {
    return (
        <div className={`${style.best_deal} section_margin container`}>
            <div className={style.best_head}>
                <div className={style.best_title}>
                    <span className='main-span'>BEST DEAL</span>
                    <p>Find Your Best Deal Right Now!</p>
                </div>
                <div className={style.btns}>
                    <button className={style.btn}>Appartment</button>
                    <button className={style.btn}>Villa House</button>
                    <button className={style.btn}>Penthouse</button>
                </div>

            </div>
            <div className={style.best_body}>

                <div className={style.details}>
                    <div className={style.detail}><p>Total Falat Space</p><b>185 m2</b></div>
                    <hr />
                    <div className={style.detail}><p>Floor number</p><b>26th</b></div>
                    <hr />
                    <div className={style.detail}><p>Number of romes</p><b>4</b></div>
                    <hr />
                    <div className={style.detail}><p>Parking Available</p><b>Yes</b></div>
                    <hr />
                    <div className={style.detail}><p>Payment process</p><b>Bank</b></div>
                </div>
                <img src={property1} />
                <div className={style.pargh}>
                    <b>Extra Info About Property</b>
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipiscing olit do
                        eiusmod tempor pack incididunt ut
                        labore et dolore magna alique
                        quised ipsum suspendisse</p>

                    <p>Whon you need freo CSS tempiates
                        You cen simply type lemplateMo in
                        any search enginc websito. in
                        addition, you can Iype LemplaleMo
                        Portfolio, TemplateMo One Page
                        Layouts, elc</p>
                        <div className={style.schedule}>
                  <span><FontAwesomeIcon icon={faCalendar} /></span>
                  <p>Schedule a visit</p>
                </div>
                </div>

            </div>

        </div>
    )
}

export default BestDeal
