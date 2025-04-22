import React from 'react';
// import "./GoalsAndValues.css";
import Header from "../header/Header";
import bgImage from "../../images/header2.jpg";
import Footer from "../footer/Footer"; // Import CSS if you need custom styles
import { useTranslation } from 'react-i18next';


const PurposeMission = () => {
    const { t } = useTranslation();
    const values = [
        {
            title: `${t('purpose.card1_title')}`,
            content: `${t('purpose.card1_text')}`,
            icon: <svg className="h-10 w-10 text-pink-500" width="30" height="30" viewBox="0 0 24 24" stroke-width="2"
                       stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <circle cx="12" cy="12" r="1"/>
                <circle cx="12" cy="12" r="5"/>
                <circle cx="12" cy="12" r="9"/>
            </svg>,
            width: "lg:w-1/2 md:w-full",
            // Responsive width classes
        },
        {
            title: `${t('purpose.card2_title')}`,
            content: `${t('purpose.card2_text')}`,
            icon: <svg className="h-10 w-10 text-pink-500" width="30" height="30" viewBox="0 0 24 24" stroke-width="2"
                       stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <rect x="4" y="4" width="16" height="16" rx="2"/>
                <path d="M9 12l2 2l4 -4"/>
            </svg>,
            width: "lg:w-1/2 md:w-full"
        },
        {
            title: `${t('purpose.card3_title')}`,
            content:`${t('purpose.card3_text')}`,
            icon: <svg className="h-10 w-10 text-pink-500" width="30" height="30" viewBox="0 0 24 24" stroke-width="2"
                       stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5"/>
                <path d="M10 12l-2 -2.2l.6 -1"/>
            </svg>,
            width: "lg:w-1/3 md:w-full "
        },
        {
            title: `${t('purpose.card4_title')}`,
            content: `${t('purpose.card4_text')}`,
            icon: <svg className="h-10 w-10 text-pink-500" width="30" height="30" viewBox="0 0 24 24" stroke-width="2"
                       stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5"/>
                <path d="M10 12l-2 -2.2l.6 -1"/>
            </svg>,
            width: "lg:w-1/3 md:w-full"
        },
        {
            title: `${t('purpose.card5_title')}`,
            content:`${t('purpose.card5_text')}`,
            icon: <svg className="h-10 w-10 text-pink-500" width="30" height="30" viewBox="0 0 24 24" stroke-width="2"
                       stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5"/>
                <path d="M10 12l-2 -2.2l.6 -1"/>
            </svg>,
            width: "lg:w-1/3 md:w-full"
        },
        {
            title: `${t('purpose.card6_title')}`,
            content: `${t('purpose.card6_text')}`,
            icon: <svg className="h-10 w-10 text-pink-500" width="30" height="30" viewBox="0 0 24 24" stroke-width="2"
                       stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5"/>
                <path d="M10 12l-2 -2.2l.6 -1"/>
            </svg>,
            width: "lg:w-1/2 md:w-full"
        },
        {
            title: `${t('purpose.card7_title')}`,
            content: `${t('purpose.card7_text')}`,
            icon: <svg className="h-10 w-10 text-pink-500" width="30" height="30" viewBox="0 0 24 24" stroke-width="2"
                       stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5"/>
                <path d="M10 12l-2 -2.2l.6 -1"/>
            </svg>,
            width: "lg:w-1/2 md:w-full"
        }
    ];

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
                    <h2 className={"my-2"}>
                        {t('purpose.title')}
                    </h2>
                </div>
            </div>

            <div className={"p-3"}>
                <div className="flex flex-wrap justify-center gap-0 p-5">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className={` ${value.width} my-3 p-2`}
                        >
                            <div className={"bg-white shadow-md rounded-lg h-full  flex items-start gap-3 "}>

                                <div className={"p-3"}>
                                    <div className={"flex gap-1"}>
                                        {value.icon}
                                        <h4 className="font-semibold my-1">{value.title}</h4>
                                    </div>

                                    <p className="mt-2">{value.content}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default PurposeMission;
