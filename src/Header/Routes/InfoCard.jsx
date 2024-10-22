import React from "react";
import styles from "./InfoCard.module.css";

const InfoCard = ({ title, description, imageUrl, category, onClick }) => {
  return (
    <div
      className={styles.card}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick();
        }
      }}
    >
      <div className={styles.imageContainer}>
        <img
          src={imageUrl || "/api/placeholder/400/300"}
          alt={title}
          className={styles.image}
        />
        <span className={styles.category}>{category}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
