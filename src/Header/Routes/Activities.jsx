import React from "react";
import styles from "./Category.module.css";
import ComputerLab from "./SubcategoriesActivitiesAndResources/ComputerLab";
import ProfessionalNetworking from "./SubcategoriesActivitiesAndResources/ProfessionalNetworking";
import Toastmasters from "./SubcategoriesActivitiesAndResources/Toastmasters";
import ProgramForChildren from "./SubcategoriesActivitiesAndResources/ProgramForChildren";
import Modal from "../../Modal";
import image1 from "../../assets/computer-lab.jpg";
import image2 from "../../assets/prog-children.jpg";
import InfoCard from "./InfoCard";

export default function Activities() {
  const [computerLabModalIsVisible, setComputerLabModalIsVisible] = React.useState(false);
  const [programForChildrenModalIsVisible, setProgramForChildrenModalIsVisible] = React.useState(false);

  function showComputerLabModal() {
    setComputerLabModalIsVisible(true);
  }
  function hideComputerLabModal() {
    setComputerLabModalIsVisible(false);
  }
  function showProgramForChildrenModal() {
    setProgramForChildrenModalIsVisible(true);
  }
  function hideProgramForChildrenModal() {
    setProgramForChildrenModalIsVisible(false);
  }
  const computerLabDescription = {
    title: "Computer Lab",
    description:
      "Our Computer Lab offers free access to technology and resources for community members of all ages. Whether you're learning new skills or seeking help with job applications, we're here to support your digital journey",
    category: "Education",
    imageUrl: image1,
  };
  const programForChildrenDescription = {
    title: "Programs For Children",
    description:
      "Our Programs for Children provide a safe and nurturing environment for kids to learn, play, and grow. Through engaging activities, we foster creativity, curiosity, and a love for learning.",
    category: "Education and Wellbeing",
    imageUrl: image2,
  };

  return (
    <div className={styles.activities}>
      <h2>Activities & Resources</h2>
      <p>Information about our activities...</p>
      <div className={styles.gridContainer}>
        <div>
          <InfoCard {...computerLabDescription} onClick={showComputerLabModal} />
          <div>
            {computerLabModalIsVisible && (
              <Modal onClose={hideComputerLabModal}>
                <ComputerLab />
              </Modal>
            )}
          </div>
        </div>
        <div>
          <InfoCard {...programForChildrenDescription} onClick={showProgramForChildrenModal} />
          {programForChildrenModalIsVisible && (
            <Modal onClose={hideProgramForChildrenModal}>
              <ProgramForChildren />
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
}


// export default function Activities() {
//   const [farmersMarketModalIsVisible, setFarmersMarketModalIsVisible] =
//     React.useState(false);

//   function showFarmersMarketModal() {
//     setFarmersMarketModalIsVisible(true);
//   }
//   function hideFarmersMarketModal() {
//     setFarmersMarketModalIsVisible(false);
//   }

//   return (
//     <div className={styles.activities}>
//       <h2>Activities & Resources</h2>
//       <p>Information about our activities...</p>
//       <div>
//         <p>
//           <button className={styles.button} onClick={showFarmersMarketModal}>
//             Farmer's Market
//           </button>
//         </p>
//         <div>
//           {farmersMarketModalIsVisible && (
//             <Modal onClose={hideFarmersMarketModal}>
//               <FarmersMarket />
//               {/* <Gymnasium /> */}
//             </Modal>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
