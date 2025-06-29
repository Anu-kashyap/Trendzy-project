import React from 'react'
import './contact.css';
import Image from "./../../assets/contact.png";

const contact = () => {
    return (
        <>
            <p className='Contact-title'>Contact US</p>
            <div className='Contact'>
                <div className="contact-image"></div>
                <div className="Contact-form">
                    <p>Get in touch</p>
                    <div className="contact-inp">
                        <input type="text" placeholder='Your Name' />
                    </div>
                    <div className="contact-inp">
                        <input type="email" placeholder='Your Email' />
                    </div>
                    <div className="contact-inp">
                        <input type="password" placeholder='Your Password' />
                    </div>
                    <div className="contact-inp">
                        <textarea cols="60" rows="5" placeholder='Your Message'></textarea>
                    </div>
                    <button>Submit</button>
                </div>
            </div>
        </>
    )
}

export default contact
