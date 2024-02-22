import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/MainProject.scss"


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
  }

  return (
    <div className="projectContainer">
      <div className="projectFrame">
        <div className="header">
        <h1>SPIRIT CREATOR</h1>
        <p>You can slide to the sides or navigate with the buttons to view additional photos of the project (or video)</p>
        </div>
        <Slider className="slider" {...settings}>
        <div>
          <iframe
            className="videoContainer"
            src={videoEmbedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded video"
          ></iframe>
          </div>
          <div>
            <img className="mainPhoto" src="https://i.postimg.cc/fbH1f5Fp/Nina-2.jpg" alt="Img-2" />
          </div>
          <div>
            <img className="mainPhoto" src="https://i.postimg.cc/rFH2t5zQ/img-3.png" alt="Img-3" />
          </div>

        </Slider>
      </div>
    </div>
    );
  };
  
export default MainProject;
