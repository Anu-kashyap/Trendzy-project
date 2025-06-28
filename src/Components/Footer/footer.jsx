import React from 'react'
import './footer.css'

const footer = () => {
    return (
        <footer>
            <div className='footer-section'>
                <div className="footer-logo">
                    <h1>TRENDZY</h1>
                    <p>Chlothzy Fashion brings bold elegance to your wardrobe. From bodycon dresses to chic essentials, we redefine style. Perfect fits, premium fabrics — confidence in every thread. Step into the spotlight with Chlothzy — where fashion speaks.</p>
                </div>
                <div className="footer-content-first">
                    <h3>COMPANY</h3>
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">DELIVERY</a></li>
                        <li><a href="#">PRIVACY POLICY</a></li>
                    </ul>
                </div>
                <div className="footer-content-second">
                    <h3>GET IN TOUCH</h3>
                    <ul>
                        <li>PHONE: xxxxxxxxxx</li>
                        <li>EMAIL: trendzy@gmail.com</li>
                    </ul>
                    <h3>ADDRESS</h3>
                    <p>Unit-113, Malabar Hill</p>
                    <p>Maharashtra - 400006</p>
                </div>
            </div>
            <hr />
            <div className="copyright">
                <p>Copyright 2025@ trendzy.shop - All Rights Reserved.</p>
                <p>Follow us on Instagram for daily style inspo</p>
            </div>
        </footer>
    )
}

export default footer
