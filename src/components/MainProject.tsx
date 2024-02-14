import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainProject: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const styles = {
    projectContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",  // This will make the container take the full viewport height
        width: "100%",    // Changed from 100vh to 100% to take the full width of the parent
      },
      projectFrame: {
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "800px",
        width: "100%",    // Ensure it can grow up to the maxWidth
        margin: "auto",
        background: "#fff",
      },
    mainPhoto: {
      width: "100%",
      borderRadius: "10px",
      marginBottom: "20px",
    },
    slickSlideImg: {
      margin: "auto",
      borderRadius: "10px",
    },
  };

  return (
    <div style={styles.projectContainer}>
      <div style={styles.projectFrame}>
      <h1>Project Title</h1>
        <img src="https://es.celoxis.com/cassets/img/pmc/project-management.png" alt="Main" style={styles.mainPhoto} />
        <p>Description of the project...</p>
        <Slider {...settings}>
          <div>
            <img src="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg" alt="Slide 1" />
          </div>
          <div>
            <img src="https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=" alt="Slide 2" />
          </div>
          <div>
            <img src="https://www.usatoday.com/gcdn/media/2022/06/21/USATODAY/usatsports/MotleyFool-TMOT-df6a78b9-5667c6ca.jpg?width=660&height=455&fit=crop&format=pjpg&auto=webp" alt="Slide 3" />
          </div>
        </Slider>
                {/* Embed video here */}

      </div>
    </div>
  );
};

export default MainProject;
