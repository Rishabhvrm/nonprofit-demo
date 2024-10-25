import React from "react";
import "./DonationCards.css";
import image1 from "../../assets/student-table.jpg";
import image2 from "../../assets/medicine.jpg";
import image3 from "../../assets/food-bank.jpg";
import Modal from "../../Modal";
import DonationProgress from "./DonationProgress";
// import image4 from "../assets/image2.jpg";

const donationPrograms = [
  { title: "Accessible Education", goal: "$32,000", img: image1 },
  { title: "Healthcare Outreach", goal: "$51,000", img: image2 },
  { title: "Food Bank Initiatives", goal: "$24,000", img: image3 },
];

const DonationCards = () => {
  const [donateButtonModalIsVisible, setDonateButtonModalIsVisible] = React.useState(false);

  function showDonateButtonModalHandler() {
    setDonateButtonModalIsVisible(true);
  }
  function hideDonateButtonModalHandler() {
    setDonateButtonModalIsVisible(false);
  }
  return (
    <section className="donation-cards">
      {donationPrograms.map((program, index) => (
        <div className="card" key={index}>
          <img src={program.img} alt={program.title} />
          <div className="card-content">
            <h4>{program.title}</h4>
            <p>Goal: {program.goal}</p>
            <div>
              <button className="btn" onClick={showDonateButtonModalHandler}>Donate</button>
              <div>
              {donateButtonModalIsVisible && (
                <Modal onClose={hideDonateButtonModalHandler}>
                 <DonationProgress />
                 </Modal>
              )}
            </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default DonationCards;
