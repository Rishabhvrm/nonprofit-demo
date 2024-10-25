// import React from "react";
// import styles from "../Subcategory.module.css";

// const LearnMore = () => {
//   return (
//     <div
//       style={{
//         textAlign: "center",
//         padding: "80px",
//         maxWidth: "900px",
//         margin: "auto",
//       }}
//     >
//       <h1 className={styles.title}>Discover Our Mission and Programs</h1>
//       <p>
//         Our community center is dedicated to building an inclusive, supportive
//         environment where everyone has the opportunity to thrive. We focus on:
//       </p>
//       <ul
//         style={{
//           //   listStyleType: "disc",
//           textAlign: "center",
//           margin: "20px auto",
//           maxWidth: "800px",
//           fontSize: "inherit",
//           fontFamily: "inherit",
//           fontStyle: "inherit",
//         }}
//       >
//         <li>
//           Education & Skill Development: Free classes, workshops, and tutoring
//         </li>
//         <li>
//           Community Events: Celebrations, cultural events, and awareness
//           programs.
//         </li>
//         <li>
//           Support Services: Access to essential resources for families in need.
//         </li>
//         <li>
//           Youth Engagement: Safe spaces for creative activities and mentorship
//           programs.
//         </li>
//       </ul>
//       <p>
//         Join us to explore how you can get involved through volunteering,
//         partnerships, or spreading the word. Together, we can make a lasting
//         impact.
//       </p>
//       <h4>Your support matters.</h4>
//       <div>
//         <h2>Contact</h2>
//         <p>Phone: +1 123-456-7890</p>
//         <p>Email: contact@nonprofit.org</p>
//       </div>
//     </div>
//   );
// };
// export default LearnMore;

import React from "react";
import "./BannerButton.css";

const LearnMore = () => {
  return (
    <div class="modal">
      <h1 class="modal__title">Discover Our Mission and Programs</h1>
      <p class="modal__text">
        Our community center is dedicated to building an inclusive, supportive
        environment where everyone has the opportunity to thrive. We focus on:
      </p>

      <ul class="modal__list">
        <li><b>Education & Skill Development:</b> Free classes, workshops, and tutoring.</li>
        <li><b>Community Events:</b> Celebrations, cultural events, and awareness programs.</li>
        <li><b>Youth Engagement:</b> Safe spaces for creative activities and mentorship programs.</li>
        <li><b>Support Services:</b> Access to essential resources for families in need.</li>
      </ul>

      <p class="modal__text">
        Join us to explore how you can get involved through volunteering,
        partnerships, or spreading the word. Together, we can make a lasting
        impact.
      </p>

      <p class="modal__support">
        <strong>Your support matters.</strong>
      </p>

      <div class="modal__contact">
        <h2>Contact</h2>
        <p>Phone: +1 123-456-7890</p>
        <p>
          Email:{" "}
          <a href="mailto:contact@nonprofit.org">contact@nonprofit.org</a>
        </p>
      </div>
    </div>
  );
};
export default LearnMore;
