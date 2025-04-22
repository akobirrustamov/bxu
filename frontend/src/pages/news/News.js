import React, {useEffect, useState} from 'react';
import "./news.css"
import Zoom  from 'react-reveal/Zoom';
import { useTranslation } from 'react-i18next';
import ApiCall, {baseUrl} from '../../config/index';

import {Link, useNavigate} from "react-router-dom";


import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function News(props) {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [show, setShow] = useState(true);
    const [galleryImages, setGalleryImages] = useState([]);
    const [youTube, setYoutube] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getGalleryImages();
        getYouTube();
    }, []);

    const getGalleryImages = async () => {
        try {
            const response = await ApiCall('/api/v1/gallery', 'GET', null, null, true);
            setGalleryImages(response.data);
        } catch (error) {
            console.error("Error fetching images:", error);
            setError("Failed to load images.");
        } finally {
            setLoading(false);
        }
    };

    const getYouTube = async () => {
        try {
            const response = await ApiCall('/api/v1/youtube/all', 'GET', null, null, false);
            setYoutube(response.data);
        } catch (error) {
            console.error("Error fetching YouTube videos:", error);
        }
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,                // Enable auto-scroll
        autoplaySpeed: 1500,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className={"mt-4"}>


            <div className={"kampus"}>
                <div className="container graduates_bg">

                    <div className=" wow fadeInUp" data-wow-delay="0.1s">

                        <h1 className="mb-2"> {t('content.title')}</h1>
                    </div>
                    <p className="description ">
                        {t('content.text')}
                    </p>

                    <Zoom>
                        <div className={"grid d-flex flex-wrap gap-0"}>
                            <div className="  lg:w-1/3 md:w-full p-2">
                                <div className={"card"}>
                                    <p className="card-title"><span className="icon">↗️</span>{t('campus.card_title2')}
                                    </p>
                                    <p className="card-link"><a
                                        href="https://student.buxpxti.uz/dashboard/login">student.buxpxti.uz</a><br/>

                                    </p>
                                </div>
                            </div>
                            <div className="  lg:w-1/3 md:w-full p-2">
                                <div className={"card"}>
                                    <p className="card-title"><span className="icon">📚</span>{t('campus.card_title4')}
                                    </p>

                                    <p className="card-link"><a
                                        href={"https://library.buxpxti.uz"}>library.buxpxti.uz</a><br/>

                                    </p>
                                </div>
                            </div>

                            <div className="  lg:w-1/3 md:w-full p-2 h-full">
                                <div className={"card"}>
                                    <p className="card-title"><span className="icon">📍</span>{t('campus.card_title1')}
                                    </p>
                                    <p className="card-link"><a
                                        href="https://t.me/e_buxpxti_bot">shartnoma.edu.uz</a></p>

                                </div>
                            </div>
                            <div className="  lg:w-1/3 md:w-full p-2">
                                <div className={"card"}>
                                    <p className="card-title"><span className="icon">🧪</span>{t('campus.card_title3')}
                                    </p>
                                    <p className="card-link"><a
                                        href="#">data.buxpxti.uz</a></p>
                                </div>
                            </div>
                            <div className="  lg:w-1/3 md:w-full p-2">
                                <div className={"card"}>
                                    <p className="card-title"><span className="icon">👥</span>{t('campus.card_title5')}
                                    </p>
                                    <p className="card-link"><a href="https://t.me/e_buxpxti_bot">t.me/e_buxpxti_bot</a></p>
                                </div>
                            </div>
                            <div className="  lg:w-1/3 md:w-full p-2">
                                <div className={"card"}>
                                    <p className="card-title"><span className="icon">🏢</span>{t('campus.card_title6')}
                                    </p>
                                    <p className="card-link"><a href="https://t.me/e_buxpxti_bot">t.me/e_buxpxti_bot</a></p>
                                </div>
                            </div>


                        </div>

                    </Zoom>


                </div>
            </div>






        </div>
    );
}

export default News;