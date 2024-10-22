import React from 'react';
import './Metrics.css';

const Metrics = () => {
  return (
    <section className="metrics">
      <div className="metric">
        <h3>$1K+</h3>
        <p>Fund Raised</p>
      </div>
      <div className="metric">
        <h3>50+</h3>
        <p>Dedicated Volunteers</p>
      </div>
      <div className="metric">
        <h3>100%</h3>
        <p>Delivered Donations</p>
      </div>
      <div className="metric">
        <h3>25K</h3>
        <p>Charity Participation</p>
      </div>
    </section>
  );
};

export default Metrics;
