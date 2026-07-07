import React from 'react'
import "./WeProvide.css"
import ROLL from "../assets/foodroll.png";
const WeProvide = () => {
    return (
        <div className='weprovide-main'>
            <div className='left'>
                <img src={ROLL} alt="roll-img" className='roll-image' />
            </div>
            <div className='right'>
                <p className='heading'>We provide healthy <br/> food for your family.</p>
                <p className='f-para'>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
                <p className='f-para'>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>

                <button className='more-about-btn'>More About us</button>
            </div>

        </div>
    )
}

export default WeProvide
