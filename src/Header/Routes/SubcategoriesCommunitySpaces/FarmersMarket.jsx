import React from 'react';
import image1 from "../../../assets/image1.jpg";
import image2 from "../../../assets/image2.jpg";
import styles from '../Subcategory.module.css';

const FarmersMarket = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.imageGroup}>
        <div className={styles.mainImage}>
          <img 
            src={image1}
            alt="Volunteers working together"
            style={{ width: '100%', height: 'auto' }}
          />
          <div className={styles.tags}>
            <span className={styles.tag}>Fundraising</span>
            <span className={styles.tag}>Charity</span>
          </div>
        </div>
        
        <div className={styles.statsImage}>
          <div className={styles.statBox}>
            <p className={styles.statNumber}>50%</p>
            <p className={styles.statText}>of kids worldwide don't have education</p>
          </div>
          <div className={styles.secondaryImage}>
            <img 
              src={image2}
              alt="Happy children together"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          Donation for the better of our future world
        </h1>
        <p className={styles.description}>
          WeHope is more than a charity; it's a movement dedicated to shaping a brighter 
          future for women, children, and our planet. Through empowering programs, 
          dedicated volunteers, and a global reach, we're fostering positive change 
          and hope in communities worldwide.
        </p>
        <button className={styles.learnMore}>
          Learn More
        </button>
      </div>
    </section>
  );
};

export default FarmersMarket;