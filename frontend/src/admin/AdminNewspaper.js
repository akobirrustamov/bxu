import React, { useState, useEffect } from 'react';
import ApiCall, { baseUrl } from "../config/index";
import Sidebar from "./Sidebar";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import { Link, useNavigate } from "react-router-dom";
import down from "../pages/newspaper/images/img.png";

const AdminNews = () => {
    const navigate = useNavigate()
    const [newsList, setNewsList] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentNews, setCurrentNews] = useState({
        id: null,
        title: '',
        description: '',
        mainImage: null,
        additionalImages: [],
        existingMainImage: null,
        existingAdditionalImages: []
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const response = await ApiCall('/api/v1/newspaper/all', 'GET', null, null, true);
            setNewsList(response.data);
            console.log(response.data)
        } catch (error) {
            setNewsList([]);
            console.error("Error fetching news:", error);
        }
    };

    const openModal = () => {
        setModalIsOpen(true);
        setIsEditing(false);
        setCurrentNews({
            id: null,
            title: '',
            description: '',
            mainImage: null,
            additionalImages: [],
            existingMainImage: null,
            existingAdditionalImages: []
        });
    };

    const openEditModal = (newsItem) => {
        setModalIsOpen(true);
        setIsEditing(true);
        setCurrentNews({
            id: newsItem.id,
            title: newsItem.title,
            description: newsItem.description,
            mainImage: null,
            additionalImages: [],
            existingMainImage: newsItem.mainPhoto,
            existingAdditionalImages: newsItem.photos
        });
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setIsEditing(false);
        setCurrentNews({
            id: null,
            title: '',
            description: '',
            mainImage: null,
            additionalImages: [],
            existingMainImage: null,
            existingAdditionalImages: []
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
            const response = await ApiCall('/api/v1/file/upload', 'POST', formData, null, );
            return response.data; // Return the UUID of the uploaded image
        } catch (error) {
            console.error("Error uploading image:", error);
            throw error;
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            let mainPhotoUuid = currentNews.existingMainImage?.id || null;
            const additionalImagesUuids = [...currentNews.existingAdditionalImages.map(img => img.id)];

            // Upload the new main image if exists
            if (currentNews.mainImage) {
                mainPhotoUuid = await uploadImage(currentNews.mainImage, 'book');
            }

            // Upload new additional images if exist
            for (const image of currentNews.additionalImages) {
                const uuid = await uploadImage(image, 'book');
                additionalImagesUuids.push(uuid);
            }

            // Prepare news data with UUIDs
            const newsData = {
                title: currentNews.title,
                description: currentNews.description,
                mainPhoto: mainPhotoUuid,
                photos: additionalImagesUuids
            };

            let response;
            if (isEditing) {
                // Update existing news
                response = await ApiCall(
                    `/api/v1/newspaper/${currentNews.id}`,
                    'PUT',
                    newsData,
                    null,
                    true
                );
            } else {
                // Create new news
                response = await ApiCall(
                    `/api/v1/newspaper`,
                    'POST',
                    newsData,
                    null,
                    true
                );
            }

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
            await ApiCall(`/api/v1/newspaper/${id}`, 'DELETE', null, null, false);
            fetchNews();
        } catch (error) {
            console.error("Error deleting news:", error);
        }
    };

    const handleDownload = async (item) => {
        try {
            // Fetch the PDF from the server
            const response = await fetch(`${baseUrl}/api/v1/file/getFile/${item?.mainPhoto?.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/pdf',
                },
            });

            if (!response.ok) {
                throw new Error("Failed to download file");
            }

            // Convert response to blob
            const blob = await response.blob();

            // Create a temporary link to trigger download
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = `${item.title}.pdf`; // Change the name as desired
            document.body.appendChild(link);
            link.click();

            // Cleanup the link
            link.remove();
            window.URL.revokeObjectURL(downloadUrl);
        } catch (error) {
            console.error("Error downloading file:", error);
        }
    };

    return (
        <div>
            <Sidebar />
            <div className="p-10 sm:ml-64">
                <h2 className="text-3xl font-bold md:text-4xl xl:text-5xl">
                    Ilmiy maqolalar
                </h2>
                <div className="w-full flex justify-end mb-4">
                    <button
                        className="bg-blue-800 p-2 rounded-xl text-white text-sm"
                        onClick={openModal}
                    >
                        Maqola qo'shish
                    </button>
                </div>

                <div className={"lg:p-32 pb-2 pt-4"}>
                    <div className={"flex flex-wrap justify-center"}>
                        {newsList?.map((item) => (
                            <div id={item.id} style={{ width: "340px" }} className={"p-4 h-auto "}>
                                <div className={"bg-blue-50 h-auto hover:shadow-xl text-center rounded-xl pb-2"}>
                                    <img
                                        style={{ width: "340px", height: "400px" }}
                                        className={"rounded-t-xl"}
                                        src={`${baseUrl}/api/v1/file/getFile/${item?.photos[0]?.id}`}
                                        alt={item.title || "News image"}
                                    />
                                    <h2 className={"my-1 text-sm"}>{item.title}</h2>
                                    <p className={"text-center p-2 text-[12px]"}>
                                        {truncateDescription(item.description, 100)}
                                    </p>
                                    <div className="p-4 pb-0 gap-2 pt-0 flex items-center justify-between">
                                        {/* Download Button */}
                                        <button className="flex gap-1"
                                                onClick={() => handleDownload(item)}>
                                            <img width={22} height={20} src={down} alt="Download icon" />
                                        </button>

                                        {/* Delete Button */}
                                        <button
                                            className="flex gap-1 bg-red-600 text-white p-1 rounded-md hover:bg-red-700"
                                            onClick={() => handleDeleteNews(item.id)}
                                        >
                                            O'chirish
                                        </button>
                                        <button
                                            className="flex gap-1 bg-blue-600 text-white p-1 rounded-md hover:bg-blue-700"
                                            onClick={() => openEditModal(item)}
                                        >
                                            Tahrirlash
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Rodal
                width={700}
                height={550}
                visible={modalIsOpen}
                onClose={closeModal}
            >
                <h2 className="text-2xl mb-4">
                    {isEditing ? "Ilmiy maqolani tahrirlash" : "Ilmiy maqola qo'shish"}
                </h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Kitob Sarlavhasi</label>
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
                        <label className="block text-gray-700 text-sm font-bold mb-2">Kitob nashr etilgan sana</label>
                        <input
                            type="date"
                            name="description"
                            value={currentNews.description}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Kitob (.pdf)</label>
                        <input
                            type="file"
                            name="mainImage"
                            onChange={handleMainImageChange}
                            accept="application/pdf"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required={!isEditing} // Only required when creating new
                        />
                        {isEditing && currentNews.existingMainImage && (
                            <div className="mt-2 text-sm text-gray-600">
                                Joriy fayl: {currentNews.existingMainImage.originalName}
                            </div>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Rasmlar</label>
                        <input
                            type="file"
                            name="additionalImages"
                            multiple
                            accept="image/*"
                            required={!isEditing} // Only required when creating new
                            onChange={handleAdditionalImagesChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {isEditing && currentNews.existingAdditionalImages.length > 0 && (
                            <div className="mt-2">
                                <p className="text-sm font-bold mb-1">Joriy rasmlar:</p>
                                <div className="flex flex-wrap gap-2">
                                    {currentNews.existingAdditionalImages.map((img, index) => (
                                        <div key={index} className="text-sm text-gray-600">
                                            {img.originalName}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex items-center justify-evenly">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            {isEditing ? "O'zgartirish" : "Saqlash"}
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