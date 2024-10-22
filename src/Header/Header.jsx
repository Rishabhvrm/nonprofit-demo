import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { Link } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate(); // Hook for navigation
  console.log(window.location.pathname);
  return (
    <div className={styles.header}>
      <Link to="/nonprofit-demo/" className={styles.headerLink}>
      <div className={styles.title}>
        <h1>Delavan Grider Community Center 🏘 🌍</h1>
        {/* <p>We are dedicated to making the world a better place. </p>  */}
        <p> 877 E Delavan Ave Buffalo, NY 14215</p>
      </div>
      </Link>
      <nav className={styles.nav}>
        <button
          className={styles.navButton}
          onClick={() => navigate("/get-involved")}
        >
          Get Involved
        </button>
        <button
          className={styles.navButton}
          onClick={() => navigate("/programs")}
        >
          Programs & Support
        </button>
        <button
          className={styles.navButton}
          onClick={() => navigate("/activities")}
          
        >
          Activities & Resources
          
        </button>
        <button
          className={styles.navButton}
          onClick={() => navigate("/community")}
        >
          Community Spaces
        </button>
      </nav>
      
    </div>
    
  );
}
