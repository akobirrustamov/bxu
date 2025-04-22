import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import bgImage from "../../images/header2.jpg";
import { useTranslation } from 'react-i18next';

const Exam = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className={"bg-slate-50"}>
           
            <div
                className="w-full h-72 bg-cover bg-center text-center  text-white"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    borderBottomRightRadius: "60px",
                    borderBottomLeftRadius: "60px"
                }}
            >
                 <Header />

                <div className={"header_title"}>
                    <h2 className="my-2">
                        {t("exam.title")}
                    </h2>
                </div>
            </div>
            <div className="p-30 pt-0 flex flex-wrap gap-0 ">
                <div className="lg:w-1/2 md:w-full p-3">
                    <div className={"bg-white text-black shadow-md rounded-lg p-6 mt-6"}>
                        <h5 className="text-2xl font-semibold mb-4"> {t("exam.card1_title")}</h5>
                        <div className="leading-3">
                            <p>{t("exam.card1_item1")}</p>
                            <hr/>
                            <p>{t("exam.card1_item2")}</p>
                            <hr/>
                            <p>{t("exam.card1_item3")}</p>
                            <hr/>
                            <p>{t("exam.card1_item4")}</p>

                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 md:w-full p-3">
                    <div className={"bg-white shadow-md rounded-lg p-6 mt-6"}>
                        <h5 className="text-xl font-semibold mb-4">{t("exam.card2_title")}</h5>
                        <div className="leading-3">
                            <p>{t("exam.card2_item1")}</p>
                            <hr/>
                            <p>{t("exam.card2_item2")}</p>
                            <hr/>
                            <p>{t("exam.card2_item3")}</p>
                            <hr/>
                            <p>{t("exam.card2_item4")}</p>

                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Exam;
