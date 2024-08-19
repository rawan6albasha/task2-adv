import React from 'react'
import style from './Properties.module.css'
import Card from '../Card/Card'

const Properties = () => {
    return (
        <div className={`${style.properties} section_margin container`}>
            <div className={style.Properties_head}>
                <span className='main-span'>PROPERTIES</span>
                <p>WE Provide The Best Property You Like</p>
            </div>
            <Card />
        </div>
    )
}

export default Properties
