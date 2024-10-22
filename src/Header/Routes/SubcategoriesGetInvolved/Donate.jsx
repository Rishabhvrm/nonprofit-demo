import React from "react";
import image1 from "../../../assets/books-1.jpg";
import image2 from "../../../assets/clothes.jpg";
import styles from "../Subcategory.module.css";

const Donate = () => {
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
        <h1 className={styles.title}>Donate Books and Clothes</h1>
        <p className={styles.description}>
          Every donation of books or clothes has the power to transform lives.
          By sharing educational resources, you help open new doors of learning
          and opportunity for children and adults in underserved communities.
          Books can inspire, teach, and empower individuals, breaking the cycle
          of poverty through knowledge and skill development. Clothing donations
          provide more than just warmth and comfort—they restore dignity and
          hope for those facing financial hardship, homelessness, or natural
          disasters. Whether it’s school supplies, professional attire, or
          everyday essentials, your contribution supports people in building a
          better future. Together, we can ensure that education and basic
          necessities reach those who need them the most, creating stronger,
          more resilient communities worldwide.
        </p>
        <button className={styles.learnMore}>Learn More</button>
      </div>
    </section>
  );
};

export default Donate;
