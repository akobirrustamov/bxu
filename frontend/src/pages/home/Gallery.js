import React, {useEffect, useState} from 'react';
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
        <div className={"my-4"}>




            <div className="galereya ">

                <div className="gallery-container p-4 ">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="mb-5">  {t('gallery.title')}</h1>
                    </div>

                    <div className="tabs">
                        <span
                            className={`tab ${!show ? "hover:bg-gray-200 rounded" : "active hover:bg-gray-200 rounded"}`}
                            onClick={() => setShow(true)}> {t('gallery.tab_btn1')} </span>
                        <span
                            className={`tab ${show ? "hover:bg-gray-200 rounded" : "active hover:bg-gray-200 rounded"}`}
                            onClick={() => setShow(false)}> {t('gallery.tab_btn2')} </span>
                    </div>
                    {/*gallery*/}

                    {/* Gallery Slider start */}
                    <div className={show ? "pb-4 " : "hidden"}>
                        <Slider {...sliderSettings}>
                            {galleryImages?.map(item => {
                                const isVideo = item.mainPhoto?.name.toLowerCase()?.includes('.mp4') || item.mainPhoto?.name?.toLowerCase().includes('lover');

                                return (
                                    <div key={item.id} className="pt-0 p-8">
                                        <div className="text-center rounded-xl shadow-warning-3">
                                            <div className="flex justify-center items-center">
                                                {isVideo ? (
                                                    <video
                                                        className="rounded-xl"
                                                        style={{width: "360px", height: "320px"}}
                                                        src={`${baseUrl}/api/v1/file/getFile/${item?.mainPhoto.id}`}
                                                        autoPlay
                                                        muted
                                                        loop
                                                        playsInline
                                                    >
                                                        Your browser does not support the video tag.
                                                    </video>
                                                ) : (
                                                    <img
                                                        src={`${baseUrl}/api/v1/file/getFile/${item?.mainPhoto?.id}`}
                                                        alt={item.title}
                                                        className="gallery-image rounded-xl cursor-pointer"
                                                        style={{width: "360px", height: "320px"}}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>

                    {/* Gallery Slider end */}


                    <div className={show ? "w-full items-center flex flex-wrap justify-center  text-center" : "hidden"}>

                        <button onClick={() => navigate("/all-images")} style={{width: "250px"}}
                                className='    text-white w-[40px] h-[36px] lg:w-[155px] lg:h-[36px] bg-[#004C88]  rounded-md text-[16px] uppercase'>

                            {t('news.readMore')}</button>
                    </div>
                    {/*youTube*/}
                    <div className={!show ? "" : "hidden"}>
                        <div className={!show ? "gallery-grid block pb-3" : "hidden"}>
                            {youTube?.slice(0, 3).map(video => {
                                const iframeWithClass = video.iframe.replace(
                                    /(<iframe.*?)(>)/,
                                    `$1 class="w-full h-56"$2`
                                );
                                return (
                                    <div key={video.id}
                                         className="myYoutube shadow-md rounded p-4 my-3 hover:bg-gray-100">
                                        <div dangerouslySetInnerHTML={{__html: iframeWithClass}}/>
                                        <h6 className="my-2 bold text-xl">{video.title}</h6>
                                        <p className={"text-blue-500"}>#{video.hashTag}</p>

                                    </div>

                                );
                            })}

                        </div>

                    </div>
                    <div
                        className={!show ? "w-full items-center flex flex-wrap justify-center  text-center" : "hidden"}>

                        <button onClick={() => navigate("/all-youtube")} style={{width: "250px"}}
                                className='    text-white w-[40px] h-[36px] lg:w-[155px] lg:h-[36px] bg-[#004C88]  rounded-md text-[16px] uppercase'>

                            {t('news.readMore')}</button>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default News;