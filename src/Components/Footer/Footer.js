import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer className="footer">
            <ul className="footer-link-list">
                <li className="footer-link-item"><a href={window.location}><img src="./Assets/Imgs/download_icon.svg" alt="download lookbook icon"/><span>Lookbook</span></a></li>
                <li className="footer-link-item"><a href={window.location}>Regulamin</a></li>
                <li className="footer-link-item"><Link to="/contact">Kontakt</Link></li>
            </ul>
            <ul className="footer-link-list">
                <li className="footer-link-item"><a href="https://facebook.com/"><img src={'./Assets/Imgs/social-media/fb-icon.svg'} alt="facebook icon"/></a></li>
                <li className="footer-link-item"><a href="https://twitter.com/"><img src="./Assets/Imgs/social-media/twitter-icon.svg" alt="twitter icon"/></a></li>
                <li className="footer-link-item"><a href="https://instagram.com/"><img src="./Assets/Imgs/social-media/insta-icon.svg" alt="instagram icon"/></a></li>
            </ul>
        </footer>
    )
}

export default Footer;