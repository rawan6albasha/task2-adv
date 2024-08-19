import React from 'react'
import style from './Contact.module.css'


import backgroundImg from '/src/assets/images/contact-bg.jpg'
import phone from '/src/assets/images/phone-icon.png'
import email from '/src/assets/images/email-icon.png'
const Contact = () => {
    return (
        <div className={style.contact}>
            <div className={style.background_div}>
                <img className={style.background_img} src={backgroundImg} />
            

            <div className={style.contact_absolute}>

                <div className={style.contact_title}>
                    <span className='main-span'>CONTACTUS</span>
                    <p className='main-p'>Get In Touch With Our Agents</p>
                </div>

                <div className={`${style.contact_frame} container section_margin `}>
                    <div className={style.map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45102.59623134312!2d11.55765867574764!3d45.047002236749876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f00bf7ae8bb97%3A0xeac9c73f3429a485!2zNDUwMjAgQ2FuZGEsINix2YHZiti62YjYjCDYpdmK2LfYp9mE2YrYpw!5e0!3m2!1sar!2srs!4v1723945375343!5m2!1sar!2srs"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                        <div className={style.contact_dets}>
                        <div className={style.contact_det}>
                            <img src={phone} />
                            <div><b>010-020-0340</b><p>Phone Number</p></div>
                        </div>
                        <div className={style.contact_det}>
                            <img src={email} />
                            <div><b>Info@villa.co</b><p>Business Email</p></div>
                        </div>
                        </div>
                    </div>

                    <form>
                        <div className={style.input}>
                            <label htmlFor="name" name="name"  >Full Name</label>
                            <input type='text' id="name" placeholder="Your Name..." />
                        </div>
                        <div className={style.input}>
                            <label htmlFor="email" name="email" >Email Address</label>
                            <input type="email" id="email" placeholder="Your E-mail..."/>
                        </div>
                        <div className={style.input}>
                            <label htmlFor="sub" name="sub" >Subject</label>
                            <input type='text' id="sub" placeholder="subject..."/>
                        </div>
                        <div className={style.input}>
                            <label htmlFor="mess" name="mess" >Message</label>
                            <textarea id="mess" rows="7" placeholder="Your Message"></textarea>

                        </div>
                        <button type="submit">Send Message</button>
                        
                    </form>
                </div>
        <p className={style.copy}>Copyright @ 2048 Villa Agency Co, Ltd. All rights reserved. Design: TemplateMo</p>
       
            </div>
            
            </div>
     </div>

    )
}

export default Contact
