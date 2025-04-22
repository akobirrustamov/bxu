import React, { useState, useEffect } from "react";
import ApiCall, { baseUrl } from "../config/index";
import Sidebar from "./Sidebar";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

const AdminBooks = () => {
    const [newsList, setNewsList] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentNews, setCurrentNews] = useState({
        id: null,
        title: "",
        description: "",
        mainImage: null,
        additionalImages: [],
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const response = await ApiCall("/api/v1/book/all", "GET", null, null, true);
            setNewsList(response.data);
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
            title: "",
            description: "",
            mainImage: null,
            additionalImages: [],
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
        formData.append("photo", image);
        formData.append("prefix", prefix);

        try {
            const response = await ApiCall("/api/v1/file/upload", "POST", formData, null, true);
            return response.data;
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

            if (currentNews.mainImage) {
                mainPhotoUuid = await uploadImage(currentNews.mainImage, "book");
            }

            for (const image of currentNews.additionalImages) {
                const uuid = await uploadImage(image, "book");
                additionalImagesUuids.push(uuid);
            }

            const newsData = {
                title: currentNews.title,
                description: currentNews.description,
                mainPhoto: mainPhotoUuid,
                photos: additionalImagesUuids,
            };

            await ApiCall("/api/v1/book", isEditing ? "PUT" : "POST", newsData, null, true);
            fetchNews();
            closeModal();
        } catch (error) {
            console.error("Error saving news:", error);
        }
    };

    const handleDeleteNews = async (id) => {
        try {
            await ApiCall(`/api/v1/book/${id}`, "DELETE", null, null, true);
            fetchNews();
        } catch (error) {
            console.error("Error deleting news:", error);
        }
    };

    const handleEditNews = (item) => {
        setCurrentNews({
            id: item.id,
            title: item.title,
            description: item.description,
            mainImage: null,
            additionalImages: [],
        });
        setIsEditing(true);
        setModalIsOpen(true);
    };

    const handleDownload = async (item) => {
        try {
            const response = await fetch(`${baseUrl}/api/v1/file/getFile/${item?.mainPhoto?.id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/pdf",
                },
            });

            if (!response.ok) throw new Error("Failed to download file");

            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = downloadUrl;
            link.download = `${item.title}.pdf`;
            document.body.appendChild(link);
            link.click();
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
                <h2 className="text-xl md:text-2xl xl:text-3xl">
                    Professorlar tomonidan yozilgan kitoblar
                </h2>
                <div className="w-full flex justify-end mb-4">
                    <button
                        className="bg-blue-800 p-2 rounded-xl text-white text-sm"
                        onClick={openModal}
                    >
                        Kitob qo'shish
                    </button>
                </div>
                <hr />
                <div className="overflow-x-auto lg:p-10 pb-2 pt-4">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                        <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">N%</th>
                            <th className="border border-gray-300 px-4 py-2">Kitob nomi</th>
                            <th className="border border-gray-300 px-4 py-2">Muallif</th>
                            <th className="border border-gray-300 px-4 py-2">Rasm</th>
                            <th className="border border-gray-300 px-4 py-2"></th>
                        </tr>
                        </thead>
                        <tbody>
                        {newsList?.map((item, index) => (
                            <tr key={item.id}>
                                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.title}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.description}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <img
                                        src={`${baseUrl}/api/v1/file/getFile/${item?.photos[0]?.id}`}
                                        alt="Book Cover"
                                        className="w-16 h-16 object-cover"
                                    />
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    <button
                                        onClick={() => handleEditNews(item)}
                                        className="bg-yellow-500 hover:bg-yellow-700 text-white px-3 py-1 rounded"
                                    >
                                        Tahrirlash
                                    </button>
                                    <button
                                        onClick={() => handleDeleteNews(item.id)}
                                        className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded ml-2"
                                    >
                                        O'chirish
                                    </button>
                                    <button
                                        onClick={() => handleDownload(item)}
                                        className="bg-green-500 hover:bg-green-700 text-white px-3 py-1 rounded ml-2"
                                    >
                                        Yuklash
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Rodal width={700} height={550} visible={modalIsOpen} onClose={closeModal}>
                <h2 className="text-2xl mb-4">{isEditing ? "Kitobni Tahrirlash" : "Kitob qo'shish"}</h2>
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
                        <label className="block text-gray-700 text-sm font-bold mb-2">Kitob muallifi</label>
                        <input
                            type="text"
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
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Kitob muqovasi</label>
                        <input
                            type="file"
                            name="additionalImages"
                            multiple
                            accept="image/*"
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
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Bekor qilish
                        </button>
                    </div>
                </form>
            </Rodal>
        </div>
    );
};

export default AdminBooks;
