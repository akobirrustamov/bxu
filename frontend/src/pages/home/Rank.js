import React, { useState } from "react";
import Slider from "react-slick";

import rank1 from "./rank/1.jpg";
import rank4 from "./rank/4.png";
import rank6 from "./rank/6.png";
import rank2 from "./rank/img.png"
import rank3 from "./rank/img_1.png"
import rank5 from "./rank/img_2.png"
import rank7 from "./rank/img_3.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useTranslation } from 'react-i18next';

function Rank() {
    const { t } = useTranslation();

    const partners = [
        { id: 1, src: rank1, alt: "Partner 1", name: "Baratov Sharif Ramazanovich", rank: "Psixologiya fanlari doktori, professor" },
        { id: 2, src: rank2, alt: "Partner 1", name: "Baratov Sharif Ramazanovich", rank: "Psixologiya fanlari doktori, professor" },
        { id: 3, src: rank3, alt: "Partner 1", name: "Baratov Sharif Ramazanovich", rank: "Psixologiya fanlari doktori, professor" },
        { id: 4, src: rank4, alt: "Partner 4", name: "Barotov Xumoyin Sharifovich", rank: "Psixologiya fanlari bo'yicha falsafa doktori" },
        { id: 6, src: rank6, alt: "Partner 6", name: "Nazarov Akmal Mardonovich", rank: "Psixologiya fanlari doktori, professor" },
        { id: 5, src: rank5, alt: "Partner 6", name: "Nazarov Akmal Mardonovich", rank: "Psixologiya fanlari doktori, professor" },
        { id: 7, src: rank7, alt: "Partner 6", name: "Nazarov Akmal Mardonovich", rank: "Psixologiya fanlari doktori, professor" },
    ];

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const [open, setOpen] = useState(false);
    const [currentPartner, setCurrentPartner] = useState(null);

    const handleImageClick = (partner) => {
        setCurrentPartner(partner);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentPartner(null);
    };

    return (
        <div className="p-2 text-center my-4">
            <h1 className="xl:text-3xl md:text-2xl sm:text-xl text-xl text-[#012c6e]">
                {t('yutuq.title')}
            </h1>
            <div className="partner-carousel container mx-auto px-4 py-8">
                <Slider {...settings}>
                    {partners.map((partner) => (
                        <div key={partner.id} className="p-2">
                            <div className="text-center bg-white rounded-xl shadow-warning-3">
                                <div className="flex justify-center items-center">
                                    <img
                                        onClick={() => handleImageClick(partner)}
                                        src={partner.src}
                                        alt={partner.alt}
                                        style={{ width: "300px", height: "320px" }}
                                        className="rounded-xl cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <Modal open={open} onClose={handleClose} center>
                {currentPartner && (
                    <div className="text-center">
                        <img
                            src={currentPartner.src}
                            alt={currentPartner.alt}
                            style={{ width: "100%", height: "auto" }}
                            className="rounded-xl"
                        />
                    </div>
                )}
            </Modal>
        </div>
    );
}

export default Rank;
