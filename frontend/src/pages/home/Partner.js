import React from "react";
import partner1 from "./partner/1.png";
import partner2 from "./partner/2.png";
import partner3 from "./partner/3.png";
import partner4 from "./partner/4.png";
import partner5 from "./partner/5.png";
import partner6 from "./partner/6.png";
import partner7 from "./partner/7.png";
import partner8 from "./partner/8.png";
import partner9 from "./partner/9.png";
import partner10 from "./partner/10.png";
import Slider from "react-slick";
import { useTranslation } from 'react-i18next';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Partner() {
    const { t } = useTranslation();

    const partners = [
        { id: 1, src: partner1, alt: "Partner 1" },
        { id: 2, src: partner2, alt: "Partner 2" },
        { id: 3, src: partner3, alt: "Partner 3" },
        { id: 4, src: partner4, alt: "Partner 4" },
        { id: 5, src: partner5, alt: "Partner 5" },
        { id: 6, src: partner6, alt: "Partner 6" },
        { id: 7, src: partner7, alt: "Partner 7" },
        { id: 8, src: partner8, alt: "Partner 8" },
        { id: 9, src: partner9, alt: "Partner 9" },
        { id: 10, src: partner10, alt: "Partner 10" },
    ];

    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2500,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className=" ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-center text-[#012c6e] mb-8">
                    {t('contract.title')}
                </h1>

                <div className="partner-slider">
                    <Slider {...settings}>
                        {partners.map((partner) => (
                            <div key={partner.id} className="px-2">
                                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-32 flex items-center justify-center">
                                    <img
                                        src={partner.src}
                                        alt={partner.alt}
                                        className="max-h-28 max-w-full object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Partner;