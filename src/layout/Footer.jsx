import "./Footer.css"
import LOGO from "../assets/fooodlogo.png"
import MOMENT from "../assets/MOMENT.jpg"
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function Footer() {
    return (
        <div className="Footer">

            {/* left */}
            <div className="Footer-left">
                <div className="logo-name">
                    <img src={LOGO} alt="Logofood" className="footer-logo" />
                    <h2 className="footer-lefttext">Food Park</h2>
                </div>
                <p className="footer-para">In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
                <div className="social-icons">
                    <a href="https://www.instagram.com/village_memories_/"> 
                        <div className="social-link">
                            <FaTwitter />
                        </div>
                    </a>
                    <a href="https://www.instagram.com/village_memories_/">
                        <div className="social-link">
                            <FaFacebook />
                        </div>
                    </a>
                    <a href="https://www.instagram.com/village_memories_/">
                        <div className="social-link">
                            <FaInstagram />
                        </div></a>
                    <a href="https://www.instagram.com/village_memories_/">
                        <div className="social-link">
                            <FaGithub />
                        </div>
                    </a>


                </div>
            </div>
            {/* middle */}
            <div className="Footer-middle">
                <div className="first">
                    <p>Page</p>
                    <ul className="page-list">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Menu</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className="second">
                    <p>Utility page</p>
                    <ul className="Utility-page">
                        <li>Start Here</li>
                        <li>Styleguide</li>
                        <li>password protected</li>
                        <li>404 not found</li>
                        <li>Licience</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            {/* right */}
            <div className="Footer-right">
                <p>Our Moment</p>
                <div className="photo">
                    <img src={MOMENT} alt="moment-photo" className="img" />
                </div>
            </div>
        </div>
    )
}
export default Footer;