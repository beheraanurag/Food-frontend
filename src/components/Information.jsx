import React from "react";
import "./Information.css";
import chefImage from "../assets/mobimg.webp"; // Replace with your image

function Information() {
  return (
    <section className="information-section">
      <div className="information-container">
        {/* Left Side */}
        <div className="information-content">
          <h1>
            A little information <br />
            for our valuable guest
          </h1>

          <p>
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>

          <div className="info-cards">
            <div className="info-card">
              <h2>3</h2>
              <span>Locations</span>
            </div>

            <div className="info-card">
              <h2>1995</h2>
              <span>Founded</span>
            </div>

            <div className="info-card">
              <h2>65+</h2>
              <span>Staff Members</span>
            </div>

            <div className="info-card">
              <h2>100%</h2>
              <span>Satisfied Customers</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="information-image">
          <img src={chefImage} alt="Food Preparation" />
        </div>
      </div>
    </section>
  );
}

export default Information;