import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const videoEmbedUrl = "https://www.youtube.com/embed/uJLfzhYC6RE";

const ArrowLeft = (props:any) => (
  <button style={{backgroundColor:"red", border: 0}} {...props} className={'prev'}>
    back
  </button>
);
const ArrowRight = (props:any) => (
  <button style={{backgroundColor:"red", border: 0}} {...props} className={'next'}>
    next
  </button>
);
const MainProject: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    autoplaySpeed: 5000,

  };

  const styles: { [key: string]: React.CSSProperties } = {
    projectContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      },
      projectFrame: {
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "1200px",
        width: "100%",
        margin: "auto",
        background: "#fff",
      },
      header:{
        color: "black",
      },
    mainPhoto: {
      width: "100%",
      height: "50rem",
      borderRadius: "10px",
      marginBottom: "20px",
    },
    slickSlideImg: {
      margin: "auto",
      borderRadius: "10px",
    },
    videoContainer: {
      width: "100%", 
      height:"50rem"
    },
    iframeStyle: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
    },
  };

  return (
    <div style={styles.projectContainer}>
      <div style={styles.projectFrame}>
        <div style={styles.header}>
        <h1>Project Title</h1>
        <p>Description of the project...</p>
        </div>
        <Slider {...settings}>
        <div>
          <iframe
            style={styles.videoContainer}
            src={videoEmbedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded video"
          ></iframe>
          </div>
          <div>
            <img style={styles.mainPhoto} src="https://i.postimg.cc/fbH1f5Fp/Nina-2.jpg" alt="Img-2" />
          </div>
          <div>
            <img style={styles.mainPhoto} src="https://i.postimg.cc/rFH2t5zQ/img-3.png" alt="Img-3" />
          </div>

        </Slider>
      </div>
    </div>
  );
};
export default MainProject;
