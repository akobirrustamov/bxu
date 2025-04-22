import ApiCall, { baseUrl } from "../config/index";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

const Company = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [data, setData] = useState({
        title: "",
        iframe: "",
        hashTag: ""
    });
    const [youTube, setYoutube] = useState([]);

    useEffect(() => {
        getYouTube();
    }, []);

    const getYouTube = async () => {
        try {
            const response = await ApiCall('/api/v1/youtube/all', 'GET', null, null, false);
            setYoutube(response.data);
        } catch (error) {
            console.error("Error fetching YouTube videos:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await ApiCall('/api/v1/youtube/add', 'POST', data, null, false);
            setYoutube([...youTube, response.data]);
            setModalIsOpen(false);
            setData({ title: "", iframe: "", hashTag: "" });
        } catch (error) {
            console.error("Error adding YouTube video:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await ApiCall(`/api/v1/youtube/delete/${id}`, 'DELETE', null, null, false);
            setYoutube(youTube.filter(video => video.id !== id));
        } catch (error) {
            console.error("Error deleting YouTube video:", error);
        }
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <Sidebar />
            <div className="p-10 sm:ml-64">
                <h2 className="text-3xl font-bold  md:text-4xl xl:text-5xl">
                    YouTube video
                </h2>
                <div className="w-full flex justify-end mb-4">
                    <button
                        className="bg-blue-800 p-2 rounded-xl text-white text-sm"
                        onClick={openModal}
                    >
                        Yangi video qo'shish
                    </button>
                </div>

                <div className="mt-3 grid h-full grid-cols-1 gap-5">

                    <div className="  gap-4 flex flex-wrap ">
                        {youTube.map(video => {
                            const iframeWithClass = video.iframe.replace(
                                /(<iframe.*?)(>)/,
                                `$1 class="w-full h-56"$2`
                            );

                            return (
                                <div key={video.id} className="myYoutube shadow-md rounded p-2 my-3 hover:bg-gray-100">
                                    <div dangerouslySetInnerHTML={{ __html: iframeWithClass }} />
                                    <h3 className="mt-2 text-xl font-semibold">{video.title}</h3>
                                    <p className="text-gray-600">{video.hashTag}</p>
                                    <button
                                        className="bg-red-500 text-white px-2 py-1 mt-2 rounded"
                                        onClick={() => handleDelete(video.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>
            <Rodal width={700} height={400} visible={modalIsOpen} onClose={closeModal}>
                <form onSubmit={handleFormSubmit} className="p-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Title
                        </label>
                        <input
                            name="title"
                            value={data.title}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Enter title"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            iFrame
                        </label>
                        <textarea
                            name="iframe"
                            value={data.iframe}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter iframe"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            HashTag
                        </label>
                        <input
                            name="hashTag"
                            value={data.hashTag}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Enter hashtag"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Add Video
                        </button>
                        <button
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={closeModal}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </Rodal>
        </div>
    );
};

export default Company;
