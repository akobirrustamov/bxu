import React, {useState} from 'react';
import Header from "../../../header2/Header.js";
import bgImage from "../../../../images/header2.jpg";
import img4 from "./img/img4.png";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.png";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Footer from "../../../footer/Footer";
import newImg from "./img/new.jpg"

import { useTranslation } from 'react-i18next';
import {Modal} from "react-responsive-modal";
import { Link, useLocation } from 'react-router-dom';
import SidebarRight from "../sidebarright/SidebarRight";

function ProRectorUniversity(props) {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
    const location = useLocation();
    const handleImageClick = (image) => {
        setCurrentImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div
            className="w-full   h-36 xl:h-72 md:h-48 bg-[#DCDCDC] bg-cover bg-center text-center text-black"
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
            <div className="container mx-auto  py-12 pb-32">
                <div>
                    <div className=" flex flex-wrap mt-8 ">
                        {/* Main Content (2/3 width) */}
                        {/* Main Content (2/3 width) */}
                        <div className="w-full xl:w-2/3 p-2">
                            <div className="my-12 space-y-8">
                                {/* First Pro-Rector Card */}
                                <div className="bg-white shadow-2xl flex flex-col md:flex-row gap-6 rounded-xl overflow-hidden border border-gray-200 w-full max-w-4xl mx-auto hover:shadow-lg transition-shadow duration-300">
                                    <div className="w-full md:w-1/3">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={img2}
                                            alt={t('rektorat.pro_rector1')}
                                        />
                                    </div>
                                    <div className="p-6 flex-1">
                                        <h3 className="text-xl font-bold text-blue-800 mb-2">{t('rektorat.title1')}</h3>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="bg-blue-100 p-2 rounded-full">
                                                <svg className="h-6 w-6 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="12" cy="7" r="4"/>
                                                </svg>
                                            </div>
                                            <p className="text-lg font-medium text-gray-800">{t('rektorat.pro_rector1')}</p>
                                        </div>

                                        <p className="text-lg text-gray-700 mb-4 font-semibold text-start">
                                            {t('rektorat.text1')}
                                        </p>
                                        <p className="text-lg text-gray-700 mb-6 font-semibold">
                                            {t('rektorat.rank1')}
                                        </p>

                                        {/* Contact Information */}
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <MdOutlineEmail className="text-blue-600 text-xl" />
                                                <span className="text-gray-700">prorector1@university.edu</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                                <span className="text-gray-700">+998 91 831 25 11</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="text-gray-700">{t('rektor.info')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Second Pro-Rector Card */}
                                <div className="bg-white shadow-2xl flex flex-col md:flex-row gap-6 rounded-xl overflow-hidden border border-gray-200 w-full max-w-4xl mx-auto hover:shadow-lg transition-shadow duration-300">
                                    <div className="w-full md:w-1/3">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={img3}
                                            alt={t('rektorat.pro_rector2')}
                                        />
                                    </div>
                                    <div className="p-6 flex-1">
                                        <h3 className="text-xl font-bold text-blue-800 mb-2">{t('rektorat.title2')}</h3>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="bg-blue-100 p-2 rounded-full">
                                                <svg className="h-6 w-6 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="12" cy="7" r="4"/>
                                                </svg>
                                            </div>
                                            <p className="text-lg font-medium text-gray-800">{t('rektorat.pro_rector2')}</p>
                                        </div>

                                        <p className="text-lg text-gray-700 mb-6 font-semibold text-start">
                                            {t('rektorat.text2')}
                                        </p>

                                        {/* Contact Information */}
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <MdOutlineEmail className="text-blue-600 text-xl" />
                                                <span className="text-gray-700">prorector2@university.edu</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                                <span className="text-gray-700">+998 91 447 05 04</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="text-gray-700">{t('rektor.info')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                {/* 3 Pro-Rector Card */}
                                <div className="bg-white shadow-2xl flex flex-col md:flex-row gap-6 rounded-xl overflow-hidden border border-gray-200 w-full max-w-4xl mx-auto hover:shadow-lg transition-shadow duration-300">
                                    <div className="w-full md:w-1/3">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={img4}
                                            alt={t('rektorat.pro_rector3')}
                                        />
                                    </div>
                                    <div className="p-6 flex-1">
                                        <h3 className="text-xl font-bold text-blue-800 mb-2">{t('rektorat.title3')}</h3>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="bg-blue-100 p-2 rounded-full">
                                                <svg className="h-6 w-6 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="12" cy="7" r="4"/>
                                                </svg>
                                            </div>
                                            <p className="text-lg font-medium text-gray-800">{t('rektorat.pro_rector3')}</p>
                                        </div>

                                        <p className="text-lg text-gray-700 mb-6 font-semibold text-start">
                                            {t('rektorat.text3')}
                                        </p>

                                        {/* Contact Information */}
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <MdOutlineEmail className="text-blue-600 text-xl" />
                                                <span className="text-gray-700">prorector2@university.edu</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                                <span className="text-gray-700">+998 91 243 17 14</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="text-gray-700">{t('rektor.info')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                {/* Social Media Links */}
                                {/*<div className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-xl p-6 text-white max-w-4xl mx-auto">*/}
                                {/*    <h3 className="text-xl font-bold mb-4">{t('rektorat.socialTitle')}</h3>*/}
                                {/*    <div className="flex flex-wrap gap-4 justify-center">*/}
                                {/*        <a href="#" className="bg-white p-3 rounded-full text-blue-700 hover:bg-blue-100 transition-colors">*/}
                                {/*            <FaFacebook className="text-xl" />*/}
                                {/*        </a>*/}
                                {/*        <a href="#" className="bg-white p-3 rounded-full text-blue-500 hover:bg-blue-100 transition-colors">*/}
                                {/*            <BsTelegram className="text-xl" />*/}
                                {/*        </a>*/}
                                {/*        <a href="#" className="bg-white p-3 rounded-full text-pink-600 hover:bg-blue-100 transition-colors">*/}
                                {/*            <BsInstagram className="text-xl" />*/}
                                {/*        </a>*/}
                                {/*        <a href="#" className="bg-white p-3 rounded-full text-red-600 hover:bg-blue-100 transition-colors">*/}
                                {/*            <FaYoutube className="text-xl" />*/}
                                {/*        </a>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>


                            <SidebarRight/>





                    </div>
                </div>


           </div>

            <Modal open={open} onClose={handleClose} center>
                {currentImage && (
                    <img
                        src={currentImage}
                        alt="Zoomed License"
                        style={{ width: "100%", height: "auto" }}
                    />
                )}
            </Modal>
            <Footer/>
        </div>
    )
        ;
}

export default ProRectorUniversity;
