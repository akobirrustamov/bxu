import React from "react";
import bino1 from "../../img/bino1.jpg";
import bino2 from "../../img/bino2.jpg";
import Headers from "../../../header2/Header";
import Footer from "../../../footer/Footer";
import { useTranslation } from "react-i18next";
function ContactUsUniversity() {
  const { t } = useTranslation();
  const staffList = t("contactUs.staffList", { returnObjects: true });

  // Common reception time and day for all staff
  const commonReceptionTime = "15:00 - 17:00";
  const commonReceptionDay = t("contactUs.days");
  return (
    <div className="bg-gray-50 min-h-screen">
      <div>
        <Headers />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3258] leading-tight md:my-8 mt-12">
            {t("contactUs.title")}
          </h1>

          <div className="flex flex-col gap-8 md:flex-row lg:gap-12">
            <ContactCard
              image={bino1}
              title={t("contactUs.contactCard.title1")}
              address={t("contactUs.contactCard.address1")}
              phone="+998 55 309-99-99"
              fax="+998 55 309-99-99"
              email="buxpxti@gmail.com"
              website="https://buxpxti.uz/"
            />
            <ContactCard
              image={bino2}
              title={t("contactUs.contactCard.title2")}
              address={t("contactUs.contactCard.address2")}
              phone="+998 55 305-55-55"
              fax="+998 55 309-99-99"
              email="buxpxti@gmail.com"
              website="https://buxpxti.uz/"
            />
          </div>
        </div>
      </div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1e3258] mb-4">
            {t("contactUs.header")}
          </h1>
          <div className="w-24 h-1 bg-[#1e3258] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            {t("contactUs.header1")}
            {" "}
            <a
              href="mailto:buxpxti@gmail.com"
              className="text-blue-600 hover:underline"
            >
              buxpxti@gmail.com
            </a>{" "}
            {t("contactUs.header2")}
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-blue-50 rounded-xl p-6 mb-10 max-w-2xl mx-auto">
          <h4 className="text-xl font-semibold text-[#1e3258] mb-2">
            {t("contactUs.header3")}
          </h4>
          <a
            href="tel:+998907119697"
            className="text-lg text-blue-600 hover:underline flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
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
            +998 90 711 96 97
          </a>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#1e3258]">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider"
                  >
                    {t("contactUs.table_section1")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider"
                  >
                    {t("contactUs.table_section2")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider"
                  >
                    {t("contactUs.table_section3")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider"
                  >
                    {t("contactUs.table_section4")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider"
                  >
                    {t("contactUs.table_section5")}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">


                {staffList && staffList.map((staff) => (
                  <tr
                    key={staff.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base text-gray-800 font-medium">
                      {staff.fio}
                    </td>
                    <td className="px-6 py-4 text-sm md:text-base text-gray-600">
                      {staff.lavozimi}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base text-gray-600">
                      {commonReceptionTime}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base text-gray-600">
                      {commonReceptionDay}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base">
                      <a
                        href={`tel:${staff.telefon.replace(/\D/g, "")}`}
                        className="text-blue-600 hover:underline flex items-center"
                      >
                        <svg
                          className="w-4 h-4 mr-1"
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
                        {staff.telefon}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* maps section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#1e3258] mb-4">
            {t("contactUs.ourAddress")}
          </h2>
          <div className="w-24 h-1 bg-[#1e3258] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            {t("contactUs.ourAddress1")}
          </p>
        </div>

        {/* Responsive Google Maps iframe */}
        <div
          className="relative overflow-hidden rounded-xl shadow-lg"
          style={{ paddingBottom: "40.25%" }}
        >
          <iframe
            title="BXU Universiteti joylashuvi"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.090554261754!2d64.431045!3d39.809328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ4JzMzLjYiTiA2NMKwMjUnNTEuOCJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          ></iframe>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
          {t("contactUs.ourAddress2")}
          </p>
          <p className="mt-2">
            <a
              href="https://www.google.com/maps?ll=39.809328,64.431045&z=15&t=m&hl=ru&gl=US&mapclient=embed&cid=10524148750696398424"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {t("contactUs.ourAddress3")}
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function ContactCard({ image, title, address, phone, fax, email, website }) {
  const { t } = useTranslation();
  const addressLabel = t("contactUs.contactCard.address_label");
  const phoneLabel = t("contactUs.contactCard.telefon_label");
  const faxLabel = t("contactUs.contactCard.fax_label");
  const websiteLabel = t("contactUs.contactCard.website_label");
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover transition-transform duration-500 hover:scale-105"
      />
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1e3258] mb-4">
          {title}
        </h2>
        <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
          <ContactItem label={addressLabel} value={address} />
          <ContactItem label={phoneLabel} value={phone} />
          <ContactItem label={faxLabel} value={fax} />
          <ContactItem label="E-mail" value={email} />
          <ContactItem
            label={websiteLabel}
            value={
              <a
                href={website}
                className="text-blue-600 hover:underline break-words"
                target="_blank"
                rel="noopener noreferrer"
              >
                {website}
              </a>
            }
          />
        </div>
      </div>


    </div>
  );
}

function ContactItem({ label, value }) {
  return (
    <div className="flex items-start">
      <span className="font-semibold text-gray-800">{label}: </span>
      <span className="text-gray-600 ml-2 break-words">{value}</span>
    </div>
  );
}

export default ContactUsUniversity;
