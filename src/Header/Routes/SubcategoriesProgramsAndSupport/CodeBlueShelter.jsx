import React from "react";
import image1 from "../../../assets/code-blue-shelter-1.jpg";
import image2 from "../../../assets/code-blue-shelter-2.jpg";
import styles from "../Subcategory.module.css";

const CodeBlueShelter = () => {
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
            <p className={styles.statNumber}>10%</p>
            <p className={styles.statText}>of people don't have a shelter</p>
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
          Code Blue Shelter
        </h1>
        <p className={styles.description}>
          During extreme cold weather, we are committed to providing a safe and
          welcoming shelter for everyone in need. Our facility opens its doors
          to individuals and families facing homelessness, ensuring they have a
          warm place to rest and recuperate from the harsh elements. Our
          dedicated staff and volunteers work tirelessly to create an
          environment filled with compassion and support. In addition to
          offering warmth and shelter, we provide essential services such as
          meals, warm clothing, and blankets to ensure that everyone stays
          comfortable. Our community-oriented approach means that we foster an
          atmosphere of inclusivity and belonging, where individuals can find
          not just refuge but also friendship and understanding. We believe that
          no one should have to endure the biting cold alone. By coming together
          as a community, we can extend our hands and hearts to those who are
          struggling. Your support helps us maintain our shelter and expand our
          services, allowing us to reach even more people in need. Join us in
          our mission to spread comfort, care, and hope. Together, we can make a
          difference, providing a lifeline to those facing one of life’s
          toughest challenges.
        </p>
        <button className={styles.learnMore}>Learn More</button>
      </div>
    </section>
  );
};

export default CodeBlueShelter;
