import React from "react";
import Header from "../../../header2/Header";
import Footer from "../../../footer/Footer";
import img1 from "./image1.png";
import img2 from "./image2.png";
import img3 from "./image3.png";
import img4 from "./image4.png";
import { useTranslation } from "react-i18next";

function Classrooms() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 mt-12">
        <div className="max-w-4xl mx-auto">
          {/* Main Content Section */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-8 border border-gray-100">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-6">
              {t("classrooms.title")}
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
            {t("classrooms.description")}
            </p>
          </div>

          {/* Enhanced Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src={img1}
                alt="Classroom 1"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-medium">{t("classrooms.gallery")}</span>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src={img2}
                alt="Classroom 2"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-medium">{t("classrooms.gallery1")}</span>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src={img3}
                alt="Classroom 3"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-medium">{t("classrooms.gallery2")}</span>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src={img4}
                alt="Classroom 4"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-medium">{t("classrooms.gallery3")}</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Classrooms;