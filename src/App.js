import React from 'react';
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Non-Profit 🌍</h1>
        <p>We are dedicated to making the world a better place.</p>
      </header>

      <section className="About">
        {" "}
        <h2>About Us</h2>
        <p>
          Our mission is to help communities in need and create a sustainable
          future.
        </p>
      </section>
      <section className="Contact">
        <h2>Contact Us</h2>
        <p>Email: contact@nonprofit.org</p>
        <p>Phone: +1 123-456-7890</p>
      </section>

      <footer>
        <p>© 2024 Our Non-Profit. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
