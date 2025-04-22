import React from "react";
import Headers from "../../../header2/Header";
import Footer from "../../../footer/Footer";
import img1 from "./image1.png";
import img2 from "./image.png";
import { FaBook, FaQrcode, FaGraduationCap, FaTrophy } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function ResearchCenters() {
  const {t} = useTranslation();
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Headers />
      <div className="flex-grow container mx-auto px-4 py-8 md:py-12 mt-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section with decorative elements */}
          <div className="text-center mb-12 relative">
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-blue-100 rounded-full opacity-50"></div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-4 relative z-10">
              {t("researchcenters.content")}
            </h1>
            <h3 className="text-xl md:text-2xl text-blue-600 mb-2 relative z-10">
              {t("researchcenters.content1")}
            </h3>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:scale-[1.02] transition-transform">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaBook className="text-blue-600 text-xl" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {t("researchcenters.content2")}
                </h4>
              </div>
              <p className="text-gray-600">
                {t("researchcenters.content3")}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500 hover:scale-[1.02] transition-transform">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaQrcode className="text-green-600 text-xl" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {t("researchcenters.content4")}
                </h4>
              </div>
              <p className="text-gray-600">
                {t("researchcenters.content5")}
              </p>
            </div>
          </div>

          {/* Detailed List */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              {t("researchcenters.content6")}
            </h2>
            <ul className="space-y-4">
              {[
                {
                  icon: <FaBook className="text-blue-500" />,
                  title: t("researchcenters.content7"),
                  content:
                    t("researchcenters.content8"),
                },
                {
                  icon: <FaQrcode className="text-green-500" />,
                  title: t("researchcenters.content9"),
                  content:
                    t("researchcenters.content10"),
                },
                {
                  icon: <FaGraduationCap className="text-purple-500" />,
                  title: t("researchcenters.content11"),
                  content:
                    t("researchcenters.content12"),
                },
                {
                  icon: <FaTrophy className="text-yellow-500" />,
                  title: t("researchcenters.content13"),
                  content:
                    t("researchcenters.content14"),
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-start">
                    <div className="bg-blue-50 p-3 rounded-full mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Gallery */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              {t("researchcenters.content15")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={img1}
                  alt="Markaz fotosurati 1"
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">
                    {t("researchcenters.content16")}
                  </span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={img2}
                  alt="Markaz fotosurati 2"
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">
                    {t("researchcenters.content17")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ResearchCenters;
