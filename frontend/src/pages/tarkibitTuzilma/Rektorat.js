import React from 'react';
import Header from "../header/Header";
import bgImage from "../../images/header2.jpg";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.png";
import pattern1 from "./img/pattern1.png";
import Zoom from "react-reveal/Zoom";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Footer from "../footer/Footer";
import newImg from "./img/new.jpg"

import { useTranslation } from 'react-i18next';


function Rektorat(props) {
    const { t } = useTranslation();

    return (
        <div
            className="w-full h-72 bg-[#DCDCDC] bg-cover bg-center text-center text-black"
            style={{
                backgroundImage: `url(${bgImage})`,
                borderBottomRightRadius: "60px",
                borderBottomLeftRadius: "60px",
            }}
        >
            <Header />
            <div className="header_title">
                <h2 className="my-4 text-white text-3xl lg:text-4xl">{t('rektorat.title')}</h2>
            </div>

            <div className="my-16 my-36">
                <section id="founder" className="position-relative">
                    <div className="text-center">
                        <h6 className="section-title bg-white text-center px-3 text-lg md:text-xl">
                            {t('rektorat.header')}

                        </h6>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                            {t('rektorat.rector')}
                        </h1>
                    </div>

                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center">
                            <div className="w-full md:w-1/2 p-4 pt-0 ">
                                <Zoom>
                                    <img
                                        className="img-fluid rounded w-full h-auto"
                                        src={img1}
                                        alt="Rektor"
                                    />
                                </Zoom>
                            </div>
                            <div className="w-full md:w-1/2 p-4 text-black text-start">
                                <Zoom>
                                    <p className="text-xl md:text-2xl lg:text-3xl">

                                        {t('rektorat.text')}

                                    </p>
                                </Zoom>
                                <div className={" text-start "}>
                                    <div className="flex-wrap flex gap-2  ">
                                        <Zoom>
                                            <div
                                                className="border-double mb-2 text-start border-5 border-[#004C88] hover:border-white  text-[#004C88]  rounded-lg hover:bg-[#004C88] hover:text-white">
                                                <div className={"px-2"}>
                                                    <div className="flex items-baseline gap-1 justify-start">
                                                        <i className="fa-solid fa-envelope"></i>

                                                        <p className="font-semibold p-0 m-0"> {t('rektorat.contact1')}</p>
                                                    </div>
                                                    <div className={"m-0 "}>
                                                        <p className="text-start font-medium m-0">buxpxti@gmail.com</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Zoom>
                                        <Zoom>
                                            <div
                                                className="border-double mb-2 text-start border-5 border-[#004C88] hover:border-white  text-[#004C88]  rounded-lg hover:bg-[#004C88] hover:text-white">
                                                <div className={"px-2"}>
                                                    <div className="flex items-baseline gap-1 justify-start">
                                                        <i className="fa-solid fa-phone"></i>
                                                        <p className="font-semibold p-0 m-0"> {t('rektorat.contact2')}</p>
                                                    </div>
                                                    <div className={"m-0 "}>
                                                        <p className="text-start font-medium m-0">+998 55 309-99-99</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Zoom>
                                        <Zoom>
                                            <div
                                                className="border-double mb-2 text-start border-5 border-[#004C88] hover:border-white  text-[#004C88]  rounded-lg hover:bg-[#004C88] hover:text-white">
                                                <div className={"px-2"}>
                                                    <div className="flex items-baseline gap-1 justify-start">
                                                        <i className="fa-solid fa-calendar"></i>
                                                        <p className="font-semibold p-0 m-0">
                                                            <p className="font-semibold p-0 m-0"> {t('rektorat.contact3')}</p>
                                                        </p>
                                                    </div>
                                                    <div className={"m-0 "}>
                                                        <p className="text-start font-medium m-0 text-[14]">
                                                            {t('rektor.info')}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Zoom>


                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </section>

                <div
                    className="bg-white shadow-xl flex my-2 flex-col border-double md:flex-row gap-4 rounded-xl  w-11/12 md:w-2/3 lg:w-1/2 mx-auto">
                    <img className="rounded-l-xl w-full md:w-1/3" src={img2}/>
                    <div className="p-4">
                        <h3>{t('rektorat.title1')}</h3>
                        <p className={"flex text-xl align-baseline gap-2"}>
                            <svg className="h-8 w-8 text-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                <circle cx="12" cy="7" r="4"/>
                            </svg>
                            {t('rektorat.pro_rector1')}


                        </p>


                        <p className={"flex text-2xl align-baseline gap-2 font-bold"}>
                            {t('rektorat.text1')}

                        </p>
                        <p className={"flex text-2xl align-baseline gap-2 font-bold"}>

                            {t('rektorat.rank')}
                        </p>

                    </div>
                </div>

                <div
                    className="bg-white shadow-xl flex flex-col border-double md:flex-row gap-4 rounded-xl  w-11/12 md:w-2/3 lg:w-1/2 mx-auto">
                    <img className="rounded-l-xl w-full md:w-1/3" src={img3}/>
                    <div className="p-4">
                        <h3>{t('rektorat.title2')}</h3>
                        <p className={"flex text-xl align-baseline gap-2"}>
                            <svg className="h-8 w-8 text-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                <circle cx="12" cy="7" r="4"/>
                            </svg>
                            {t('rektorat.pro_rector2')}
                        </p>


                        <p className={"flex text-2xl align-baseline gap-2 font-bold"}>
                            {t('rektorat.text2')}
                        </p>

                    </div>
                </div>

            </div>

            <Footer/>
        </div>
    )
        ;
}

export default Rektorat;
