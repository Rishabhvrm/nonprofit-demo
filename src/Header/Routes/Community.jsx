import React from "react";
import styles from "./Category.module.css";
import FarmersMarket from "./SubcategoriesCommunitySpaces/FarmersMarket";
import Gymnasium from "./SubcategoriesCommunitySpaces/Gymnasium";
import Modal from "../../Modal";
import image1 from "../../assets/meeting-space.jpg";
import image2 from "../../assets/gymnasium.jpg";
import image3 from "../../assets/image3.jpg";
import InfoCard from "./InfoCard";
import MeetingSpace from "./SubcategoriesCommunitySpaces/MeetingSpace";

export default function Community() {
  const [meetingSpaceModalIsVisible, setMeetingSpaceModalIsVisible] = React.useState(false);
  const [gymnasiumModalIsVisible, setGymnasiumModalIsVisible] = React.useState(false);

  function showMeetingSpaceModal() {
    setMeetingSpaceModalIsVisible(true);
  }
  function hideMeetingSpaceModal() {
    setMeetingSpaceModalIsVisible(false);
  }
  function showGymnasiumModal() {
    setGymnasiumModalIsVisible(true);
  }
  function hideGymnasiumModal() {
    setGymnasiumModalIsVisible(false);
  }

  const meetingSpaceDescription = {
    title: "Meeting Spaces for All",
    description:
      "Our Meeting Spaces for All provide a welcoming environment for community gatherings, workshops, and events. We believe that collaboration and connection are essential for building a vibrant community.",
    category: "Community",
    imageUrl: image1,
  };
  const gymnasiumDescription = {
    title: "Gymnasium",
    description:
      "Our Gymnasium is a vibrant space for physical activity, wellness, and community engagement. Whether you're looking to exercise, join a sports team, or participate in fitness classes, we have something for everyone",
    category: "Healthcare",
    imageUrl: image2,
  };

  return (
    <div className={styles.activities}>
      <h2>Community Spaces</h2>
      <p>Information about our community spaces...</p>
      <div className={styles.gridContainer}>
        <div>
          <InfoCard {...meetingSpaceDescription} onClick={showMeetingSpaceModal} />
          <div>
            {meetingSpaceModalIsVisible && (
              <Modal onClose={hideMeetingSpaceModal}>
                <MeetingSpace />
              </Modal>
            )}
          </div>
        </div>
        <div>
          <InfoCard {...gymnasiumDescription} onClick={showGymnasiumModal} />
          {gymnasiumModalIsVisible && (
            <Modal onClose={hideGymnasiumModal}>
              <Gymnasium />
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
}