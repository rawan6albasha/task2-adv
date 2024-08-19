import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {faPlay } from '@fortawesome/free-solid-svg-icons';
import style from './VideoView.module.css'


import backgroundImg from '/src/assets/images/img.jpg'
import video_img from '/src/assets/images/video-frame.jpg'

const VideoView = () => {
  return (
    <div className={`${style.video_view}  section_margin `}>
    <div className={style.video_part}>
      <img className={style.background_img} src={backgroundImg}/>
      <div className={style.video_absolute}>

      <div className={style.video_title}>
        <span className='main-span'>VIDEO VIEW</span>
        <p className='main-p'>Get Closer View & Different Feeling</p>
      </div>
      
      <div className={`${ style.video_frame } container`}>
        <img className={style.video_img} src={video_img}/>
        <span><FontAwesomeIcon icon={faPlay} /></span>
      </div>

      </div>
      </div>
{/*_____________________________________________________________ */}
      <div className={`${ style.counters } container`}>
      <div className={style.counter}><p className={style.counter_num}>34</p><p className={style.counter_title}>Buildings Finished Now</p> <span></span></div>
      <div className={style.counter}><p className={style.counter_num}>12</p><p className={style.counter_title}>Years Experience</p> <span></span></div>
      <div className={style.counter}><p className={style.counter_num}>24</p><p className={style.counter_title}>Awwards Won 2023</p> <span></span></div>
      
      </div>
    </div>
  )
}

export default VideoView
