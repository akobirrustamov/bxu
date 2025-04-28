import React, { useEffect, useState } from "react";
import { FaArchive, FaClock, FaUser, FaFileAlt, FaDownload } from "react-icons/fa";
import ApiCall, { baseUrl } from "../../../config/index";
import { useLocation, useNavigate } from "react-router-dom";
import newbg from "../../../staff/images/newbg.jpg";
import Sidebar from '../../Sidebar';
import { ToastContainer, toast } from "react-toastify";

function BatafsilBuyruq() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const item = state?.itemData;
    // console.log(item);


    const [history, setHistory] = useState([]);
    const [accept, setAccept] = useState(0);
    const [fileName, setFileName] = useState(null);
    const [fileUri, setFileUri] = useState(null);
    const [responseText, setResponseText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const now = new Date();
    const deadline = new Date(item?.timeLimit);
    const timeDiffHours = (deadline - now) / (1000 * 60 * 60);
    const days = Math.floor(timeDiffHours / 24);
    const hours = Math.floor(timeDiffHours % 24);

    const timeText = timeDiffHours < 0
        ? `Topshiriq muddati o'tgan: ${Math.abs(days)} kun ${Math.abs(hours)} soat`
        : `Qolgan vaqt: ${days} kun ${hours} soat`;

    const color = timeDiffHours < 0 ? "bg-red-500" : timeDiffHours > 24 ? "bg-green-500" : "bg-yellow-400";

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const res = await ApiCall(`/api/v1/app/command/get-history/${item.id}`, "GET");
                setHistory(res.data || []);
            } catch (err) {
                console.error(err);
            }
        };
        fetchHistory();
    }, [item.id]);

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

    const handleFileUpload = async () => {

        try {
            if (!fileUri || !fileName) {
                return null;
            }
            const formData = new FormData();
            formData.append("photo", fileUri);
            formData.append("prefix", `/command/${item.commandStaff.name}`);
            const res = await ApiCall('/api/v1/file/upload', "POST", formData);
            const data = await res.json();
            console.log(res.data)
            if (data?.error === false)
                return data.data?.id;
            else throw new Error(data?.message || "File upload error");
        } catch (err) {
            console.error("Upload failed:", err);
            return null;
        }
    };


    const handleReject = async () => {
        setIsLoading(true);
        try {
            const fileId = fileUri ? null : await handleFileUpload();
            console.log(fileId);

            const obj = { responseText, fileId };

            const res = await ApiCall(`/api/v1/app/staff/reject/${item?.id}`, "POST", obj);
            console.log(res);

            if (res.error === false) {
                toast.success("Muvaffaqiyatli! Malumotlar yuborildi.");
                setTimeout(() => {
                    navigate("/mobil/commands/buyruqlar");
                }, 500);
            }
        } catch (err) {
            console.error(err);
        }
        setIsLoading(false);
    };

    const handleAccept = async () => {
        setIsLoading(true);
        try {
            const res = await ApiCall(`/api/v1/app/staff/completed/${item?.id}/5`, "POST");
            if (res.error === false) {
                toast.success("Muvaffaqiyatli! Malumotlar yuborildi.");
                setTimeout(() => {
                    navigate("/mobil/commands/buyruqlar");
                }, 500);
            }
        } catch (err) {
            console.error(err);
        }
        setIsLoading(false);
    };

    return (
        <div className='flex'>
            <Sidebar />
            <div className="p-4 sm:ml-64 w-full min-h-screen" style={{
                backgroundImage: `url(${newbg})`,
                backgroundRepeat: "repeat",
            }}>
                <div className="p-6 max-w-6xl mx-auto rounded-lg ">

                    <div className="bg-white p-4 rounded shadow mb-4">
                        <h1 className="text-2xl font-bold mb-4">{item?.text}</h1>
                        <p className="mb-2"><FaArchive className="inline mr-2" /> <strong>Mazmuni:</strong> {item?.description}</p>
                        <p><FaClock className="inline mr-2" /> <strong>Berilgan:</strong> {new Date(item?.createdAt).toLocaleString("en-GB")}</p>
                        <p><FaClock className="inline mr-2" /> <strong>Muddati:</strong> {deadline.toLocaleString("en-GB")}</p>
                        <p><FaUser className="inline mr-2" /> <strong>Buyruq beruvchi:</strong> {item?.commandStaff?.name}</p>
                        <p><FaUser className="inline mr-2" /> <strong>Bajaruvchi:</strong> {item?.staff?.name}</p>

                        {item?.file && item?.responseFile && (
                            <div className="mt-3 items-center">
                                <div className="flex items-center mb-2">
                                    <FaFileAlt className="mr-2" />
                                    <button onClick={() => downloadFile(item.file)} className="text-blue-600 underline">
                                        {item.file.name?.split("_").slice(1).join("_")}
                                    </button>
                                    <FaDownload className="ml-2 text-gray-500" />
                                </div>
                                <div className="flex items-center mb-2">
                                    <FaFileAlt className="mr-2" />
                                    <button onClick={() => downloadFile(item.file)} className="text-blue-600 underline">
                                        {item.responseFile.name?.split("_").slice(1).join("_")}
                                    </button>
                                    <FaDownload className="ml-2 text-gray-500" />
                                </div>
                            </div>
                        )}

                        {item?.responseText && (
                            <p className="mt-2"><strong>Javob:</strong> {item?.responseText}</p>
                        )}

                        {(item?.status === 1 || item?.status === 2) && (
                            <div className="flex items-center my-3">
                                <span className={`w-4 h-4 rounded-full ${color} mr-2`}></span>
                                <span className={`text-sm ${timeDiffHours < 0 ? "text-red-600" : "text-gray-800"}`}>{timeText}</span>
                            </div>
                        )}

                        {item?.status === 3 && (
                            <div className="flex gap-4 mb-6">
                                <button onClick={handleAccept} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Qabul qilish</button>
                                <button onClick={() => setAccept(2)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Rad etish</button>
                            </div>
                        )}

                        {accept === 2 && (
                            <div className="bg-white p-4 rounded shadow mb-6">
                                <h2 className="text-lg font-bold mb-2">Sababni yozing</h2>
                                <textarea
                                    value={responseText}
                                    onChange={(e) => setResponseText(e.target.value)}
                                    placeholder="Sabab matni"
                                    className="w-full border rounded p-2 mb-3"
                                />
                                <input
                                    type="file"
                                    onChange={(e) => {
                                        setFileName(e.target.files[0]?.name);
                                        setFileUri(e.target.files[0]);
                                    }}
                                    className="mb-3"
                                />
                                {fileName && <p className="text-sm text-gray-700 mb-2">Yuklanadigan fayl: {fileName}</p>}
                                <button onClick={handleReject} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" disabled={isLoading}>
                                    {isLoading ? "Yuborilmoqda..." : "Yuborish"}
                                </button>
                            </div>
                        )}

                        {history.length > 0 && (
                            <div className="bg-white p-4 rounded shadow">
                                <h2 className="text-lg font-bold mb-4">Topshiriq tarixi</h2>
                                {history.map((his, idx) => (
                                    <p key={idx} className="text-sm mb-1">
                                        <span className="inline-block w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                                        {formatHistory(his, item)}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={2000} />
        </div>
    );
}

function formatHistory(his, item) {
    const date = new Date(his.createdAt).toLocaleDateString("en-GB");
    const time = new Date(his.createdAt).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });

    if (his.fromStatus === 1 && his.toStatus === 2)
        return `Topshiriq ${item?.staff?.name} tomonidan ${date}, ${time} da ko'rildi.`;
    if (his.fromStatus === 2 && his.toStatus === 3)
        return `Topshiriq ${item?.staff?.name} tomonidan ${date}, ${time} da yuklandi.`;
    if (his.fromStatus === 3 && his.toStatus === 1)
        return `Topshiriq ${item?.commandStaff?.name} tomonidan ${date}, ${time} da qaytarildi.`;
    if (his.fromStatus === 3 && his.toStatus === 4)
        return `Topshiriq ${item?.commandStaff?.name} tomonidan ${date}, ${time} da qabul qilindi.`;
    return "";
}

export default BatafsilBuyruq;
