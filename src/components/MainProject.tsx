import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const videoEmbedUrl = "src/assets/Nina-3.mp4";

const ArrowRight = (props:any) => (
  <button style={{background:"red", border: 0}} {...props} className={'next'}>
    next
  </button>
);
const ArrowLeft = (props:any) => (
  <button style={{background:"red", border: 0}} {...props} className={'prev'}>
    back
  </button>
);
const MainProject: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    arrows: true,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
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
        maxWidth: "800px",
        width: "100%",
        margin: "auto",
        background: "#fff",
      },
      header:{
        color: "black",
      },
    mainPhoto: {
      width: "100%",
      height: "30rem",
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
    btn:{
      backgroundColor: "red"
    }
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
            <img style={styles.mainPhoto} src="https://i.postimg.cc/hjbtpkLM/Nina-1.jpg" alt="Img-1" />
          </div>
          <div>
            <img style={styles.mainPhoto} src="https://i.postimg.cc/fbH1f5Fp/Nina-2.jpg" alt="Img-2" />
          </div>
          <div>
            <img style={styles.mainPhoto} src="https://www.usatoday.com/gcdn/media/2022/06/21/USATODAY/usatsports/MotleyFool-TMOT-df6a78b9-5667c6ca.jpg?width=660&height=455&fit=crop&format=pjpg&auto=webp" alt="Img-3" />
          </div>

        </Slider>
      </div>
    </div>
  );
};
export default MainProject;
