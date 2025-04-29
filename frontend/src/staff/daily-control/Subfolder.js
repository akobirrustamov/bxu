import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ApiCall, {baseUrl} from "../../config/index";
import Sidebar from "../Sidebar";
import newbg from "../images/newbg.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft,
    faUserTie,
    faLayerGroup,
    faInfoCircle,
    faPhone,
    faCalendarAlt,
    faPlus,
    faTrash,
    faEdit,
    faFileAlt,
    faPaperclip,
    faChevronUp,
    faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

function Subfolder() {
    const { subfolderId } = useParams();
    const [subfolder, setSubfolder] = useState(null);
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentContent, setCurrentContent] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        linkToFile: '',
        file: null
    });
    const [filePreview, setFilePreview] = useState(null);
    const [isCardCollapsed, setIsCardCollapsed] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {

        fetchData();
    }, [subfolderId, navigate]);
    const fetchData = async () => {
        try {
            const token = localStorage.getItem("token");
            const role = localStorage.getItem("role");

            if (!token || role !== "ROLE_STAFF") {
                navigate("/login");
                return;
            }

            setLoading(true);

            // Fetch subfolder details
            const subfolderResponse = await ApiCall(`/api/v1/daily-control-subfolder/${subfolderId}`, "GET");

            // Fetch contents
            const contentsResponse = await ApiCall(`/api/v1/daily-control-subfolder/content/${subfolderId}`, "GET");

            if (subfolderResponse.error === false && subfolderResponse.data) {
                setSubfolder(subfolderResponse.data);
            } else {
                setError("Subfolder not found");
                navigate("/mobil/daily-control");
            }

            if (contentsResponse.error === false && contentsResponse.data) {
                setContents(contentsResponse.data);
            }
        } catch (err) {
            setError(err.message);
            navigate("/mobil/daily-control");
        } finally {
            setLoading(false);
        }
    };


    const openModal = (content = null) => {
        setCurrentContent(content);
        if (content) {
            setFormData({
                name: content.name,
                description: content.description,
                linkToFile: content.linkToFile || '',
                file: null
            });
            if (content.filePath) {
                setFilePreview(content.filePath);
            } else {
                setFilePreview(null);
            }
        } else {
            setFormData({
                name: '',
                description: '',
                linkToFile: '',
                file: null
            });
            setFilePreview(null);
        }
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setCurrentContent(null);
        setFilePreview(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                file: file
            }));

            // Create preview for images
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = () => {
                    setFilePreview(reader.result);
                };
                reader.readAsDataURL(file);
            } else {
                setFilePreview(null);
            }
        }
    };

    const uploadFile = async (file, prefix) => {
        const formData = new FormData();
        formData.append('photo', file);  // Changed from 'photo' to 'file'
        formData.append('prefix', prefix);

        try {
            const response = await ApiCall('/api/v1/file/upload', 'POST', formData, null, true);
            return response.data;
        } catch (error) {
            console.error("Error uploading file:", error);
            throw error;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            let filePath = currentContent?.filePath || null;

            // Upload file if new file is selected
            if (formData.file) {
                filePath = await uploadFile(formData.file, 'subfolder-content'); // Removed leading slash
            }

            let response;
            const requestData = {
                name: formData.name,
                description: formData.description,
                linkToFile: formData.linkToFile,
                ...(filePath && { filePath: filePath }),
                dailyControlSubFolder:  subfolderId
            };


            if (currentContent) {
                response = await ApiCall(
                    `/api/v1/daily-control-subfolder/content/${currentContent.id}`,
                    "PUT",
                    requestData
                );
            } else {
                response = await ApiCall(
                    `/api/v1/daily-control-subfolder/content/${token}`,
                    "POST",
                    requestData
                );
            }

            if (response.error === false && response.data) {
                fetchData();
                closeModal();
            } else {
                setError(response.message || "Something went wrong");
            }
        } catch (err) {
            setError(currentContent ? "Failed to update content" : "Failed to add content");
            console.error("Submission error:", err);
        }
    };

    const handleDelete = async (contentId) => {
        try {
            const token = localStorage.getItem("token");
            const response = await ApiCall(
                `/api/v1/daily-control-subfolder/content/${contentId}`,
                "DELETE",
                null,
                { 'Authorization': `Bearer ${token}` }
            );

            if (response.status === 204) {
                setContents(contents.filter(content => content.id !== contentId));
            }
        } catch (err) {
            setError("Failed to delete content");
        }
    };

    const getFileIcon = (fileName) => {
        if (!fileName) return faFileAlt;

        const extension = fileName.split('.').pop().toLowerCase();
        switch(extension) {
            case 'pdf':
                return faFileAlt;
            case 'doc':
            case 'docx':
                return faFileAlt; // You might want to use a Word icon if available
            case 'xls':
            case 'xlsx':
                return faFileAlt; // You might want to use an Excel icon if available
            case 'jpg':
            case 'jpeg':
            case 'png':
            case 'gif':
                return faFileAlt; // You might want to use an image icon if available
            default:
                return faFileAlt;
        }
    };

    if (loading) {
        return (
            <div className="flex">
                <Sidebar />
                <div className="p-4 sm:ml-64 w-full min-h-screen flex items-center justify-center">
                    <div className="text-xl">Loading subfolder details...</div>
                </div>
            </div>
        );
    }


    const downloadFile = async (file) => {
        try {
            const response = await fetch(`${baseUrl}/api/v1/file/getFile/${file?.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/pdf',
                },
            });
            if (!response.ok) throw new Error("Failed to download file");

            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = `${file.name}`;
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(downloadUrl);
        } catch (error) {
            console.error("Error downloading file:", error);
        }
    };
    if (error) {
        return (
            <div className="flex">
                <Sidebar />
                <div className="p-4 sm:ml-64 w-full min-h-screen flex items-center justify-center">
                    <div className="text-xl text-red-500">{error}</div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex">
            <Sidebar />
            <div
                className="p-4 sm:ml-64 w-full min-h-screen"
                style={{
                    backgroundImage: `url(${newbg})`,
                    backgroundRepeat: "repeat",
                    backgroundAttachment: "fixed"
                }}
            >
                {subfolder && (
                    <div className="max-w-6xl mx-auto">
                        {/* Header with Back Button */}
                        <div className="flex items-center justify-between mb-6">
                            <button
                                onClick={() => navigate("/mobil/daily-control")}
                                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                            >
                                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                                <span className="font-medium">Ortga qaytish</span>
                            </button>
                            <button
                                onClick={() => openModal()}
                                className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                            >
                                <FontAwesomeIcon  icon={faPlus} className="w-12 mr-2 font-bold" />
                                Ma'lumot qo'shish
                            </button>
                        </div>

                        {/* Main Card */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                            {/* Card Header */}
                            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 flex justify-between items-center">
                                <div>
                                    <h1 className="text-xl font-bold text-white">{subfolder.name}</h1>
                                    {subfolder.description && (
                                        <p className="text-blue-100 mt-1">{subfolder.description}</p>
                                    )}
                                </div>
                                <button
                                    onClick={() => setIsCardCollapsed(!isCardCollapsed)}
                                    className="text-white hover:text-blue-200 transition-colors"
                                >
                                    <FontAwesomeIcon icon={isCardCollapsed ? faChevronDown : faChevronUp} />
                                </button>
                            </div>

                            {/* Card Body - conditionally rendered based on isCardCollapsed */}
                            {!isCardCollapsed && (
                                <div className="p-6 space-y-6">
                                    {/* Department Section */}
                                    <div className="flex items-start">
                                        <div className="bg-blue-100 p-3 rounded-full mr-4">
                                            <FontAwesomeIcon icon={faLayerGroup} className="text-blue-600 text-lg" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Bo'lim</h3>
                                            <p className="text-lg font-medium text-gray-800">{subfolder.dailyControl.name}</p>
                                            <p className="text-gray-600">{subfolder.dailyControl.description}</p>
                                        </div>
                                    </div>

                                    {/* Staff Section */}
                                    <div className="flex items-start">
                                        <div className="bg-green-100 p-3 rounded-full mr-4">
                                            <FontAwesomeIcon icon={faUserTie} className="text-green-600 text-lg" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Mas'ul Xodim</h3>
                                            <p className="text-lg font-medium text-gray-800">{subfolder.staff.name}</p>
                                            {subfolder.staff.telegramId && (
                                                <div className="flex items-center mt-1">
                                                    <FontAwesomeIcon icon={faPhone} className="text-gray-400 mr-2" />
                                                    <span className="text-gray-600">{subfolder.staff.telegramId}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Metadata Section */}
                                    <div className="flex items-start">
                                        <div className="bg-purple-100 p-3 rounded-full mr-4">
                                            <FontAwesomeIcon icon={faCalendarAlt} className="text-purple-600 text-lg" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Yaratilgan Sana</h3>
                                            <p className="text-gray-600">
                                                {new Date(subfolder.createdAt).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Contents List */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-4 bg-gray-100 border-b flex justify-between items-center">
                                <h2 className="text-lg font-semibold">Ma'lumotlar</h2>
                            </div>
                            {contents.length === 0 ? (
                                <div className="p-6 text-center text-gray-500">
                                    Ma'lumotlar mavjud emas!
                                </div>
                            ) : (
                                <div className="divide-y">
                                    {contents.map(content => (
                                        <div key={content.id} className="p-4 hover:bg-gray-50 group">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-medium flex items-center">
                                                        <FontAwesomeIcon
                                                            icon={getFileIcon(content.filePath || content.linkToFile)}
                                                            className="mr-2 text-blue-500"
                                                        />
                                                        {content.name}
                                                    </h3>
                                                    <p className="text-gray-600 ml-6 mt-1">{content.description}</p>
                                                    {content.linkToFile && (
                                                        <div className="ml-6 mt-2">
                                                            <a
                                                                href={content.linkToFile}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-blue-600 hover:underline flex items-center"
                                                            >
                                                                <FontAwesomeIcon icon={faPaperclip} className="mr-1" />
                                                                Google Docs/Sheets Link
                                                            </a>
                                                        </div>
                                                    )}

                                                    {content?.attachment && (
                                                        <div className="ml-6 mt-2">
                                                            <button

                                                                className="text-blue-600 hover:underline flex items-center"
                                                                onClick={()=>downloadFile(content?.attachment)}
                                                            >
                                                                <FontAwesomeIcon icon={faPaperclip} className="mr-1" />
                                                                {content?.attachment?.name?.substring(content.attachment.name.indexOf('_') + 1)}
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button
                                                        onClick={() => openModal(content)}
                                                        className="text-blue-500 hover:text-blue-700 p-2"
                                                    >
                                                        <FontAwesomeIcon icon={faEdit} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(content.id)}
                                                        className="text-red-500 hover:text-red-700 p-2"
                                                    >
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="ml-6 mt-2 text-sm text-gray-500">
                                                <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
                                                {new Date(content.createdAt).toLocaleString()}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Rodal
                            visible={modalIsOpen}
                            onClose={closeModal}
                            animation="zoom"
                            closeOnEsc={true}
                            width={500}
                            height={550}  // Changed from fixed 650px to auto
                            customStyles={{
                                borderRadius: '8px',
                                padding: '20px',
                                maxWidth: '90%'
                            }}
                        >
                            <div className="bg-white rounded-lg">
                                <h2 className="text-xl font-bold mb-4">
                                    {currentContent ? "Edit Content" : "Yangi ma'lumot qoshish"}
                                </h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-1">Sarlavha*</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="w-full p-2 border rounded"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-1">Izoh*</label>
                                        <textarea
                                            name="description"
                                            className="w-full p-2 border rounded"
                                            rows="3"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-1">Google Docs/Sheets Havola</label>
                                        <input
                                            type="text"
                                            name="linkToFile"
                                            className="w-full p-2 border rounded"
                                            value={formData.linkToFile}
                                            onChange={handleInputChange}
                                            placeholder="https://docs.google.com/..."
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-1">Fayl yuklash</label>
                                        <input
                                            type="file"
                                            name="file"
                                            className="w-full p-2 border rounded"
                                            onChange={handleFileChange}
                                        />
                                        {filePreview && (
                                            <div className="mt-2">
                                                {formData.file?.type.startsWith('image/') ? (
                                                    <img
                                                        src={filePreview}
                                                        alt="Preview"
                                                        className="max-h-40 max-w-full rounded border"
                                                    />
                                                ) : (
                                                    <div className="flex items-center text-blue-600">
                                                        <FontAwesomeIcon icon={faPaperclip} className="mr-2" />
                                                        {formData.file.name}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                        {currentContent?.filePath && !formData.file && (
                                            <div className="mt-2 text-sm text-gray-600">
                                                Current file: {currentContent.filePath.split('/').pop()}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex justify-end space-x-2">
                                        <button
                                            type="button"
                                            onClick={closeModal}
                                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                        >
                                            Bekor qilish
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                        >
                                            {currentContent ? "Yangilash" : "Saqlash"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </Rodal>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Subfolder;