import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import bgImage from "../../images/header2.jpg";
import Footer from "../footer/Footer";
import { useTranslation } from 'react-i18next';

import Zoom from "react-reveal/Zoom";
import ApiCall, {baseUrl} from "../../config";
import Headers from "../header2/Header";









function AllNews(props) {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const response = await ApiCall('/api/v1/news', 'GET', null, null, true);
            setNewsList(response.data);
            console.log(response.data)
        } catch (error) {
            setNewsList([]);
            console.error("Error fetching news:", error);
        }
    };
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };
    const truncateText = (text) => {
        const maxLength = 120;
        const minLength = 100;

        if (text.length <= maxLength) return text;

        let truncated = text.substr(0, maxLength);
        const lastSpace = truncated.lastIndexOf(' ');

        // If we find a space within our acceptable range
        if (lastSpace > minLength) {
            truncated = truncated.substr(0, lastSpace);
        } else {
            // If no good space found, just cut at maxLength
            truncated = text.substr(0, maxLength);
        }

        return truncated + '...';
    };
    return (

        <div>
            <Headers />
            <div className="max-w-7xl pt-20 md:py-2 mx-auto px-4 mt-8" >



            </div>
            <div className={" my-5 "}>
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center  px-3"> {t('news.header')}</h6>
                    <h1 className="mb-5"> {t('news.title')}</h1>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {newsList?.map((item, index) => (
                            <Zoom key={index}>
                                <div
                                    onClick={() => navigate(`/news-detail/${item.id}`)}
                                    className="group relative bg-white rounded-lg overflow-hidden shadow-md cursor-pointer h-full flex flex-col"
                                >
                                {/* Image with hover effect */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-80"
                                        src={`${baseUrl}/api/v1/file/getFile/${item?.mainPhoto?.id}`}
                                        alt={item.title}
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>

                                {/* Content with title and date */}
                                <div className="p-6 flex-grow flex flex-col">
                                    {/* Title with bottom line */}
                                    <div className="border-b border-gray-200">
                                        <h3
                                            className="text-[16px] font-semibold text-gray-800 group-hover:text-blue-600 transition-colors"
                                            title={item.title} // Show full title on hover
                                        >
                                            {truncateText(item.title)}
                                        </h3>
                                    </div>

                                    {/* Date and optional subtitle */}
                                    <div className="mt-auto">
                                        <p className="text-gray-500 text-sm italic">
                                            {formatDate(item.createdAt)}
                                        </p>
                                        {/* Optional subtitle */}
                                        {item.subtitle && (
                                            <p className="text-gray-600 mt-2">
                                                {truncateText(item.subtitle)}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Heart icon placeholder */}
                                <div className="absolute top-4 right-4 text-red-500 text-2xl">
                                    {/*👀*/}
                                </div>
                            </div>
                        </Zoom>
                    ))}

                </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default AllNews;
