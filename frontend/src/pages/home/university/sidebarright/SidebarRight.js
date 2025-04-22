import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

function SidebarRight(props) {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <div className="w-full xl:w-1/3 px-4 mt-14">
      <div className="bg-gradient-to-b from-blue-800 to-blue-900 rounded-lg shadow-xl p-6 border border-blue-700">
        <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-blue-600">
          Foydali havolalar
          <span className="block w-12 h-1 bg-blue-400 mt-2 rounded-full"></span>
        </h2>

        <ul className="space-y-3">
          {/* University Section */}
          <li>
            <p className="font-bold text-white text-lg mb-2 flex items-center">
              <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
              {t('university.title')}
            </p>
            <ul className="ml-5 space-y-2 border-l-2 border-blue-700 pl-4">
              <li>
                <Link
                    to="/university/about"
                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/about'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                    title="Learn more about our university"
                >
                  <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                  {t('university.about.title')}
                </Link>
              </li>
              <li>
                <Link
                    to="/university/rector-appeal"
                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/rector-appeal'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                    title="Read the rector's message"
                >
                  <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                  {t('university.about.rectorAddress')}
                </Link>
              </li>
              <li>
                <Link
                    to="/university/aim"
                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/aim'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                    title="Our mission and vision"
                >
                  <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                  {t('university.about.goals')}
                </Link>
              </li>

              <li>
                <Link
                    to="/university/aim"
                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/aim'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                    title="Our mission and vision"
                >
                  <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                  {t('university.about.qualitySystem')}
                </Link>
              </li>

              <li>
                <Link
                    to="/university/aim"
                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/aim'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                    title="Our mission and vision"
                >
                  <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                  {t('university.about.facts')}
                </Link>
              </li>

              <li>
                <Link
                    to="/university/aim"
                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/aim'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                    title="Our mission and vision"
                >
                  <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                  {t('university.about.codeOfConduct')}
                </Link>
              </li>

            </ul>
          </li>

          {/* Rector Office Section */}
          <li className="mt-5">
            <p className="font-bold text-white text-lg mb-2 flex items-center">
              <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
              {t('university.rectorOffice.title')}
            </p>
            <ul className="ml-5 space-y-2 border-l-2 border-blue-700 pl-4">
              <li>
                <Link
                    to="/university/rector"
                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/rector'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                    title="About our rector"
                >
                  <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                  {t('university.rectorOffice.rector')}
                </Link>
              </li>
              <li>
                <Link
                    to="/university/prorector"
                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/prorector'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                    title="Meet our vice rectors"
                >
                  <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                  {t('university.rectorOffice.viceRectors')}
                </Link>
              </li>
            </ul>
          </li>

          {/* Staff Section */}
          <li className="mt-5">
            <p className="font-bold text-white text-lg mb-2 flex items-center">
              <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
              {t('university.rectorOffice.staff')}
            </p>
            <ul className="ml-5 space-y-2 border-l-2 border-blue-700 pl-4">
              <li>
                <Link
                    to="/university/head"
                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/head'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                    title="Department heads information"
                >
                  <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                  {t('university.rectorOffice.departmentHeads')}
                </Link>
              </li>
              <li>
                <Link
                    to="/university/professors"
                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/professors'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                    title="Our teaching staff"
                >
                  <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                  {t('university.rectorOffice.professors')}
                </Link>
              </li>
            </ul>
          </li>

          {/* Infrastructure Section */}
          <li className="mt-5">
            <p className="font-bold text-white text-lg mb-2 flex items-center">
              <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
              {t('university.infrastructure.title')}
            </p>
            <ul className="ml-5 space-y-2 border-l-2 border-blue-700 pl-4">
              <li>
                <Link
                    to="/university/data-center"
                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/data-center'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                    title="Our technical facilities"
                >
                  <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                  {t('university.infrastructure.dataCenter')}
                </Link>
              </li>
              <li>
                <Link
                    to="/university/campuses"
                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/campuses'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                    title="University buildings and locations"
                >
                  <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                  {t('university.infrastructure.buildings')}
                </Link>
              </li>
              <li>
                <Link
                    to="/university/dormitory"
                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/dormitory'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                    title="Student accommodation"
                >
                  <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                  {t('university.infrastructure.dormitory')}
                </Link>
              </li>
            </ul>
          </li>
        </ul>


      </div>

    </div>
  );
}

export default SidebarRight;
