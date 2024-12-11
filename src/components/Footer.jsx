import { Link } from "react-router-dom";
import LogoFans from '../assets/Images/fanslogo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter, faYoutube, faSnapchat, faSquareSnapchat } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer-main">
            <div className="footer">
                <div className="logo-footer">
                    <a href="/">
                        <img id="logohome" src={LogoFans} alt="logo-footer" />
                    </a>
                    <div className="social-networks">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} className="icon__footer--user" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="icon__footer--user" />
                        </a>
                        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faXTwitter} className="icon__footer--user" />
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} className="icon__footer--user" />
                        </a>
                        <a href="https://www.snapchat.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSnapchat} className="icon__footer--user" />
                        </a>
                    </div>
                </div>

                <div className="links">
                    <div className="footer-links">
                        <Link data-item="About Us" to="/about">About Us</Link>
                        <Link data-item="Download" to="/download">Download</Link>
                        <Link data-item="Subscribers" to="/subscribers">Subscribers</Link>
                        <Link data-item="News" to="/news">News</Link>
                    </div>
                </div>

                <div className="frame-selectors">
                    <div className="select-footer">
                        <box-icon name="dollar-circle" color="#fff"></box-icon>
                        <select name="Cash" id="cash-selector" defaultValue={'value1'}>
                            <option value="value1">USD</option>
                            <option value="value2">MXN</option>
                            <option value="value3">€</option>
                        </select>
                    </div>

                    <div className="select-footer">
                        <box-icon name="world" color="#fff"></box-icon>
                        <select name="Lenguaje" id="language-selector" defaultValue={'value1'}>
                            <option value="value1"> English</option>
                            <option value="value2">Spanish</option>
                            <option value="value3">Portuguese</option>
                            <option value="value4">French</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="terms">
                <p className="p-footer">
                    ALL TRADEMARKS, TRADE NAMES, IMAGES OR LOGOS MENTIONED OR USED ARE THE PROPERTY OF THEIR RESPECTIVE
                    OWNERS.
                    <br />
                    ©2018 – 2025 PageantFans LLC.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
