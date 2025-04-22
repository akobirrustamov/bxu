import React from "react";
import Header from "../../../header2/Header";
import Footer from "../../../footer/Footer";
import dorm1 from "./image1.png";
import dorm2 from "./image2.png";
import dorm3 from "./image3.png";
import dorm4 from "./image4.png";
import { useTranslation } from "react-i18next";

function Dormitory() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 mt-12">
        <div className="max-w-4xl mx-auto">
          {/* Main Content Section */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-8 border border-gray-100">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-6">
              {t("dormitory.title")}
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              {t("dormitory.description")}
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>{t("dormitory.list1")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>{t("dormitory.list2")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>{t("dormitory.list3")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>{t("dormitory.list4")}</span>
              </li>
            </ul>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src={dorm1}
                alt="Talabalar turar joyi tashqi ko'rinishi"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-medium">
                  {t("dormitory.joy1")}
                </span>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src={dorm2}
                alt="Turar joy xonalari"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-medium">
                  {t("dormitory.joy2")}
                </span>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src={dorm3}
                alt="O'qish zali"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-medium">
                  {t("dormitory.joy3")}
                </span>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src={dorm4}
                alt="Dam olish zali"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-medium">
                  {t("dormitory.joy4")}
                </span>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-blue-50 rounded-xl p-6 md:p-8 mt-8">
            <h2 className="text-xl md:text-2xl font-bold text-blue-800 mb-4">
              {t("dormitory.rules")}
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  {t("dormitory.rule1")}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  {t("dormitory.rule2")}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  {t("dormitory.rule3")}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  {t("dormitory.rule4")}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Dormitory;
