import "./WhatOurCustomer.css"
import Profile from "../assets/profile.png"
const WhatOurCustomer = () => {
  return (
    <div className="WhatOurCustomer-main">
      <h2 className="heading">What Our Customers Say</h2>
      <div className="Card-main">
        {/* 1st Card  */}
        <div className="Card">
          <h3 className="Card-heading">“The best restaurant”</h3>
          <p className="Card-para">Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p>

          <div className="Profile-div">
            <div className="image-div">
              <img className="Image" src={Profile} alt="Profile" />
            </div>
            <div className="details">
              <p className="name">Sophire Robson</p>
              <p className="deg">Los Angeles, CA</p>
            </div>
          </div>
        </div>
        {/* 2nd Card */}
        <div className="Card">
          <h3 className="Card-heading">“The best restaurant”</h3>
          <p className="Card-para">Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p>

          <div className="Profile-div">
            <div className="image-div">
              <img className="Image" src={Profile} alt="Profile" />
            </div>
            <div className="details">
              <p className="name">Sophire Robson</p>
              <p className="deg">Los Angeles, CA</p>
            </div>
          </div>
        </div>
        {/* 3rd Card */}
        <div className="Card">
          <h3 className="Card-heading">“The best restaurant”</h3>
          <p className="Card-para">Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p>

          <div className="Profile-div">
            <div className="image-div">
              <img className="Image" src={Profile} alt="Profile" />
            </div>
            <div className="details">
              <p className="name">Sophire Robson</p>
              <p className="deg">Los Angeles, CA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatOurCustomer