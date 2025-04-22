import React, { useState } from "react";
import Header from "../../../header2/Header";
import Footer from "../../../footer/Footer";
import img1 from "./img/image1.png";
import img2 from "./img/image2.png";
import img3 from "./img/image3.png";
import img4 from "./img/image4.png";
import img5 from "./img/image5.png";
import img11 from "./img/11.png";
import img12 from "./img/12.png";
import img22 from "./img/22.png";
import img23 from "./img/23.png";
import img33 from "./img/33.png";
import img34 from "./img/34.png";
import { useTranslation } from "react-i18next";

// Lightbox component
const Lightbox = ({ image, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <img
        src={image}
        alt="Full screen view"
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
};

function ScientificActivity() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { t } = useTranslation();
  const diplomas = [
    {
      id: 1,
      name: t("scientificactivity.title3"),
      topic: t("scientificactivity.title6"),
    },
    {
      id: 2,
      name: t("scientificactivity.title7"),
      topic: t("scientificactivity.title8"),
    },
    {
      id: 3,
      name: t("scientificactivity.title12"),
      topic: t("scientificactivity.title13"),
    },
    {
      id: 4,
      name: t("scientificactivity.title14"),
      topic: t("scientificactivity.title15"),
    },
    {
      id: 5,
      name: t("scientificactivity.title16"),
      topic: t("scientificactivity.title17"),
    },
    {
      id: 6,
      name: t("scientificactivity.title18"),
      topic: t("scientificactivity.title19"),
    },
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="mt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
            {t("scientificactivity.title1")}
          </h1>

          {/* Kongress haqida bo‘lim */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10 mb-12">
            <h2 className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {t("scientificactivity.title")}
            </h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => openLightbox(img1)}
              >
                <img
                  src={img1}
                  alt="Kongress rasmi 1"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div
                className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => openLightbox(img2)}
              >
                <img
                  src={img2}
                  alt="Kongress rasmi 2"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Ilmiy ishlar galereyasi */}
          <div className="mb-12">
            <div className="overflow-x-auto bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                {t("scientificactivity.title2")}
              </h2>

              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      №
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t("scientificactivity.title4")}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t("scientificactivity.title5")}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      1
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="space-y-4">
                        <img
                          src={img12}
                          className="w-48 h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                          alt="Diploma 1"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="space-y-4">
                        <img
                          src={img11}
                          className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                          alt="Diploma 1"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      2
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="space-y-4">
                        <img
                          src={img23}
                          className="w-48 h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                          alt="Diploma 2"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="space-y-4">
                        <img
                          src={img22}
                          className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                          alt="Diploma 2"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      3
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="space-y-4">
                        <img
                          src={img34}
                          className="w-48 h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                          alt="Diploma 2"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="space-y-4">
                        <img
                          src={img33}
                          className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                          alt="Diploma 2"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Diplomalar jadvali */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10 mb-12 overflow-x-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              {t("scientificactivity.title9")}
            </h2>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 p-2 md:p-4">
              {[img3, img4, img5].map((img, index) => (
                <div
                  key={index}
                  className="relative w-full h-[270px] sm:w-[48%] md:w-[32%] lg:w-[31%] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <img
                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                    src={img}
                    alt={`Gallery image ${index + 3}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      №
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t("scientificactivity.10")}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t("scientificactivity.title11")}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {diplomas.map((diploma) => (
                    <tr key={diploma.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {diploma.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {diploma.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {diploma.topic}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Show lightbox when an image is clicked */}
      {selectedImage && (
        <Lightbox image={selectedImage} onClose={closeLightbox} />
      )}

      <Footer />
    </div>
  );
}

export default ScientificActivity;
