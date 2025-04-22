import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/diplom.png";
import img6 from "./img/diplom (2).png";
import Zoom from "react-reveal/Zoom";
import { useTranslation } from 'react-i18next';

const Kampus = () => {
    const [open, setOpen] = useState(false);
    const [currentPartner, setCurrentPartner] = useState(null);
    const { t } = useTranslation();

    const images = [
        { src: img1, alt: "Image 1" },
        { src: img2, alt: "Image 2" },
        { src: img3, alt: "Image 3" },
        { src: img4, alt: "Image 4" },
        { src: img5, alt: "Image 5" },
        { src: img6, alt: "Image 6" }
    ];

    const handleImageClick = (partner) => {
        setCurrentPartner(partner);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentPartner(null);
    };

    return (
        <div className="graduates p-4">
            <div className="p-4 graduates_bg">
                <div className="p-2">
                    <h1 className="text-3xl">{t('diplom.title')}</h1>
                    <p className="my-2 w-full lg:w-3/4">
                        {t('diplom.text')}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {images.map((image, index) => (
                        <Zoom className={"transition-transform duration-300 hover:scale-110 h-48 w-full object-cover"}>
                            <div className="relative overflow-hidden group rounded-xl"  onClick={() => handleImageClick(image)}>
                                <img
                                    className="transition-transform duration-300 hover:scale-110 h-48 w-full object-cover"
                                    src={image.src}
                                    alt={image.alt}

                                />
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center z-10">
                                    {/*<FontAwesomeIcon icon={faEye} className="text-white text-2xl"/>*/}
                                </div>
                            </div>

                        </Zoom>

                    ))}
                </div>
            </div>

            <Modal open={open} onClose={handleClose} center>
                {currentPartner && (
                    <div className="text-center">
                        <img
                            src={currentPartner.src}
                            alt={currentPartner.alt}
                            style={{width: "100%", height: "auto"}}
                            className="rounded-xl"
                        />
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Kampus;
