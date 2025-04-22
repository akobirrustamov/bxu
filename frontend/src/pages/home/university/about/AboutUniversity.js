import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "react-responsive-modal";

import Header from "../../../header2/Header";
import bgImage from "../../../../images/header2.jpg";

import Footer from "../../../footer/Footer";
import SidebarRight from "../sidebarright/SidebarRight";
import img from "../../../license/img.png";
import img2 from "../../../license/img_1.png";
import img3 from "../../../license/img_2.png";
import img4 from "../../../license/image.png";
import img5 from "../../../license/new1.png";
import img6 from "../../../license/new2.png";

function AboutUniversity(props) {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const { t } = useTranslation();

  const handleOpen = (imageUrl) => {
    setCurrentImage(imageUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-blue-50 min-h-screen">
      <div
        className="w-full h-36 xl:h-72 md:h-48 bg-cover bg-center text-center text-white relative"
        style={{
          backgroundImage: ` url(${bgImage})`,
          borderBottomRightRadius: "60px",
          borderBottomLeftRadius: "60px",
        }}
      >
        <Header />
        <div className="header_title absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg"></h2>
        </div>
      </div>

      <div className="container mx-auto py-12 pb-32 px-4">
        <div className="flex flex-wrap">
          {/* Main Content (2/3 width) */}
          <div className="w-full xl:w-2/3 p-4 space-y-6">
            <h1 className="text-3xl font-semibold text-blue-800 border-b-2 border-blue-200 pb-2">
              {t("aboutUniversity.title")}
            </h1>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-lg leading-relaxed text-gray-700">
                {t("aboutUniversity.description1")}
              </p>

              <p className="text-lg leading-relaxed text-gray-700 mt-4">
                {t("aboutUniversity.description2")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                src={img}
                alt="img"
                onClick={() => handleOpen(img)}
              />
              <img
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                src={img2}
                alt="img"
                onClick={() => handleOpen(img2)}
              />
              <img
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                src={img3}
                alt="img"
                onClick={() => handleOpen(img3)}
              />
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <h5 className="text-lg font-medium text-gray-800">
                {t("aboutUniversity.description3")}
              </h5>
            </div>

            <img
              className="w-full h-auto rounded-lg shadow-lg mt-4 cursor-pointer transition-transform duration-300 hover:scale-102 hover:shadow-xl"
              src={img4}
              alt="img"
              onClick={() => handleOpen(img4)}
            />

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl shadow-sm">
              <h5 className="text-lg font-medium text-gray-800">
                {t("aboutUniversity.description4")}
              </h5>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <img
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                src={img5}
                alt="img"
                onClick={() => handleOpen(img5)}
              />
              <img
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                src={img6}
                alt="img"
                onClick={() => handleOpen(img6)}
              />
            </div>
          </div>

          {/* Sidebar Right */}
          <SidebarRight />
        </div>
      </div>

      <Footer />

      {/* Modal for displaying the image */}
      <Modal open={open} onClose={handleClose} center>
        {currentImage && (
          <img
            src={currentImage}
            alt="Zoomed License"
            className="w-full h-auto rounded-lg"
          />
        )}
      </Modal>
    </div>
  );
}

export default AboutUniversity;
