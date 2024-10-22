import React from "react";
import styles from "./Activities.module.css";
import Modal from "../../Modal";
import image1 from "../../assets/code-blue-shelter.jpg";
import image2 from "../../assets/food-pantry-1.jpg";
import InfoCard from "./InfoCard";
import CodeBlueShelter from "./SubcategoriesProgramsAndSupport/CodeBlueShelter";
import FoodPantry from "./SubcategoriesProgramsAndSupport/FoodPantry";

export default function Programs() {
  const [codeBlueShelterModalIsVisible, setCodeBlueShelterModalIsVisible] = React.useState(false);
  const [foodPantryModalIsVisible, setFoodPantryModalIsVisible] = React.useState(false);

  function showCodeBlueShelterModal() {
    setCodeBlueShelterModalIsVisible(true);
  }
  function hideCodeBlueShelterModal() {
    setCodeBlueShelterModalIsVisible(false);
  }
  function showFoodPantryModal() {
    setFoodPantryModalIsVisible(true);
  }
  function hideFoodPantryModal() {
    setFoodPantryModalIsVisible(false);
  }
  const codeBlueShelterDescription = {
    title: "Code Blue Shelter",
    description:
      "Providing safe, warm shelter during extreme cold weather. Our doors open to anyone in need, ensuring protection from harsh conditions. Together, we offer comfort, care, and hope when it's needed most.",
    category: "Housing",
    imageUrl: image1,
  };
  const foodPantryDescription = {
    title: "Food Pantry",
    description:
      "Our Food Pantry Program is dedicated to combating hunger in our community by providing nutritious food to those in need. Everyone deserves access to healthy meals, and we’re here to help make that happen.",
    category: "Wellbeing",
    imageUrl: image2,
  };

  return (
    <div className={styles.activities}>
      <h2>Programs & Support</h2>
      <p>Information about our programs and support...</p>
      <div className={styles.gridContainer}>
        <div>
          <InfoCard {...codeBlueShelterDescription} onClick={showCodeBlueShelterModal} />
          <div>
            {codeBlueShelterModalIsVisible && (
              <Modal onClose={hideCodeBlueShelterModal}>
                <CodeBlueShelter />
              </Modal>
            )}
          </div>
        </div>
        <div>
          <InfoCard {...foodPantryDescription} onClick={showFoodPantryModal} />
          {foodPantryModalIsVisible && (
            <Modal onClose={hideFoodPantryModal}>
              <FoodPantry />
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
}
