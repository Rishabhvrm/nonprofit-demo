import React from "react";
import styles from "../Subcategory.module.css";
import './BannerButton.css';

const Donate = () => {
  return (
    <div class="modal">
      <h1 class="modal__title">Make a Difference Today</h1>
      <p class="modal__text">
        Your generous contribution helps us empower our community through
        educational programs, workshops, and outreach initiatives. Every
        donation, big or small, directly impacts the lives of those we serve.
      </p>

      <ul class="modal__list">
        <li>Provide essential resources to families in need</li>
        <li>Offer free classes and skill-building programs</li>
        <li>Foster a safe space for youth activities</li>
      </ul>

      <p class="modal__text">
        Thank you for being a part of this journey. With your help, we can
        continue building a stronger, more connected community.
      </p>

      <p class="modal__support">
        <strong>Your support matters.</strong>
      </p>

      <div class="modal__contact">
        <h2>Contact</h2>
        <p>Phone: +1 123-456-7890</p>
        <p>
          Email:{" "}
          <a href="mailto:contact@nonprofit.org">contact@nonprofit.org</a>
        </p>
      </div>
    </div>
  );
};
export default Donate;
