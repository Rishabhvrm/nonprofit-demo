import React from "react";

import image1 from "../../../assets/prog-children-1.jpg";
import image2 from "../../../assets/prog-children-2.jpg";

import styles from "../Subcategory.module.css";

const ProgramForChildren = () => {
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
            <p className={styles.statNumber}>x%</p>
            <p className={styles.statText}>
              of kids worldwide don't have education
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
        <h1 className={styles.title}>Programs For Children</h1>
        <p className={styles.description}>
          Our Programs for Children are designed to enrich the lives of young
          community members by offering a variety of educational and
          recreational activities. We believe that every child deserves a
          supportive space where they can explore their interests, develop new
          skills, and build lasting friendships. From after-school tutoring and
          homework help to arts and crafts, sports, and nature exploration, our
          programs cater to diverse interests and age groups. Our dedicated
          staff and volunteers are passionate about creating fun, engaging
          experiences that encourage children to express themselves and learn
          through play. In addition to regular activities, we host special
          events such as science fairs, talent shows, and holiday celebrations,
          providing children with opportunities to showcase their talents and
          celebrate their achievements. We also emphasize the importance of
          community and teamwork, helping kids learn valuable social skills and
          respect for others. Parents and guardians can get involved by
          enrolling their children in our programs or volunteering to assist
          with activities and events. Together, we can help shape the future of
          our community by nurturing the potential of our children today. Join
          us in making a positive impact on their lives!
        </p>
        <button className={styles.learnMore}>Learn More</button>
      </div>
    </section>
  );
};

export default ProgramForChildren;
