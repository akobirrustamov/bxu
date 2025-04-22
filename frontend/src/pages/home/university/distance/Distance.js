import React from "react";
import Header from "../../../header2/Header";
import Footer from "../../../footer/Footer";
import { useTranslation } from "react-i18next";
function Distance() {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-14">
          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-6">
              {t("distance.title")}
            </h1>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                {t("distance.description1")}
              </h2>
              <p className="text-lg mb-4">
                {t("distance.description2")}
              </p>
              <p className="text-lg mb-4">
                {t("distance.description3")}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                {t("distance.list_head")}
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  {t("distance.list_body1")}
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  {t("distance.list_body2")}
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  {t("distance.list_body3")}
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  {t("distance.list_body4")}
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  {t("distance.list_body5")}
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  {t("distance.list_body6")}
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  {t("distance.list_body7")}
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  {t("distance.list_body8")}
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  {t("distance.list_body9")}
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {t("distance.body1")}
              </h3>
              <p className="text-blue-900">
                {t("distance.body2")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Distance;
