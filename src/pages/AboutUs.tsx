import React from "react";
import "../style/AboutUs.scss";

const AboutUs: React.FC = () => {
  const itayAmosiImg =
    "https://i.postimg.cc/4ygrfjBr/Itay-Amosi.jpg";

    const itayGelbergImg =
    "https://i.postimg.cc/hGN24PD8/itai-gelberg.jpg";

    const linkedinImg =
    "https://i.postimg.cc/R0sZWhqY/linkedin.jpg"

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
              <h3>Itay Amosi</h3>
              <img
                src={itayAmosiImg}
                alt="Itay amosi"
                className="team-member-photo"
              />
              <p>
              <a
            href="https://www.linkedin.com/in/itay-amosi/"
            target="_blank"
            ><img src={linkedinImg}
            className="linkedinImg"
            /></a>
              </p>
            </div>
            <div className="team-member">
              <h3>Itai Gelberg</h3>
              <img
                src={itayGelbergImg}
                alt="Itai Gelberg"
                className="team-member-photo"
              />
              <p>
              <a
            href="https://www.linkedin.com/in/itai-gelberg/"
            target="_blank"
            ><img src={linkedinImg}
            className="linkedinImg"
            /></a>
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutUs;
