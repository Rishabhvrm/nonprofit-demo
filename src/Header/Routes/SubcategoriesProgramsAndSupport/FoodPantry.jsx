import React from "react";
import image1 from "../../../assets/food-pantry.jpg";
import image2 from "../../../assets/food-pantry-2.jpg";
import styles from "../Subcategory.module.css";

const FoodPantry = () => {
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
              people received food donations last month
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
        <h1 className={styles.title}>
          Donation for the better of our future world
        </h1>
        <p className={styles.description}>
          The Food Pantry Program plays a vital role in supporting our community
          by ensuring that individuals and families have access to nutritious
          food. Each week, we distribute fresh produce, canned goods, and
          essential pantry items to those facing food insecurity. Our goal is
          not only to alleviate hunger but also to promote health and well-being
          for all residents. In addition to providing food, our program fosters
          a sense of community by creating opportunities for connection and
          support. We host workshops on nutrition and cooking, empowering
          participants to make healthier choices with the food they receive. You
          can join our efforts in several ways! Volunteer your time to help sort
          and distribute food, donate non-perishable items, or organize a food
          drive in your neighborhood. Every contribution, no matter how small,
          helps us make a difference in the lives of those who rely on our
          services. Together, we can build a stronger, healthier community where
          everyone has enough to eat.
        </p>
        <button className={styles.learnMore}>Learn More</button>
      </div>
    </section>
  );
};

export default FoodPantry;
