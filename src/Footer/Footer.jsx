import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>Email: contact@nonprofit.org</p>
      <p>© 2024 Our Non-Profit. All rights reserved.</p>
      <p>Phone: +1 123-456-7890</p>
    </div>
  );
}
