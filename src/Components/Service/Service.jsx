import React from 'react'
import "./Service.css"
import { RiExchangeFundsLine } from "react-icons/ri";
import { PiKeyReturnFill } from "react-icons/pi";
import { MdSupportAgent } from "react-icons/md";

const Service = () => {
    return (
        <>
            <div className='policy'>
                <div className="exchance-policy">
                    <RiExchangeFundsLine className='Service-icon' />
                    <h3>Easy Exchange Policy</h3>
                    <p>We offer hassle free exchange policy</p>
                </div>
                <div className="return-policy">
                    <PiKeyReturnFill className='Service-icon' />
                    <h3>7 Days Return Policy</h3>
                    <p>We provide 7 days free return policy</p>
                </div>
                <div className="customer-support">
                    <MdSupportAgent className='Service-icon' />
                    <h3>Best customer support</h3>
                    <p>we provide 24/7 customer support</p>
                </div>
            </div>
            <div className="subscribe">
                <h4>Join the Chlothzy Style Community</h4>
                <h2>Subscribe now & get 20% off</h2>
                <p>Chlothzy Fashion – Where Style Meets Confidence.</p>
                <div className="input-btn">
                    <input type="email" placeholder='Enter Your Email...' required/>
                    <button>Subscribe</button>
                </div>
            </div>
        </>
    )
}

export default Service
