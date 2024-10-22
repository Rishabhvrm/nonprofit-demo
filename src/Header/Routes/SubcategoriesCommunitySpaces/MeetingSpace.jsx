import React from "react";
import image1 from "../../../assets/meeting-space-1.jpg";
import image2 from "../../../assets/meeting-space-2.jpg";
import styles from "../Subcategory.module.css";

const MeetingSpace = () => {
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
            <p className={styles.statNumber}>500</p>
            <p className={styles.statText}>
              people used our meeting spaces this year
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
        <h1 className={styles.title}>Meeting Spaces for All</h1>
        <p className={styles.description}>
          At our center, we offer versatile Meeting Spaces for All, designed to
          accommodate a variety of events, from community meetings and workshops
          to social gatherings and educational programs. Our spaces are equipped
          with the necessary technology and amenities to ensure a productive and
          comfortable environment for all participants. We believe that everyone
          should have access to a space where they can come together, share
          ideas, and collaborate on projects that benefit the community. Our
          meeting rooms are available for local organizations, groups, and
          individuals who seek a supportive setting for their initiatives. In
          addition to hosting community events, we organize regular workshops
          and seminars on topics ranging from health and wellness to financial
          literacy and job readiness. These programs are designed to empower
          community members with knowledge and skills that can lead to positive
          changes in their lives. We encourage everyone to utilize our meeting
          spaces, whether you're planning a small gathering or a larger
          community event. To reserve a space or learn more about our upcoming
          programs, please contact us. Together, we can foster a sense of
          belonging and community engagement, creating a brighter future for
          everyone.
        </p>
        <button className={styles.learnMore}>Learn More</button>
      </div>
    </section>
  );
};

export default MeetingSpace;
