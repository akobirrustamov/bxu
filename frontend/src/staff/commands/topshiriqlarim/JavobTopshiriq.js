import React, { use, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive, faClock, faUser, faFile, faDownload } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import ApiCall, { baseUrl } from "../../../config/index";
import newbg from "../../../staff/images/newbg.jpg";
import Sidebar from '../../Sidebar';
import Loading from "../../components/Loading";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const JavobTopshiriq = ({ goBack }) => {
    const { state } = useLocation();
    const item = state?.itemData;
    const [expanded, setExpanded] = useState(false);
    const [history, setHistory] = useState([]);
    const [responseText, setResponseText] = useState("");
    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const now = new Date();
    const tileLimitDate = new Date(item.timeLimit);
    const timeDifferenceInMs = tileLimitDate - now;
    const timeDifferenceInHours = timeDifferenceInMs / (1000 * 60 * 60);
    const timeDifferenceInDays = Math.floor(timeDifferenceInHours / 24);
    const remainingHours = Math.floor(timeDifferenceInHours % 24);

    const timeText = timeDifferenceInHours < 0
        ? `Topshiriq muddatida bajarilmadi: ${Math.abs(timeDifferenceInDays)} kun ${Math.abs(remainingHours)} soat o'tdi`
        : `Qolgan vaqt: ${Math.abs(timeDifferenceInDays)} kun ${Math.abs(remainingHours)} soat`;

    const getHistory = async (id) => {
        setIsLoading(true);
        try {
            const response = await ApiCall(`/api/v1/app/command/get-history/${id}`, "GET");
            if (response.error === false && response.data) {
                setHistory(response.data);
            } else {
                toast.error("Failed to fetch history");
            }
        } catch (error) {
            toast.error("Unexpected error");
        }
        setIsLoading(false);
    };

    const handleFileChange = (e) => {
        if (e.target.files.length) {
            setFile(e.target.files[0]);
        }
    };

    const handleFileUpload = async () => {
        if (!file) return null;
        const formData = new FormData();
        formData.append("photo", file);
        formData.append("prefix", `/command/${item?.staff.name}`);

        const response = await ApiCall(`/api/v1/file/upload`, "POST", formData, {
            "Content-Type": "multipart/form-data",
        });

        if (response.error === false && response.data) return response.data;
        toast.error("File upload failed");
        return null;
    };

    const postResponse = async () => {
        if (!responseText && !file) {
            toast.error("Response text or file is required.");
            return;
        }

        setIsLoading(true);
        try {
            let uploadedFile = null;
            if (file) uploadedFile = await handleFileUpload();

            const payload = {
                responseText: responseText,
                fileId: uploadedFile,
            };

            const response = await ApiCall(`/api/v1/app/staff/my-commands/${item.id}`, "PUT", payload);

            if (response.error === false) {
                toast.success("Muvaffaqiyatli! Malumotlar yuborildi.");
                setTimeout(() => {
                    navigate("/mobil/commands/topshiriqlarim");
                }, 500);
            } else {
                toast.error("Failed to submit response");
            }
        } catch (error) {
            console.log(error);
            toast.error("Unexpected");
        }
        setIsLoading(false);
    };

    const downloadFile = async (item) => {
        try {
            // Fetch the PDF from the server
            const response = await fetch(`${baseUrl}/api/v1/file/getFile/${item?.id}`, {
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
            link.download = `${item.name}`; // Change the name as desired
            document.body.appendChild(link);
            link.click();

            // Cleanup the link
            link.remove();
            window.URL.revokeObjectURL(downloadUrl);
        } catch (error) {
            console.error("Error downloading file:", error);
        }
    };


    useEffect(() => {
        getHistory(item.id);
    }, [item]);

    if (isLoading) {
        return (
            <Loading />
        );
    }

    return (
        <div className='flex'>
            <Sidebar />
            <div className="p-4 sm:ml-64 w-full min-h-screen" style={{
                backgroundImage: `url(${newbg})`,
                backgroundRepeat: "repeat",
            }}>
                <div className="p-6 max-w-6xl mx-auto rounded-lg ">
                    <div className="bg-white p-4 rounded shadow mb-4">
                        <h1 className="text-2xl font-bold mb-4">{item.text}</h1>
                        <p className="mb-2"><FontAwesomeIcon icon={faArchive} /> <b>Topshiriq mazmuni:</b> {item.description}</p>
                        <p className="mb-2"><FontAwesomeIcon icon={faClock} /> <b>Berilgan sana:</b> {new Date(item.createdAt).toLocaleString('en-GB')}</p>
                        <p className="mb-2"><FontAwesomeIcon icon={faClock} /> <b>Bajarish muddati:</b> {tileLimitDate.toLocaleString('en-GB')}</p>
                        {item?.responseTime && (
                            <p className="mb-2"><FontAwesomeIcon icon={faClock} /> <b>Yuklangan muddati:</b> {new Date(item.responseTime).toLocaleString('en-GB')}</p>
                        )}
                        <p className="mb-2"><FontAwesomeIcon icon={faUser} /> <b>Topshiriq beruvchi:</b> {item?.commandStaff?.name || 'N/A'}</p>

                        {item?.file && (
                            <div className="flex items-center mb-2">
                                <button onClick={() => downloadFile(item.file)} className="text-blue-600 hover:underline">
                                    <FontAwesomeIcon icon={faFile} /> Topshiriq fayli: {item.file?.name?.split("_").slice(1).join("_")}
                                </button>
                                <FontAwesomeIcon icon={faDownload} className="ml-2 text-gray-700" />
                            </div>
                        )}

                        {item?.responseFile && (
                            <div className="flex items-center mb-2">
                                <button onClick={() => downloadFile(item.responseFile)} className="text-green-600 hover:underline">
                                    <FontAwesomeIcon icon={faFile} /> Javob fayli: {item.responseFile?.name?.split("_").slice(1).join("_")}
                                </button>
                                <FontAwesomeIcon icon={faDownload} className="ml-2 text-gray-700" />
                            </div>
                        )}

                        {item?.responseText && (
                            <p className="mb-4"><FontAwesomeIcon icon={faArchive} /> <b>Javob mazmuni:</b> {item.responseText}</p>
                        )}

                        <p className="text-sm text-gray-700 mb-4">{timeText}</p>

                        <div className="mt-6">
                            <h2 className="text-xl font-semibold mb-4">Topshiriq tarixi</h2>
                            {history.length > 0 ? (
                                history.map((his, idx) => (
                                    <div key={idx} className="flex items-center">
                                        <div className="flex items-center">
                                            <div className="w-3 h-3 rounded-full bg-blue-600 mb-3 mr-2"></div>
                                            {his.fromStatus === 1 && his.toStatus === 2 && <p>{item?.staff?.name} tomonidan ko'rildi: {new Date(his.createdAt).toLocaleString('en-GB')}</p>}
                                            {his.fromStatus === 2 && his.toStatus === 3 && <p>{item?.staff?.name} tomonidan yuklandi: {new Date(his.createdAt).toLocaleString('en-GB')}</p>}
                                            {his.fromStatus === 3 && his.toStatus === 1 && <p>{item?.commandStaff?.name} tomonidan qaytarildi: {new Date(his.createdAt).toLocaleString('en-GB')}</p>}
                                            {his.fromStatus === 3 && his.toStatus === 4 && <p>{item?.commandStaff?.name} tomonidan qabul qilindi: {new Date(his.createdAt).toLocaleString('en-GB')}</p>}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>Topshiriq tarixi mavjud emas.</p>
                            )}
                        </div>

                        {item?.status === 2 && (
                            <div className="mt-8">
                                <h2 className="text-xl font-semibold mb-4">Topshiriqni yuklash</h2>
                                <textarea
                                    className="w-full p-3 border rounded mb-4"
                                    placeholder="Javob matni"
                                    value={responseText}
                                    onChange={(e) => setResponseText(e.target.value)}
                                ></textarea>
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    className="block w-full mb-4"
                                />
                                {file && <p className="text-gray-800">Fayl: {file.name}</p>}
                                <button onClick={postResponse} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                                    Javob yuborish
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default JavobTopshiriq;
