import React from 'react';
import './Banner.css';
import { FiArrowRight } from 'react-icons/fi';
import image4 from "../../assets/home-page.jpg";

export default function Banner () {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Giving <span className="highlight">Hope</span>, Creating Impact</h1>
        <p>
          Be a part of something great. We are dedicated to giving hope to those in need, creating a lasting impact.
        </p>
        <div className="cta-buttons">
          <button className="btn donate-btn">Donate Now <FiArrowRight /></button>
          <button className="btn learn-more-btn">Learn More</button>
        </div>
      </div>
      <img src={image4} alt="Community support" className="hero-image" />
      
    </section>
  );
};


