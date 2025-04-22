import React, { useState } from "react";
import Header from "../../../header2/Header.js";
import bgImage from "../../../../images/header2.jpg";
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import img4 from "./img/img4.png";
import img5 from "./img/img5.png";
import img6 from "./img/img6.png";
import img7 from "./img/img7.png";
import img8 from "./img/img8.png";
import img9 from "./img/img9.png";
import img10 from "./img/img10.png";
import img11 from "./img/img11.png";
import img12 from "./img/img12.png";
import img13 from "./img/img13.png";
import img14 from "./img/img14.png";
import img15 from "./img/img15.png";
import img16 from "./img/img16.png";
import Footer from "../../../footer/Footer";
import SideBar from "../sidebarright/SidebarRight";

import { useTranslation } from "react-i18next";
import { Modal } from "react-responsive-modal";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
function ProRectorUniversity(props) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const location = useLocation();
  const handleImageClick = (image) => {
    setCurrentImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
  ];
  const staff = t("headstaff.staffMembers", { returnObjects: true });
  return (
    <div
      className="w-full   h-36 xl:h-72 md:h-48 bg-[#DCDCDC] bg-cover bg-center text-center text-black"
      style={{
        backgroundImage: `url(${bgImage})`,
        borderBottomRightRadius: "60px",
        borderBottomLeftRadius: "60px",
      }}
    >
      <Header />
      <div className="header_title">
        <h2 className="my-4 text-white text-3xl lg:text-4xl">
          {t("rektorat.title")}
        </h2>
      </div>
      <div className="container mx-auto  py-12 pb-32">
        <div>
          <div className=" flex flex-wrap  ">
            {/* Main Content (2/3 width) */}

            {/* Main Content (2/3 width) */}
            <div className="w-full xl:w-2/3 p-2">
              <div className="my-12">
                <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
                  {t("headstaff.title")}
                </h2>

                {/* Staff Grid */}
                <div className="flex flex-wrap gap-6">
                  {staff &&
                    staff.map((member, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: index * 0.1 }}
                        className="bg-white rounded-xl w-64 shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                      >
                        <div className="h-72 w-64 overflow-hidden">
                          <img
                            src={images[index]}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="p-2">
                          <h3 className="text-xl font-bold text-gray-800 mb-1">
                            {member.name}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {member.position}
                          </p>

                          {/* Contact Information */}
                          <div className="space-y-2">
                            {member.phone && (
                              <div className="flex items-center text-start gap-2">
                                <svg
                                  className="w-5 h-5 text-blue-600"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                  />
                                </svg>
                                <a
                                  href={`tel:${member.phone}`}
                                  className="text-gray-700 hover:text-blue-600"
                                >
                                  {member.phone}
                                </a>
                              </div>
                            )}

                            {member.email && (
                              <div className="flex items-center text-start gap-2">
                                <svg
                                  className="w-5 h-5 text-blue-600"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                  />
                                </svg>
                                <a
                                  href={`mailto:${member.email}`}
                                  className="text-gray-700 hover:text-blue-600"
                                >
                                  {member.email}
                                </a>
                              </div>
                            )}

                            {member.workHours && (
                              <div className="flex items-center text-start gap-2">
                                <svg
                                  className="w-5 h-5 text-blue-600"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <span className="text-gray-700">
                                  {member.workHours}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            </div>
            <SideBar />
          </div>
        </div>
      </div>

      <Modal open={open} onClose={handleClose} center>
        {currentImage && (
          <img
            src={currentImage}
            alt="Zoomed License"
            style={{ width: "100%", height: "auto" }}
          />
        )}
      </Modal>
      <Footer />
    </div>
  );
}

export default ProRectorUniversity;
