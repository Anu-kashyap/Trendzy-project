import React from 'react'
import './contact.css';
import Image from "./../../assets/contact.png";

const contact = () => {
    return (
        <>
            <p className='Contact-title'>Contact US</p>
            <form className='Contact'>
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
                        <input type="text" placeholder='Your Address' />
                    </div>
                    <div className="contact-inp">
                        <textarea cols="50" rows="5" placeholder='Your Message'></textarea>
                    </div>
                    <button>Submit</button>
                </div>
            </form>
        </>
    )
}

export default contact
