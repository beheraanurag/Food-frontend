import React from 'react'
import Tea from "../assets/tea.png"
import "./BrowserMenu.css";
const BrowserMenu = () => {
    return (
        <div className='Browser-Menu-div'>
            <h1 className='Heading '> Browse Our Menu</h1>
            {/* 1st card */}
            <div className='card-div'>
                <div className='card'>
                    <div className='round'>
                        <img src={Tea} alt="tea-png" />
                    </div>
                    <h1 className='card-head'>Breakfast</h1>
                    <p className='card-para'>In the new era of technology we look in the future with certainty and pride for our life.</p>
                    <button className='card-btn'>Explore Menu</button>
                </div>
                {/*  2nd card*/}
                <div className='card'>
                    <div className='round'>
                        <img src={Tea} alt="tea-png" />
                    </div>
                    <h1 className='card-head'>Main Dishes</h1>
                    <p className='card-para'>In the new era of technology we look in the future with certainty and pride for our life.</p>
                    <button className='card-btn'>Explore Menu</button>
                </div>
                {/*  3nd card*/}
                <div className='card'>
                    <div className='round'>
                        <img src={Tea} alt="tea-png" />
                    </div>
                    <h1 className='card-head'>Drinks</h1>
                    <p className='card-para'>In the new era of technology we look in the future with certainty and pride for our life.</p>
                    <button className='card-btn'>Explore Menu</button>
                </div>
                {/*  4nd card*/}
                <div className='card'>
                    <div className='round'>
                        <img src={Tea} alt="tea-png" />
                    </div>
                    <h1 className='card-head'>Desserts</h1>
                    <p className='card-para'>In the new era of technology we look in the future with certainty and pride for our life.</p>
                    <button className='card-btn'>Explore Menu</button>
                </div>
            </div>

        </div>
    )
}

export default BrowserMenu
