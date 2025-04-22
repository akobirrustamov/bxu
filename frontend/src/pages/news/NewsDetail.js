



            import React, { useEffect, useState } from 'react';
            import { useParams, useNavigate } from 'react-router-dom';
            import { useTranslation } from 'react-i18next';
            import ApiCall, { baseUrl } from "../../config";
            import Header from "../header2/Header";
            import Footer from "../footer/Footer";
            import Zoom from 'react-reveal/Zoom';
            import bgImage from "../../images/header2.jpg";

            function NewsDetail() {
                const { id } = useParams();
                const navigate = useNavigate();
                const { t } = useTranslation();
                const [newsItem, setNewsItem] = useState(null);
                const [otherNews, setOtherNews] = useState([]);

                useEffect(() => {
                    if (id) {
                        fetchNews(id);
                        fetchOtherNews();
                    }
                }, [id]);

                const fetchNews = async (id) => {
                    try {
                        const response = await ApiCall(`/api/v1/news/${id}`, 'GET', null, null, true);
                        setNewsItem(response.data);
                    } catch (error) {
                        console.error("Error fetching news:", error);
                    }
                };

                const fetchOtherNews = async () => {
                    try {
                        const response = await ApiCall('/api/v1/news', 'GET', null, null, true);
                        // Filter out the current news item
                        const filteredNews = response.data.filter(item => item.id !== parseInt(id));
                        setOtherNews(filteredNews.slice(0, 4)); // Show max 4 other news
                    } catch (error) {
                        console.error("Error fetching other news:", error);
                    }
                };

                const formatDate = (dateString) => {
                    const date = new Date(dateString);
                    const options = { year: 'numeric', month: 'long', day: 'numeric' };
                    return date.toLocaleDateString('en-US', options);
                };

                if (!newsItem) {
                    return <div className="flex justify-center items-center h-screen">Loading...</div>;
                }

                return (
                    <div className="bg-slate-50 min-h-screen flex flex-col">
                        <div
                            className="w-full h-64 bg-cover bg-center text-center  text-white"
                            style={{
                                backgroundImage: `url(${bgImage})`,
                                borderBottomRightRadius: "60px",
                                borderBottomLeftRadius: "60px"
                            }}
                        >
                            <Header/>

                        </div>


                        {/* Main content */}
                        <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-4 py-8 gap-8">
                            {/* Current news (2/3 width) */}
                            <div className="w-full lg:w-2/3">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <img
                                        className="w-full h-96 object-cover"
                                        src={`${baseUrl}/api/v1/file/getFile/${newsItem?.mainPhoto?.id}`}
                                        alt={newsItem.title}
                                    />
                                    <div className="p-6">
                                        <h1 className="text-2xl font-bold text-gray-800 mb-4">{newsItem.title}</h1>
                                        <div className="text-gray-500 text-sm mb-4">
                                            {formatDate(newsItem.createdAt)}
                                        </div>
                                        <div
                                            className="prose max-w-none text-gray-700"
                                            dangerouslySetInnerHTML={{ __html: newsItem.description }}
                                        />
                                    </div>
                                    {newsItem.photos?.length > 0 && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                                            {newsItem.photos.map((photo, index) => (
                                                <img
                                                    key={index}
                                                    className="rounded-lg w-full h-64 object-cover"
                                                    src={`${baseUrl}/api/v1/file/getFile/${photo?.id}`}
                                                    alt={`${newsItem.title} additional image ${index + 1}`}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Other news (1/3 width) */}
                            <div className="w-full lg:w-1/3">
                                <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
                                    <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
                                        So'ngi yangiliklar
                                    </h2>
                                    <div className="space-y-4">
                                        {otherNews.map((item) => (
                                            <Zoom key={item.id}>
                                                <div
                                                    onClick={() => navigate(`/news-detail/${item.id}`)}
                                                    className="group cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                                                >
                                                    <div className="flex gap-3">
                                                        <div className="w-24 h-24 flex-shrink-0">
                                                            <img
                                                                className="w-full h-full object-cover rounded"
                                                                src={`${baseUrl}/api/v1/file/getFile/${item?.mainPhoto?.id}`}
                                                                alt={item.title}
                                                            />
                                                        </div>
                                                        <div>
                                                            <h5 className="text-[14px] text-gray-800 group-hover:text-blue-600">
                                                                {item.title}
                                                            </h5>
                                                            <p className="text-gray-500 text-sm mt-1">
                                                                {formatDate(item.createdAt)}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Zoom>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Footer />
                    </div>
                );
            }

            export default NewsDetail;