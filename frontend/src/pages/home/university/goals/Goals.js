import React from "react";
import Header from "../../../header2/Header";
import Footer from "../../../footer/Footer";
import SidebarRight from "../sidebarright/SidebarRight";
import bgImage from "../../../../images/header2.jpg";
import { useTranslation } from "react-i18next";

function Goals() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header Section */}
      <div
        className="w-full h-36 xl:h-72 md:h-48 bg-cover bg-center text-center relative"
        style={{
          backgroundImage: ` url(${bgImage})`,
          borderBottomRightRadius: "60px",
          borderBottomLeftRadius: "60px",
        }}
      >
        <Header />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h2 className="text-white text-3xl lg:text-4xl font-bold drop-shadow-lg">
            {/*{t("rektorat.title")}*/}
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow container mx-auto px-4 py-12">
        <div className="flex flex-wrap -mx-2">
          {/* Main Content (2/3 width) */}
          <div className="w-full xl:w-2/3 px-2 mt-14">
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-blue-100 pb-2">
                  {t("goals.text")}
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {t("goals.text1")}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-400">
                    <h3 className="text-lg font-semibold text-blue-700 mb-2">
                      {t("goals.text2")}
                    </h3>
                    <p className="text-gray-700">
                      {t("goals.text3")}  
                    </p>
                  </div>
                  <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-400">
                    <h3 className="text-lg font-semibold text-blue-700 mb-2">
                      {t("goals.text4")}
                    </h3>
                    <p className="text-gray-700">
                      {t("goals.text5")}
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-400 mb-6">
                  <h3 className="text-lg font-semibold text-yellow-700 mb-2">
                    {t("goals.text6")}
                  </h3>
                  <p className="text-gray-700">
                    {t("goals.text7")}
                  </p>
                </div>
              </div>

              <div className="bg-blue-100 p-6 rounded-lg border-l-4 border-blue-600 mb-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  {t("goals.text8")}
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white p-2 rounded-full mr-4 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 mb-1">
                        {t("goals.text9")}
                      </h4>
                      <p className="text-gray-700">
                       {t("goals.text10")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white p-2 rounded-full mr-4 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 mb-1">
                        {t("goals.text11")}
                      </h4>
                      <p className="text-gray-700">
                        {t("goals.text12")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white p-2 rounded-full mr-4 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 mb-1">
                        {t("goals.text13")}
                      </h4>
                      <p className="text-gray-700">
                        {t("goals.text14")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  {t("goals.text15")}
                </h3>
                <p className="text-gray-700">
                  {t("goals.text16")}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Right */}
          <SidebarRight />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Goals;
