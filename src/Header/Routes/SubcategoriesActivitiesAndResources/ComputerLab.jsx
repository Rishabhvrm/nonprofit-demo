import React from "react";

import image1 from "../../../assets/computer-lab-1.jpg";
import image2 from "../../../assets/computer-lab-2.jpg";

import styles from "../Subcategory.module.css";

const ComputerLab = () => {
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
            <p className={styles.statNumber}>30</p>
            <p className={styles.statText}>
              computers and counting ...
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
        <h1 className={styles.title}>Computer Lab</h1>
        <p className={styles.description}>
          Our Computer Lab is designed to bridge the digital divide in our
          community by providing free access to computers, high-speed internet,
          and essential software. We believe that everyone should have the
          opportunity to enhance their digital skills, regardless of their
          background. In the lab, community members can receive assistance with
          a variety of tasks, including online job applications, resume
          building, and digital literacy training. Our friendly staff and
          volunteers are available to guide individuals through the learning
          process, ensuring that they gain the confidence and skills needed to
          navigate today's technology-driven world. We also offer workshops on
          topics such as coding, graphic design, and cybersecurity, empowering
          participants to explore new interests and career paths. Whether you’re
          a student, job seeker, or simply looking to learn something new, our
          Computer Lab is a welcoming space for you to grow. Join us by
          participating in our workshops, volunteering to teach a skill, or
          simply visiting the lab to take advantage of our resources. Together,
          we can help build a more digitally inclusive community where everyone
          can thrive in the modern world.
        </p>
        <button className={styles.learnMore}>Learn More</button>
      </div>
    </section>
  );
};

export default ComputerLab;
