import React from 'react';
import './Footer.css';

function FooterPage() {
    return (
        <div className='footer-container'>
            <ul className='footer-list'>
                <li><h2>About</h2></li>
                <li><p>Contact us</p></li>
                <li><p>About us</p></li>
                <li><p>Careers</p></li>
                <li><p>Gift Cards</p></li>
            </ul>
            <ul className='footer-list'>
                <li><h2>Help</h2></li>
                <li><p>Payments</p></li>
                <li><p>Shipping</p></li>
                <li><p>Cancellation & Returns</p></li>
                <li><p>FAQs</p></li>
            </ul>
            <ul className='footer-list'>
                <li><h2>Socials</h2></li>
                <li>
                    <a href="https://www.linkedin.com/in/vishalkumarddu/" rel="noreferrer" target="_blank">
                        <p>Linkedin</p>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/VishalKumarddu" rel="noreferrer" target="_blank">
                        <p>Github</p>
                    </a>
                </li>
                <li>
                    <a href="#" rel="noreferrer" target="_blank">
                        <p>Twitter</p>
                    </a>
                </li>
                <li>
                    <a href="#" rel="noreferrer" target="_blank">
                        <p>Instagram</p>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default FooterPage;
