import React from 'react'
import "./Fastestfood.css"
import IMG from "../assets/foodroll.png"

function Fastestfood() {
    return (
        <div className='Fastest-food-main'>
            <div className='left'>
                <img src={IMG} alt="Fast-food" />
            </div>

            <div className='right'>
                <h1 className='Head'>Fastest Food <br /> Delivery in City</h1>
                <p>Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </p>

                <div className='info-div'>
                    {/* <div className='point-div'>
                        <p>Delivery within 30 minutes</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Fastestfood
