import { useNavigate } from "react-router-dom"
import "./Herosection.css"
function Herosection() {
    const navigate = useNavigate()
    return (
        <>
            <div className="Hero-div">
                <div className="hero-content">
                    <h1 className="Hero-heading">Delicious Food,<br /> Delivered Fresh</h1> 
                    <p className="Hero-para">Savor mouthwatering dishes crafted with the finest ingredients and served with exceptional care. Experience flavors that keep you coming back for more.</p>
                    <div className="Hero-btns">
                        <button className="book-btn" onClick={() => navigate("/booktable")}>Book A Table</button>
                        <button className="menu-btn" onClick={() => navigate("/our-menu")}>Explore Menu</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Herosection
