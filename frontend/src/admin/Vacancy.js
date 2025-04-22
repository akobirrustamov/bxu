
import React, { useEffect, useState } from 'react';

import ApiCall, { baseUrl } from "../config/index";
import Sidebar from "./Sidebar";

const Marketplace = () => {
    const [galleryImages, setGalleryImages] = useState([]);
    const [newImage, setNewImage] = useState(null); // For adding new images
    const [error, setError] = useState(null); // For error handling

    useEffect(() => {
        getGalleryImages();
    }, []);

    const getGalleryImages = async () => {
        try {
            const response = await ApiCall('/api/v1/gallery', 'GET', null, null, true);
            setGalleryImages(response.data);
            console.log(response.data)
        } catch (error) {
            console.error("Error fetching images:", error);
            setError("Failed to load images.");
        }
    };

    const deleteImage = async (id) => {
        try {
            await ApiCall(`/api/v1/gallery/${id}`, 'DELETE', null, null, false);
            setGalleryImages(galleryImages.filter(image => image.id !== id));
        } catch (error) {
            console.error("Error deleting image:", error);
            setError("Failed to delete image.");
        }
    };

    const uploadImage = async (image, prefix) => {
        const formData = new FormData();
        console.log(formData)
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

    const handleAddImage = async () => {
        if (!newImage) {
            setError("Please select an image.");
            return;
        }

        try {
            const uploadedImageData = await uploadImage(newImage, 'gallery');
            console.log(uploadedImageData)
            const galleryImageData = { mainPhoto: uploadedImageData };
            await ApiCall('/api/v1/gallery', 'POST', galleryImageData, null, true);
            getGalleryImages();
            setNewImage(null);
        } catch (error) {
            console.error("Error adding image:", error);
            setError("Failed to add image.");
        }
    };

    return (
        <div>
            <Sidebar />
            <div className="p-10 sm:ml-64">
                <h2 className="text-3xl font-bold  md:text-4xl xl:text-5xl">
                    Gallery
                </h2>
                <div className="mt-6">
                    <h3 className="text-xl font-bold">Add New Image</h3>
                    <input
                        type="file"
                        onChange={(e) => setNewImage(e.target.files[0])}
                    />
                    <button
                        onClick={handleAddImage}
                        className="mt-2 bg-blue-500 text-white p-2 rounded"
                    >
                        Add Image
                    </button>
                </div>
                {error && <p className="text-red-500 mt-4">{error}</p>}
                <div className="mt-3 grid h-full grid-cols-1 gap-5 flex gap-2">
                    {galleryImages.length > 0 ? (
                        galleryImages.map(item => {
                            const isVideo = item.mainPhoto.name.toLowerCase().includes('.mp4'); // Check if filename contains ".mp4"
                            return (
                                <div key={item.id} className="relative">
                                    {isVideo ? (
                                        <video
                                            className="myVideoNews"
                                            src={`${baseUrl}/api/v1/file/getFile/${item.mainPhoto.id}`}
                                            controls
                                            style={{ width: "100%", height: "auto" }}
                                        >
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <img
                                            className="myImageNews"
                                            src={`${baseUrl}/api/v1/file/getFile/${item.mainPhoto.id}`}
                                            alt={`Image ${item.id}`}
                                        />
                                    )}
                                    <button
                                        onClick={() => deleteImage(item.id)}
                                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            );
                        })
                    ) : (
                        <p>No images or videos found.</p>
                    )}

                </div>

            </div>
        </div>
    );
};

export default Marketplace;
