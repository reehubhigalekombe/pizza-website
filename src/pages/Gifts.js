import React from "react";
import "../styles/gifts.css"; // Import your CSS file

function Gifts() {
  return (
    <div className="top-container">
      {/* Background Video */}
      <video className="background-video" autoPlay loop muted>
        <source src="/assets/higal.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="content-overlay">
        <h1>Welcome to HiGAl Pizza Inn Co.</h1>
        <p>Fresh Ingredients, Friendly Service, Kenyan Owned.</p>
        <button>Explore More</button>
      </div>
    </div>
  );
}

export default Gifts;
