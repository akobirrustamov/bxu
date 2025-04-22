import React, { useState, useEffect } from 'react';
import ApiCall, {baseUrl} from "../config/index";
import Sidebar from "./Sidebar";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import {Link, useNavigate} from "react-router-dom";
import Zoom from "react-reveal/Zoom";

const AdminNews = () => {
    const navigate = useNavigate()
    const [newsList, setNewsList] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentNews, setCurrentNews] = useState({
        id: null,
        title: '',
        description: '',
        mainImage: null,
        additionalImages: []
    });
    const [isEditing, setIsEditing] = useState(false);

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

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => {
        setModalIsOpen(false);
        setIsEditing(false);
        setCurrentNews({
            id: null,
            title: '',
            description: '',
            mainImage: null,
            additionalImages: []
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentNews({ ...currentNews, [name]: value });
    };

    const handleMainImageChange = (e) => {
        setCurrentNews({ ...currentNews, mainImage: e.target.files[0] });
    };

    const handleAdditionalImagesChange = (e) => {
        setCurrentNews({ ...currentNews, additionalImages: Array.from(e.target.files) });
    };

    const uploadImage = async (image, prefix) => {
        const formData = new FormData();
        formData.append('photo', image);
        formData.append('prefix', prefix);

        try {
            const response = await ApiCall('/api/v1/file/upload', 'POST', formData, null, true);
            return response.data; // Return the UUID of the uploaded image
        } catch (error) {
            console.error("Error uploading image:", error);
            throw error;
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            let mainPhotoUuid = null;
            const additionalImagesUuids = [];

            // Upload the main image if exists
            if (currentNews.mainImage) {
                mainPhotoUuid = await uploadImage(currentNews.mainImage, 'main');
            }

            // Upload additional images if exist
            for (const image of currentNews.additionalImages) {
                const uuid = await uploadImage(image, 'additional');
                additionalImagesUuids.push(uuid);
            }

            // Prepare news data with UUIDs
            const newsData = {
                title: currentNews.title,
                description: currentNews.description,
                mainPhoto: mainPhotoUuid,
                photos: additionalImagesUuids
            };

            // Submit the news data
            const response = await ApiCall(
                `/api/v1/news`,
                'POST',
                newsData,
                null,
                true
            );

            if (response.error) {
                console.error("Error saving news:", response.data);
            } else {
                fetchNews();
                closeModal();
            }
        } catch (error) {
            console.error("Error saving news:", error);
        }
    };
    const truncateDescription = (description, maxLength) => {
        if (description.length <= maxLength) return description;
        return description.substring(0, maxLength) + '...';
    };

    const formatDate = (createdAtArray) => {
        const day = String(createdAtArray[2]).padStart(2, '0');
        const month = String(createdAtArray[1]).padStart(2, '0');
        const year = createdAtArray[0];
        return `${day}.${month}.${year}`;
    };

    const handleDeleteNews = async (id) => {
        try {
            await ApiCall(`/api/v1/news/${id}`, 'DELETE', null, null, false);
            fetchNews();
        } catch (error) {
            console.error("Error deleting news:", error);
        }
    };

    return (
        <div>
            <Sidebar />
            <div className="p-10 sm:ml-64">
                <h2 className="text-3xl font-bold md:text-4xl xl:text-5xl">
                    So'nggi yangiliklar
                </h2>
                <div className="w-full flex justify-end mb-4">
                    <button
                        className="bg-blue-800 p-2 rounded-xl text-white text-sm"
                        onClick={openModal}
                    >
                        Yangilik qo'shish
                    </button>
                </div>

                    <div style={{display: "flex", flexWrap:"wrap"}} className="  p-4 justify-evenly gap-2 flex">
                        {newsList?.map((item, index) => (
                            <Zoom key={index} >

                                <div
                                     className={"myNewsDiv my-1"}>
                                    <img className={"myImageNews"}
                                         src={`${baseUrl}/api/v1/file/getFile/${item?.mainPhoto?.id}`}

                                         alt={item.title}/>
                                    <h3 className="text-overlay">
                                        {item.title}
                                    </h3>
                                    <div className={"flex justify-center gap-5 p-1"}>
                                        <button onClick={()=>handleDeleteNews(item.id)} className={"btn btn-danger"}>del</button>
                                        <button onClick={() => navigate(`/news-detail/${item.id}`)} className={"btn btn-primary"}>show</button>
                                    </div>
                                </div>
                            </Zoom>
                        ))}
                    </div>


                </div>

            <Rodal
                width={700}
                height={550}
                visible={modalIsOpen}
                onClose={closeModal}
            >
                <h2 className="text-2xl mb-4">Yangilik qo'shish</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Sarlavha</label>
                        <input
                            type="text"
                            name="title"
                            value={currentNews.title}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Tavsif</label>
                        <textarea
                            name="description"
                            value={currentNews.description}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Asosiy rasm</label>
                        <input
                            type="file"
                            name="mainImage"
                            onChange={handleMainImageChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <div className={"flex"}>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Qo'shimcha rasmlar

                        </label>
                            <p className={"text-sm"}>
                                 . (bir neshta rasm tanlashingiz mumkin)
                            </p>

                        </div>
                        <input
                            type="file"
                            name="additionalImages"
                            multiple
                            onChange={handleAdditionalImagesChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex items-center justify-evenly">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Saqlash
                        </button>
                        <button
                            type="button"
                            onClick={closeModal}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Bekor qilish
                        </button>
                    </div>
                </form>
            </Rodal>
        </div>
    );
};

export default AdminNews;
