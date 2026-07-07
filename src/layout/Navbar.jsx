import "./Navbar.css"
import Logo from "../assets/fooodlogo.png"
import { TiThMenu } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Navbar() {

    const [openMobile, setOpenmobile] = useState(false)
    function HideMobleMenu() {
        setOpenmobile(false)
    }
    const navigate = useNavigate()
    return (
        <>
            <header className="Navbar">
                {/* left div */}
                <Link to="/" className="nav-left" onClick={HideMobleMenu}>
                    <img src={Logo} alt="Food Park logo" className="foodlogo" />
                    <h1 className="heading">Food Park</h1>
                </Link>
                {/* middle div */}
                <div className="nav-middle">
                    <Link to="/">Home</Link>
                    <Link to="/About">About us</Link>
                    <Link to="/Service">Service</Link>
                    <Link to="/our-foods">Our Foods</Link>
                    <Link to="/Contact">Contact Us</Link>

                </div>
                {/* right div */}
                <div className="nav-right">
                    <button onClick={() => navigate("/booktable")} className="book-btn">Book your Order</button>
                    <button onClick={() => navigate("/login")} className="profile-btn" aria-label="Login">
                        <CgProfile size={28} />
                    </button>
                </div>
                {/* Menu icon */}
                <div className="menu-icon">
                    {openMobile ?
                        <RxCross1 size={25} onClick={() => setOpenmobile(!openMobile)} />
                        : <TiThMenu size={25} onClick={() => setOpenmobile(!openMobile)} />}
                    {/* Mobile menu view */}
                    {openMobile && (<div className="Mobile-menu">
                        <div className="mobile-menu-icon">
                            <Link onClick={HideMobleMenu} to="/">Home</Link>
                            <Link onClick={HideMobleMenu} to="/About">About us</Link>
                            <Link onClick={HideMobleMenu} to="/Service">Service</Link>
                            <Link onClick={HideMobleMenu} to="/Contact">Contact Us</Link>
                        </div>
                        <div className="Mobile-btn">
                            <button onClick={() => { navigate("/booktable"); HideMobleMenu(); }} className="book-btn">Book your Order</button>
                            <button onClick={() => { navigate("/login"); HideMobleMenu(); }} className="book-btnn">Login</button>

                        </div>
                    </div>
                    )}

                </div>
            </header>
        </>
    )
}
export default Navbar;
