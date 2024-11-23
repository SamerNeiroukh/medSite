import React from "react";
import "../styles/HomePage.css";
import homepageImage from "../assets/homepage-image.jpg"; // Import the image

function HomePage() {
  return (
    <div className="page-container">
      <div className="home-content">
        <h1 className="home-title">דף הבית</h1>
        <p className="home-text">
          ברוכים הבאים לאתר שלנו! כאן תוכלו ללמוד על קורסי עזרה ראשונה ולהירשם.
        </p>
        <p className="home-text">
          שימו לב לקטגוריות שונות של קורסים בעמוד הקורסים שלנו.
        </p>
        <img
          src={homepageImage} // Use the imported image
          alt="First Aid Illustration"
          className="home-image"
        />
      </div>
    </div>
  );
}

export default HomePage;
