import React from "react";
// import styles from "../Subcategory.module.css";
import './DonationProgress.css';

const DonationProgress = () => {
  return (
    <div class="modal">
      <h1 class="modal__title">Donate Towards</h1>
      <p class="modal__text">
      Accessible Education / Health Care Outreach / Food Bank Initiatives
      </p>

      

      <p class="modal__text">
        Help us achive a goal of $XX,xxx.
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
export default DonationProgress;
