import React, {useState} from 'react';
import Header from "../../../header2/Header.js";
import bgImage from "../../../../images/header2.jpg";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.png";
import pattern1 from "./img/pattern1.png";
import Zoom from "react-reveal/Zoom";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Footer from "../../../footer/Footer";
import newImg from "./img/new.jpg"
import SidebarRight from "../sidebarright/SidebarRight.js";

import { useTranslation } from 'react-i18next';
import ser1 from "../../images/pri.jpg";
import ser2 from "../../images/ser.png";
import ser3 from "../../images/ser1.png";
import {Modal} from "react-responsive-modal";
import { Link, useLocation } from 'react-router-dom';

function RectorUniversity(props) {
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
                        <div className="w-full xl:w-2/3 p-2">


                            <div className=" ">
                                <section id="founder" className="justify-center">
                                    <div className="text-center">
                                        <h6 className="section-title bg-white text-center px-3 text-lg md:text-xl">
                                            {t('rektorat.header')}

                                        </h6>
                                        <h1 className="text-xl md:text-xl lg:text-2xl xl:text-3xl">
                                            {t('rektorat.rector')}
                                        </h1>
                                    </div>
                                    <Zoom>
                                        <div className={"mx-auto justify-center"}>

                                            <img
                                                style={{width:'560px'}}
                                                className="img-fluid rounded mx-auto  h-72"
                                                src={img1}
                                                alt="Rektor"
                                            />
                                        </div>
                                    </Zoom>
                                    <div className="container mx-auto px-4">
                                        <div className="flex flex-wrap items-center">

                                            <div className="w-full text-black text-start">
                                                <Zoom>
                                                    <p className="text-xl md:text-2xl lg:text-3xl">

                                                        {t('rektorat.text')}

                                                    </p>
                                                </Zoom>
                                                <div className={" text-start "}>
                                                    <div className="flex-wrap flex gap-2 justify-center ">

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



                                                    </div>

                                                </div>
                                                <div>
                                                    <p className={"text-[18px] mt-4"}>
                                                        {t('rektor.content')}
                                                    </p>
                                                    <Zoom>
                                                        <div className={"flex justify-center m-auto w-full"}>
                                                            <div className={"flex flex-wrap gap-2 w-full m-auto justify-center"}>
                                                                <img onClick={() => handleImageClick(ser1)} style={{width: "200px", height: "100px"}}
                                                                     src={ser1} alt={""}/>
                                                                <img onClick={() => handleImageClick(ser2)} style={{width: "200px", height: "100px"}}
                                                                     src={ser2} alt={""}/>
                                                                <img onClick={() => handleImageClick(ser3)} style={{width: "200px", height: "100px"}}
                                                                     src={ser3} alt={""}/>
                                                            </div>
                                                        </div>
                                                    </Zoom>
                                                    <p className={"text-[18px] mt-4"}>
                                                        {t('rektor.content1')}
                                                    </p>
                                                    <p className={"text-[18px] mt-4"}>
                                                        {t('rektor.content2')}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </section>




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

export default RectorUniversity;
