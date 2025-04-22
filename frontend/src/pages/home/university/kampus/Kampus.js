import React, { useState } from "react";
import Footer from "../../../footer/Footer";
import bgImage from "../../../../images/header2.jpg";
import { useTranslation } from "react-i18next";
import Table from "react-bootstrap/Table";
import Zoom from "react-reveal/Zoom";
import bino2 from "../../img/bino22.png";
import bino1 from "../../img/bino1.jpg";
import bino3 from "../../img/bino3.jpg";
import bino4 from "../../img/bino4.png";
import Header from "../../../header2/Header";


const KampusUniversity = () => {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(true);

  return (
    <div className={""}>
      <div
        className="w-full h-72 bg-cover bg-center text-center  text-white"
        style={{
          backgroundImage: `url(${bgImage})`,
          borderBottomRightRadius: "60px",
          borderBottomLeftRadius: "60px",
        }}
      >
        <Header />

        <div className={"header_title"}>
          <h2 className="my-2">{t("campuses.title")}</h2>
        </div>
      </div>
      <div className="galereya w-full ">
        <section
          id="facilities"
          className="position-relative padding-medium my-4 mb-10"
        >
          <div className="text-center wow fadeInUp " data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center  px-3">
              {t("kampus.header")}
            </h6>
            <h1 className="mb-2">{t("kampus.title")}</h1>
          </div>
          <div className={""}>
            <div className="leading-3 m-auto  border-2 p-8 rounded w-1/2    ">
              <div className={"flex justify-between"}>
                <b>{t("campuses.card_item1")}</b>
                <span>3 {t("campuses.data1")}</span>
              </div>
              <hr />
              <div className={"flex justify-between"}>
                <b>{t("campuses.card_item2")}</b>
                <span>5 {t("campuses.data2")}</span>
              </div>
              <hr />
              <div className={"flex justify-between"}>
                <b>{t("campuses.card_item3")}</b>
                <span>40 {t("campuses.data3")}</span>
              </div>
              <hr />
              <div className={"flex justify-between"}>
                <b>{t("campuses.card_item4")}</b>
                <span>250 {t("campuses.data4")}</span>
              </div>
              <hr />
              <div className={"flex justify-between"}>
                <b>{t("campuses.card_item5")}</b>
                <span>300 {t("campuses.data5")}</span>
              </div>
              <hr />
              <div className={"flex justify-between"}>
                <b>{t("campuses.card_item6")}</b>
                <span>{t("campuses.data6")}</span>
              </div>
              <hr />
            </div>

            <div className="container-fluid">
              <div className="row g-3 mt-3 mt-lg-0">
                {/* Cafeteria */}
                <Zoom>
                  <div className="col-md-6 text-center">
                    <div className="product-item position-relative bg-black overflow-hidden">
                      <img
                        src={bino2}
                        className="post-image img-fluid"
                        alt="Cafeteria"
                      />
                      <div className="product-description position-absolute top-50 start-50 translate-middle p-3">
                        <h3 className="mb-2 display-6 text-white">
                          {t("kampus.bn1")}
                        </h3>
                        <p className="product-paragraph d-none d-lg-block m-0 text-white">
                          {t("kampus.bn1_text")}
                        </p>
                        <a href="#">
                          <p className="text-decoration-underline text-white m-0 mt-2">
                            {t("batafsil.title")}
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </Zoom>

                {/* Classes */}
                <Zoom>
                  <div className="col-md-6 text-center">
                    <div className="product-item position-relative bg-black overflow-hidden">
                      <img
                        src={bino1}
                        className="post-image img-fluid"
                        alt="Classes"
                      />
                      <div className="product-description position-absolute top-50 start-50 translate-middle p-3">
                        <h3 className="mb-2 display-6 text-white">
                          {t("kampus.bn2")}
                        </h3>
                        <p className="product-paragraph d-none d-lg-block m-0 text-white">
                          {t("kampus.bn2_text")}
                        </p>
                        <a href="#">
                          <p className="text-decoration-underline text-white m-0 mt-2">
                            {t("batafsil.title")}
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </Zoom>

                {/* Environment */}
                <Zoom>
                  <div className="col-md-6 text-center">
                    <div className="product-item position-relative bg-black overflow-hidden">
                      <img
                        src={bino4}
                        className="post-image img-fluid"
                        alt="Library"
                      />
                      <div className="product-description position-absolute top-50 start-50 translate-middle p-3">
                        <h3 className="mb-2 display-6 text-white">
                          {t("kampus.bn3")}
                        </h3>
                        <p className="product-paragraph d-none d-lg-block m-0 text-white">
                          {t("kampus.bn3_text")}
                        </p>
                        <a href="#">
                          <p className="text-decoration-underline text-white m-0 mt-2">
                            {t("batafsil.title")}
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </Zoom>

                {/* Library */}
                <Zoom>
                  <div className="col-md-6 text-center">
                    <div className="product-item position-relative bg-black overflow-hidden">
                      <img
                        src={bino3}
                        className="post-image img-fluid"
                        alt="Environment"
                      />
                      <div className="product-description position-absolute top-50 start-50 translate-middle p-3">
                        <h3 className="mb-2 display-6 text-white">
                          {t("kampus.bn4")}
                        </h3>
                        <p className="product-paragraph d-none d-lg-block m-0 text-white">
                          {t("kampus.bn4_text")}
                        </p>
                        <a href="#">
                          <p className="text-decoration-underline text-white m-0 mt-2">
                            {t("batafsil.title")}
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </Zoom>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default KampusUniversity;
