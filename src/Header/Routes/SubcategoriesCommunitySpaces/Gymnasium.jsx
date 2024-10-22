import React from "react";

import image1 from "../../../assets/gymnasium-1.jpg";
import image2 from "../../../assets/gymnasium-2.jpg";

import styles from "../Subcategory.module.css";

const Gymnasium = () => {
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
            <p className={styles.statNumber}>50</p>
            <p className={styles.statText}>
              people use our gymnasium daily
            </p>
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
        <h1 className={styles.title}>Gymnasium</h1>
        <p className={styles.description}>
          Our Gymnasium is more than just a place to work out; it's a community
          hub where individuals of all ages can come together to promote health
          and wellness. We offer a wide range of activities, including open gym
          sessions, organized sports leagues, and fitness classes designed to
          cater to various interests and skill levels. In addition to
          traditional gym activities, we host wellness programs that emphasize
          the importance of physical and mental health. From yoga and Zumba to
          basketball and volleyball, there’s an activity for everyone to enjoy.
          Our experienced instructors and coaches are dedicated to helping
          participants improve their skills, build confidence, and foster a
          sense of camaraderie. The gym also serves as a venue for community
          events, workshops, and health fairs, promoting an active lifestyle and
          encouraging positive habits. We believe that physical activity is
          vital for overall well-being, and our facilities are designed to make
          fitness accessible and enjoyable for everyone. Join us by signing up
          for a class, participating in a league, or simply coming in for a
          workout. Together, we can build a healthier, more active community
          where everyone has the opportunity to thrive. Whether you’re a
          seasoned athlete or just starting your fitness journey, our Gymnasium
          welcomes you with open arms!
        </p>
        <button className={styles.learnMore}>Learn More</button>
      </div>
    </section>
  );
};

export default Gymnasium;
