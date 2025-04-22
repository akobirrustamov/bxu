import React from 'react';
// import "./GoalsAndValues.css";
import Header from "../header/Header";
import bgImage from "../../images/header2.jpg";
import Footer from "../footer/Footer";
import TablePage from "../tablePage/TablePage";
import {useTranslation} from "react-i18next"; // Import CSS if you need custom styles


const Faculty = () => {
    const { t } = useTranslation();

    return (
        <div className={"bg-slate-50"}>

            <div
                className="  w-full h-72 bg-cover bg-center bg-scroll	text-center  text-white "
                style={{
                    backgroundImage: `url(${bgImage})`,
                    borderBottomRightRadius: "60px",
                    borderBottomLeftRadius: "60px"
                }}
            >
                <Header/>
                <div className={"header_title"}>
                    <h2 className={""}>
                        {t('faculties.title')}
                    </h2>
                    <p className={"text-xl"}>{t('faculties.descr')}</p>
                </div>
            </div>
            <div className={"p-4"}>
                <TablePage/>
            </div>


            <Footer/>
        </div>
    );
};

export default Faculty;
