import React from "react";
import styles from "./Activities.module.css";
import Modal from "../../Modal";
import image1 from "../../assets/books.jpg";
import image2 from "../../assets/volunteer-3.jpg";
import InfoCard from "./InfoCard";
import Donate from "./SubcategoriesGetInvolved/Donate";
import Volunteer from "./SubcategoriesGetInvolved/Volunteer";

export default function GetInvolved() {
  const [donateModalIsVisible, setDonateModalIsVisible] =
    React.useState(false);
  const [volunteerModalIsVisible, setVolunteerModalIsVisible] =
    React.useState(false);

  function showDonateModal() {
    setDonateModalIsVisible(true);
  }
  function hideDonateModal() {
    setDonateModalIsVisible(false);
  }
  function showVolunteerModal() {
    setVolunteerModalIsVisible(true);
  }
  function hideVolunteerModal() {
    setVolunteerModalIsVisible(false);
  }
  const donateDescription = {
    title: "Donate (Books / Clothes)",
    description:
      "Help empower communities by contributing books or clothes. Your donation makes education accessible and provides essential support to those in need, fostering hope, learning, and dignity worldwide.",
    category: "Donations",
    imageUrl: image1,
  };
  const volunteerDescription = {
    title: "Volunteer",
    description:
      "Join hands with us to make a lasting impact. Whether distributing essentials, offering medical care, or supporting community rebuilding efforts, your time and dedication bring hope and change where it’s needed the most.",
    category: "Volunteering",
    imageUrl: image2,
  };

  return (
    <div className={styles.activities}>
      <h2>Get Involved</h2>
      <p>Information about our getting involved ...</p>
      <div className={styles.gridContainer}>
        <div>
          <InfoCard {...donateDescription} onClick={showDonateModal} />
          <div>
            {donateModalIsVisible && (
              <Modal onClose={hideDonateModal}>
                <Donate />
              </Modal>
            )}
          </div>
        </div>
        <div>
          <InfoCard {...volunteerDescription} onClick={showVolunteerModal} />
          {volunteerModalIsVisible && (
            <Modal onClose={hideVolunteerModal}>
              <Volunteer />
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
}