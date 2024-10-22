import React from "react";
import image1 from "../../../assets/volunteer.jpg";
import image2 from "../../../assets/volunteer-2.jpg";
import styles from "../Subcategory.module.css";

const Volunteer = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.imageGroup}>
        <div className={styles.mainImage}>
          <img
            src={image1}
            alt="Volunteers working together"
            style={{ width: "100%", height: "auto" }}
          />
          <div className={styles.tags}>
            <span className={styles.tag}>Fundraising</span>
            <span className={styles.tag}>Charity</span>
          </div>
        </div>

        <div className={styles.statsImage}>
          <div className={styles.statBox}>
            <p className={styles.statNumber}>50%</p>
            <p className={styles.statText}>more volunteers needed</p>
          </div>
          <div className={styles.secondaryImage}>
            <img
              src={image2}
              alt="Happy children together"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          Volunteer to build a better future for our world
        </h1>
        <p className={styles.description}>
          Your time and skills can change lives. Join us in delivering essential
          services, such as food distribution, medical support, and shelter, to
          those affected by disasters and crises. Volunteers are the heart of
          our mission, providing not just aid but also compassion and hope to
          communities in need. Whether it’s helping rebuild homes, offering
          emotional support, or lending expertise, every effort counts toward
          creating a brighter future for vulnerable individuals. Together, we
          can make a meaningful difference, one act of kindness at a time.
        </p>
        <button className={styles.learnMore}>Learn More</button>
      </div>
    </section>
  );
};

export default Volunteer;
