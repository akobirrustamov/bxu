import React from "react";
import Hearder from "../../../header2/Header";
import Footer from "../../../footer/Footer";
import img1 from "./image.jpg";
import { useTranslation } from "react-i18next";

function AssociationStudent() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Hearder />

      <main className="flex-grow container mx-auto px-4 py-8 mt-14 max-w-6xl">
        {/* LEADER PROFILE */}
        <div className="text-center mb-8 p-6 rounded-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
            {t("association.title")}
          </h1>
          <div className="flex justify-center mb-4">
            <img
              src={img1}
              alt="O'zbekiston yoshlar ittifoqi"
              className="object-cover rounded-xl border-4 h-[400px] border-blue-200"
            />
          </div>

        </div>
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
            {t("association.name")}
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            {t("association.description1")}
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-4">
            {t("association.title1")}
          </h3>

          <h5 className="text-lg text-gray-700 mb-6 leading-relaxed">
            {t("association.title1_description")}
          </h5>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              {t("association.title2")}
            </h3>

            <ul className="space-y-3 list-disc pl-5 text-gray-700">
              <li className="leading-relaxed">
                {t("association.title2_list1")}
              </li>
              <li className="leading-relaxed">
                {t("association.title2_list2")}
              </li>
              <li className="leading-relaxed">
                {t("association.title2_list3")}
              </li>
              <li className="leading-relaxed">
                {t("association.title2_list4")}
              </li>
              <li className="leading-relaxed">
                {t("association.title2_list5")}
              </li>
              <li className="leading-relaxed">
                {t("association.title2_list6")}
              </li>
              <li className="leading-relaxed">
                {t("association.title2_list7")}
              </li>
              <li className="leading-relaxed">
                {t("association.title2_list8")}
              </li>
              <li className="leading-relaxed">
                {t("association.title2_list9")}
              </li>
              <li className="leading-relaxed">
                {t("association.title2_list10")}
              </li>
              <li className="leading-relaxed">
                {t("association.title2_list11")}
              </li>
              <li className="leading-relaxed">
                {t("association.title2_list12")}
              </li>
              <li className="leading-relaxed">
                {t("association.title2_list13")}
              </li>
              <li className="leading-relaxed">
                {t("association.title2_list14")}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              {t("association.title3")}
            </h3>

            <p className="text-gray-700 mb-4">
              {t("association.title3_head")}
            </p>

            <ul className="space-y-3 list-disc pl-5 text-gray-700">
              <li className="leading-relaxed">
                {t("association.title3_list1")}
              </li>
              <li className="leading-relaxed">
                {t("association.title3_list2")}
              </li>
              <li className="leading-relaxed">
                {t("association.title3_list3")}
              </li>
              <li className="leading-relaxed">
                {t("association.title3_list4")}
              </li>
              <li className="leading-relaxed">
                {t("association.title3_list5")}
              </li>
              <li className="leading-relaxed">
                {t("association.title3_list6")}
              </li>
              <li className="leading-relaxed">
                {t("association.title3_list7")}
              </li>
              <li className="leading-relaxed">
                {t("association.title3_list8")}
              </li>
              <li className="leading-relaxed">
                {t("association.title3_list9")}
              </li>
              <li className="leading-relaxed">
                {t("association.title3_list10")}
              </li>
              <li className="leading-relaxed">
                {t("association.title3_list11")}
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {/* ITTIFOQ A'ZOLARINING HUQUQLARI */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              {t("association.title4")}
            </h3>
            <ul className="space-y-3 list-disc pl-5 text-gray-700">
              <li className="leading-relaxed">
                {t("association.title4_list1")}
              </li>
              <li className="leading-relaxed">
                {t("association.title4_list2")}
              </li>
              <li className="leading-relaxed">
                {t("association.title4_list3")}
              </li>
              <li className="leading-relaxed">
                {t("association.title4_list4")}
              </li>
              <li className="leading-relaxed">
                {t("association.title4_list5")}
              </li>
            </ul>
          </div>

          {/* ITTIFOQ A'ZOLARINING ASOSIY MAJBURIYATLARI */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              {t("association.title5")}
            </h3>
            <ul className="space-y-3 list-disc pl-5 text-gray-700">
              <li className="leading-relaxed">
                {t("association.title5_list1")}
              </li>
              <li className="leading-relaxed">
                {t("association.title5_list2")}
              </li>
              <li className="leading-relaxed">
                {t("association.title5_list3")}
              </li>
              <li className="leading-relaxed">
                {t("association.title5_list4")}
              </li>
            </ul>
          </div>

          {/* BOSHLANG'ICH TASHKILOT FAOLIYATINING ASOSIY YO'NALISHLARI */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              {t("association.title6")}
            </h3>
            <p className="text-gray-700 leading-relaxed">
            {t("association.title6_description")}
            </p>
          </div>

          {/* KENGASH TARKIBI */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
            {t("association.title7")}
            </h3>
            <ul className="space-y-3 list-decimal pl-5 text-gray-700">
              <li className="leading-relaxed">
              {t("association.title7_list1")}
              </li>
              <li className="leading-relaxed">
              {t("association.title7_list2")}
              </li>
              <li className="leading-relaxed">
              {t("association.title7_list3")}
              </li>
              <li className="leading-relaxed">
              {t("association.title7_list4")}
              </li>
              <li className="leading-relaxed">
              {t("association.title7_list5")}
              </li>
              <li className="leading-relaxed">
              {t("association.title7_list6")}
              </li>
              <li className="leading-relaxed">
              {t("association.title7_list7")}
              </li>
              <li className="leading-relaxed">
              {t("association.title7_list8")}
              </li>
              <li className="leading-relaxed">
              {t("association.title7_list9")}
              </li>
              <li className="leading-relaxed">
              {t("association.title7_list10")}
              </li>
              <li className="leading-relaxed">
              {t("association.title7_list11")}
              </li>
              <li className="leading-relaxed">
              {t("association.title7_list12")}
              </li>
              <li className="leading-relaxed">
              {t("association.title7_list13")}
              </li>
            </ul>
          </div>

          {/* TO'GARAKLAR VA KLUBLAR */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
            {t("association.title8")}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc pl-5 text-gray-700">
              <li className="leading-relaxed">
              {t("association.title8_list1")}
              </li>
              <li className="leading-relaxed">
              {t("association.title8_list2")}
              </li>
              <li className="leading-relaxed">{t("association.title8_list3")}</li>
              <li className="leading-relaxed">{t("association.title8_list4")}</li>
              <li className="leading-relaxed">
              {t("association.title8_list5")}
              </li>
              <li className="leading-relaxed">{t("association.title8_list6")}</li>
              <li className="leading-relaxed">{t("association.title8_list7")}</li>
              <li className="leading-relaxed">{t("association.title8_list8")}</li>
              <li className="leading-relaxed">{t("association.title8_list9")}</li>
              <li className="leading-relaxed">
              {t("association.title8_list10")}
              </li>
            </ul>
          </div>


        </div>
      </main>

      <Footer />
    </div>
  );
}

export default AssociationStudent;
