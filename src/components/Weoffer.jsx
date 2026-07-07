import React from 'react'
import "./Weoffer.css"
import IMG from "../assets/catering.png"
import IMG1 from "../assets/birthdays.png"
import IMG2 from "../assets/weding.png"
import IMG3 from "../assets/event.jpg"


function Weoffer() {
    return (
        <div className='We-offer-main'>
            <h1 className='heading'>We also offer unique <br /> services for your events</h1>

            <div className='Card-div'>
                <div className='Card'>
                    <div className='img-div'>
                        <img src={IMG} alt="food-imgg" className='imgae' />
                        <p className='Tittle'>Caterings</p>
                        <p>In the new era of technology we look in the future with certainty for life.</p>
                    </div>
                </div>
                <div className='Card'>
                    <div className='img-div'>
                        <img src={IMG1} alt="food-imgg" className='imgae' />
                        <p className='Tittle'>Birthdays</p>
                        <p>In the new era of technology we look in the future with certainty for life.</p>
                    </div>
                </div>

                <div className='Card'>
                    <div className='img-div'>
                        <img src={IMG2} alt="food-imgg" className='imgae' />
                        <p className='Tittle'>Weddings</p>
                        <p>In the new era of technology we look in the future with certainty for life.</p>
                    </div>
                </div>

                <div className='Card'>
                    <div className='img-div'>
                        <img src={IMG3} alt="food-imgg" className='imgae' />
                        <p className='Tittle'>Event</p>
                        <p>In the new era of technology we look in the future with certainty for life.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Weoffer
