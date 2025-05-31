import React, { useState } from "react";
import image1 from "./img/img1.jpg";
import image2 from "./img/imageslider.jpg";
import image3 from "./img/simp.png";
// import image4 from "./img/qabul.jpg"
import image4 from "./img/qabul1.jpg"
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { useTranslation } from "react-i18next";
import { Fade, Zoom } from "react-reveal";
import "./carusel.css";

function MyCarousel() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="custom-carousel-container">
      <Carousel fade indicators={false} pause={false}>
        {/* qabul uchun karusel rasm shu yerda quyiladi */}
        <Carousel.Item interval={10000}>
          <div className="carousel-split-layout">
            {/* Image on top (mobile) or left (desktop) */}
            <div className="carousel-image-container">
              <Fade left duration={1000}>
                <img
                  className="object-cover"
                  src={image4}
                  alt="President Shavkat Mirziyoyev"
                  style={{ width: "100%", height: "500px" }}
                />
              </Fade>
              <div className="left-image-gradient-overlay"></div>
              <div className="right-image-gradient-overlay"></div>
            </div>

            {/* Content on bottom (mobile) or right (desktop) */}
            <div className="carousel-content blue-gradient-bg">
              <Zoom duration={1000} delay={300}>
                <div className="content-wrapper">

                  <h3 className="person-name">{t("korusel.text8")}</h3>
                  <p className="quote-text">{t("korusel.text10")}</p>
                  <a
                    href="https://qabul.bxu.uz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-8 bg-green-600 text-white rounded-xl text-xl font-semibold shadow-lg hover:bg-green-500 transition-all duration-300"
                    onClick={toggleDrawer}
                  >
                    {t("korusel.text9")}
                  </a>
                </div>
              </Zoom>
            </div>
          </div>
        </Carousel.Item>
        {/* Slide 1 - Google Success Story */}
        <Carousel.Item interval={5000}>
          <div className="carousel-split-layout">
            {/* Image on top (mobile) or left (desktop) */}
            <div className="carousel-image-container">
              <Fade left duration={1000}>
                <img
                  className="carousel-image"
                  src={image1}
                  alt="Google employee"
                />
              </Fade>
              <div className="left-image-gradient-overlay"></div>
              <div className="right-image-gradient-overlay"></div>
            </div>

            {/* Content on bottom (mobile) or right (desktop) */}
            <div className="carousel-content blue-gradient-bg">
              <Zoom duration={1000} delay={300}>
                <div className="content-wrapper">
                  <h3 className="company-name mt-8 !text-[24px]">
                    {t("korusel.text")}
                  </h3>
                  <h3 className="company-name mt-8 !text-[24px]">
                    {t("korusel.t")}
                  </h3>
                  <p className="success-story">{t("korusel.text1")}</p>
                  <p className="success-story">{t("korusel.t1")}</p>
                  <p className="success-story">{t("korusel.t2")}</p>
                  <p className="success-story">{t("korusel.t3")}</p>
                  <div className="quote-decoration">
                    <div className="quote-line"></div>
                    {/*<div className="quote-icon">❝</div>*/}
                  </div>
                </div>
              </Zoom>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 2 - Presidential Quote */}
        <Carousel.Item interval={5000}>
          <div className="carousel-split-layout">
            {/* Image on top (mobile) or left (desktop) */}
            <div className="carousel-image-container">
              <Fade left duration={1000}>
                <img
                  className="carousel-image"
                  src={image2}
                  alt="President Shavkat Mirziyoyev"
                />
              </Fade>
              <div className="left-image-gradient-overlay"></div>
              <div className="right-image-gradient-overlay"></div>
            </div>

            {/* Content on bottom (mobile) or right (desktop) */}
            <div className="carousel-content blue-gradient-bg">
              <Zoom duration={1000} delay={300}>
                <div className="content-wrapper">
                  <h3 className="quote-text">{t("korusel.text2")}</h3>
                  <h3 className="quote-text">{t("korusel.t4")}</h3>
                  <h3 className="quote-text">{t("korusel.t5")}</h3>
                  <h1 className="person-name">{t("korusel.text3")}</h1>
                  <p className="person-title">{t("korusel.text4")}</p>
                </div>
              </Zoom>
            </div>
          </div>
        </Carousel.Item>
        {/* Slide 3 - Presidential Quote */}
        <Carousel.Item interval={5000}>
          <div className="carousel-split-layout">
            {/* Image on top (mobile) or left (desktop) */}
            <div className="carousel-image-container">
              <Fade left duration={1000}>
                <img
                  className="carousel-image"
                  src={image3}
                  alt="President Shavkat Mirziyoyev"
                />
              </Fade>
              <div className="left-image-gradient-overlay"></div>
              <div className="right-image-gradient-overlay"></div>
            </div>

            {/* Content on bottom (mobile) or right (desktop) */}
            <div className="carousel-content blue-gradient-bg">
              <Zoom duration={1000} delay={300}>
                <div className="content-wrapper">
                  <h3 className="quote-text">{t("korusel.text5")}</h3>
                  <h1 className="person-name">{t("korusel.text6")}</h1>
                  <p className="quote-text">{t("korusel.text7")}</p>
                </div>
              </Zoom>
            </div>
          </div>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default MyCarousel;
