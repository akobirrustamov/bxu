import React, {useState} from 'react';
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.css';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";


import bino1 from './img/bino1.jpg';
import bino2 from './img/bino22.png';
import bino3 from './img/bino3.jpg';
import bino4 from './img/bino4.png';
import recktor from "./img/img.png"
import Zoom from "react-reveal/Zoom";
import ser1 from "./images/pri.jpg"
import ser2 from "./images/ser.png"
import ser3 from "./images/ser1.png"
import { useTranslation } from 'react-i18next';

import l1 from "../license/img.png";
function NewNavbar(props) {
    const { t, i18n } = useTranslation();

    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const handleImageClick = (image) => {
        setCurrentImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={"my-bg-second"}>
            <div className="grid grid-cols-2 gap-4 w-full  p-4 pb-0 pt-2    " > {/* 2 columns layout with spacing */}
            {/* First Column */}

            <div className=" p-4 pt-0   z-10">

                <div className={"w-full text-center justify-center  "}>
                    <h1 className={"xl:text-5xl md:text-4xl sm:text-3xl min-[320px]:text-2xl text-[#012c6e]"}>

                        {t('rektor.title')}
                    </h1>

                    <div className={"flex flex-wrap justify-center gap-4 mt-3"}>
                        <img src={recktor} style={{width: "50%"}} className={"rounded-xl hover:scale-105 shadow-blue-800 "}/>
                        <div className={" text-start "}>
                            <div className="w-60  ">
                                <Zoom>
                                    <div className="border-double mb-2 text-start border-5 border-[#004C88] hover:border-white  text-[#004C88]  rounded-lg hover:bg-[#004C88] hover:text-white">
                                        <div className={"px-2"}>
                                            <div className="flex items-baseline gap-1 justify-start">
                                                <i className="fa-solid fa-envelope"></i>
                                                <p className="font-semibold p-0 m-0">  {t('rektor.contact1')}</p>
                                            </div>
                                            <div className={"m-0 "}>
                                                <p className="text-start font-medium m-0">rektor@buxpxti.uz</p>
                                            </div>
                                        </div>
                                    </div>
                                </Zoom>
                                <Zoom>
                                    <div className="border-double mb-2 text-start border-5 border-[#004C88] hover:border-white  text-[#004C88]  rounded-lg hover:bg-[#004C88] hover:text-white">
                                        <div className={"px-2"}>
                                            <div className="flex items-baseline gap-1 justify-start">
                                                <i className="fa-solid fa-phone"></i>
                                                <p className="font-semibold p-0 m-0">{t('rektor.contact2')}</p>
                                            </div>
                                            <div className={"m-0 "}>
                                                <p className="text-start font-medium m-0">+998 55 309-99-99</p>
                                            </div>
                                        </div>
                                    </div>
                                </Zoom>
                                <Zoom>
                                    <div className="border-double mb-2 text-start border-5 border-[#004C88] hover:border-white  text-[#004C88]  rounded-lg hover:bg-[#004C88] hover:text-white">
                                        <div className={"px-2"}>
                                            <div className="flex items-baseline gap-1 justify-start">
                                                <i className="fa-solid fa-calendar"></i>
                                                <p className="font-semibold p-0 m-0">{t('rektor.contact3')}</p>
                                            </div>
                                            <div className={"m-0 "}>
                                                <p className="text-start font-medium m-0">{t('rektor.day')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Zoom>



                            </div>

                        </div>
                    </div>
                    <div className={"w-full  my-2"}>
                        <h3 className={"text-2xl md:text-xl min-[320px]:text-base text-[#004C88] my-4"}>  {t('rektor.text')}</h3>
                    </div>
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
                </div>
            </div>
                {/* Second Column */}
                <div className="  rounded-xl align-baseline my-12 h-auto items-baseline w-full ">
                    <Zoom>
                    <div className="w-full shadow-blue-900 mx-auto ">
                        <Carousel>
                            <Carousel.Item interval={800} >
                                <div style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '400px',

                                }}>
                                    <img
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                        className="d-block w-100 "
                                        src={bino1}
                                        alt="Image Two"
                                    />
                                </div>
                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={800}>
                                <div style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '400px',

                                }}>
                                    <img
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'

                                        }}
                                        className="d-block w-100 "
                                        src={bino2}
                                        alt="Image Two"
                                    />
                                </div>
                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={800}>
                                <div style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '400px',

                                }}>
                                    <img
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'

                                        }}
                                        className="d-block w-100 "
                                        src={bino3}
                                        alt="Image Two"
                                    />
                                </div>
                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={800}>
                                <div style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '400px',

                                }}>
                                    <img
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                        className="d-block w-100 "
                                        src={bino4}
                                        alt="Image Two"
                                    />
                                </div>
                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>


                        </Carousel>
                    </div>
                </Zoom>

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

        </div>


    );
}

export default NewNavbar;