import React from "react";
import "./Banner.css";
import Donate from "./Donate";
import LearnMore from "./LearnMore";
import { FiArrowRight } from "react-icons/fi";
import image4 from "../../assets/home-page.jpg";
import Modal from "../../Modal";


export default function Banner() {
  const [donateModalIsVisible, setDonateModalIsVisible] = React.useState(false);
  const [learnMoreModalIsVisible, setLearnMoreModalIsVisible] = React.useState(false);

  function showDonateModalHandler() {
    setDonateModalIsVisible(true);
  }
  function hideDonateModalHandler() {
    setDonateModalIsVisible(false);
  }
  function showLearnMoreModalHandler() {
    setLearnMoreModalIsVisible(true);
  }
  function hideLearnMoreModalHandler() {
    setLearnMoreModalIsVisible(false);
  }
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Giving <span className="highlight">Hope</span>, Creating Impact
        </h1>
        <p>
          Be a part of something great. We are dedicated to giving hope to those
          in need, creating a lasting impact.
        </p>
        <div className="cta-buttons">
          <div>
            <button className="btn donate-btn" onClick={showDonateModalHandler}>
              Donate Now <FiArrowRight />
            </button>
            <div>
              {donateModalIsVisible && (
                <Modal onClose={hideDonateModalHandler}>
                  <Donate />
                </Modal>
              )}
            </div>
          </div>
          <div>
            <button
              className="btn learn-more-btn"
              onClick={showLearnMoreModalHandler}
            >
              Learn More
            </button>
            <div>
              {learnMoreModalIsVisible && (
                <Modal onClose={hideLearnMoreModalHandler}>
                 <LearnMore />
                 </Modal>
              )}
            </div>
          </div>
        </div>
      </div>
      <img src={image4} alt="Community support" className="hero-image" />
    </section>
  );
}
