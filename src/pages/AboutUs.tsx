import React from "react";
import "../style/AboutUs.scss";

const AboutUs: React.FC = () => {
  const monkeyPlaceholderImage =
    "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTlFppQFm4VCK-UlCGwBXMWBW1BSM0v_KDxVwXZgEO-4slA_Bq23-4OUg_Lg2ONXc2D"; // Replace with the actual path after you download the image

  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <div className="about-us-content">
        <section className="about-us-mission">
          <h2>Nina Bottle Creator</h2>
          <p>
            This is a project in collaboration with Nina, which provides a
            significant improvement in shortened and efficiently creating a new
            bottle. The project includes several technologies such as: React,
            Nodejs, Puppeteer.
          </p>
        </section>
        <section className="about-us-team">
          <h2>Meet the Team</h2>
          <div className="team-members">
            <div className="team-member">
              <h3>Itai Gelberg</h3>
              <img
                src={monkeyPlaceholderImage}
                alt="Itai Gelberg"
                className="team-member-photo"
              />
              <p>
                [Brief description of Developer 1's background, skills, and
                contributions to the project. This could include specific
                technologies they specialize in, their role in the project, and
                a fun fact or personal touch.]
              </p>
            </div>
            <div className="team-member">
              <h3>Itay amosi</h3>
              <img
                src={monkeyPlaceholderImage}
                alt="Itay amosi"
                className="team-member-photo"
              />

              <p>
                [Brief description of Developer 2's background, skills, and
                contributions to the project. Similar to Developer 1, highlight
                their unique contributions, technical expertise, and something
                personal or quirky to make it engaging.]
              </p>
            </div>
          </div>
        </section>
        <section className="about-us-vision">
          <h2>Our Vision</h2>
          <p>
            Looking forward, we aim to [describe your future aspirations, how
            you plan to grow, innovate, or contribute to your field]. We believe
            that [express a core belief or value that drives your project], and
            through our efforts, we hope to [describe the impact you aim to
            have].
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
