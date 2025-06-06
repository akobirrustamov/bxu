import React, { useEffect, useState } from "react";
import {
  FaArchive,
  FaClock,
  FaUser,
  FaFileAlt,
  FaDownload,
} from "react-icons/fa";
import ApiCall, { baseUrl } from "../../../config/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { useLocation, useNavigate } from "react-router-dom";
import newbg from "../../../staff/images/newbg.jpg";
import Sidebar from "../../Sidebar";
import { ToastContainer, toast } from "react-toastify";

function BatafsilBuyruq() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const item = state?.itemData;
  console.log(item);

  const [history, setHistory] = useState([]);
  const [accept, setAccept] = useState(0);
  const [fileName, setFileName] = useState(null);
  const [fileUri, setFileUri] = useState(null);
  const [responseText, setResponseText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [commandMessage, setCommandMessage] = useState([]);

  const now = new Date();
  const deadline = new Date(item?.timeLimit);
  const timeDiffHours = (deadline - now) / (1000 * 60 * 60);
  const days = Math.floor(timeDiffHours / 24);
  const hours = Math.floor(timeDiffHours % 24);
  const timeText =
    timeDiffHours < 0
      ? `Topshiriq muddati o'tgan: ${Math.abs(days)} kun ${Math.abs(
          hours
        )} soat`
      : `Qolgan vaqt: ${days} kun ${hours} soat`;
  const color =
    timeDiffHours < 0
      ? "bg-red-500"
      : timeDiffHours > 24
      ? "bg-green-500"
      : "bg-yellow-400";

  useEffect(() => {
    fetchHistory();
    fetchCommandMessage();
  }, [item.id]);

  const fetchHistory = async () => {
    try {
      const res = await ApiCall(
        `/api/v1/app/command/get-history/${item.id}`,
        "GET"
      );
      setHistory(res.data || []);
    } catch (err) {
      console.error("Error fetching history:", err);
    }
  };

  const fetchCommandMessage = async () => {
    try {
      const res = await ApiCall(
        `/api/v1/app/command/message/${item.id}`,
        "GET"
      );
      setCommandMessage(res.data || []);
    } catch (err) {
      console.error("Error fetching command message:", err);
    }
  };

  const downloadFile = async (file) => {
    try {
      const response = await fetch(
        `${baseUrl}/api/v1/file/getFile/${file?.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/pdf",
          },
        }
      );
      if (!response.ok) throw new Error("Failed to download file");

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
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

  const handleFileUpload = async () => {
    try {
      if (!fileUri || !fileName) return null;

      const formData = new FormData();
      formData.append("photo", fileUri);
      formData.append("prefix", `/command/${item.commandStaff.name}`);

      const res = await ApiCall("/api/v1/file/upload", "POST", formData);
      if (res?.error)
        throw new Error(res?.data?.message || "File upload error");

      const uploadedFileId = res?.data;
      if (!uploadedFileId) throw new Error("No file ID returned from server");

      return uploadedFileId;
    } catch (err) {
      toast.error("Fayl yuklashda xatolik. Qayta urinib ko'ring.");
      return null;
    }
  };

  const handleReject = async () => {
    setIsLoading(true);
    try {
      let uploadedFileId = null;

      if (fileUri) {
        uploadedFileId = await handleFileUpload();
        if (!uploadedFileId) {
          setIsLoading(false);
          return;
        }
      }

      const obj = {
        responseText,
        fileId: uploadedFileId,
      };

      const res = await ApiCall(
        `/api/v1/app/staff/reject/${item?.id}`,
        "POST",
        obj
      );
      if (res?.error) throw new Error(res?.data?.message || "Server error");

      toast.success("Muvaffaqiyatli! Ma'lumotlar yuborildi.");
      setTimeout(() => navigate("/mobil/commands/buyruqlar"), 500);
    } catch (err) {
      toast.error("Xatolik yuz berdi: " + err.message);
    }
    setIsLoading(false);
  };

  const handleAccept = async () => {
    setIsLoading(true);
    try {
      const res = await ApiCall(
        `/api/v1/app/staff/completed/${item?.id}/5`,
        "POST"
      );
      if (res.error === false) {
        toast.success("Muvaffaqiyatli! Ma'lumotlar yuborildi.");
        setTimeout(() => navigate("/mobil/commands/buyruqlar"), 500);
      }
    } catch (err) {
      console.error("Accept error:", err);
    }
    setIsLoading(false);
  };

  const getMessageForHistory = (his) => {
    return commandMessage.find((msg) => {
      const hisTime = new Date(his.createdAt).getTime();
      const msgTime = new Date(msg.createdAt).getTime();
      return Math.abs(hisTime - msgTime) < 5000;
    });
  };

  return (
    <div className="flex">
      <Sidebar />
      <div
        className="p-4 sm:ml-64 w-full min-h-screen"
        style={{ backgroundImage: `url(${newbg})`, backgroundRepeat: "repeat" }}
      >
        <div className="flex items-center justify-between ml-6 mt-6">
          <button
            onClick={() => navigate("/mobil/commands/buyruqlar")}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            <span className="font-medium">Ortga qaytish</span>
          </button>
        </div>
        <div className="p-6 max-w-6xl mx-auto rounded-lg">
          <div className="bg-white p-4 rounded shadow mb-4">
            <h1 className="text-2xl font-bold mb-4">{item?.text}</h1>
            <p className="mb-2">
              <FaArchive className="inline mr-2" /> <strong>Mazmuni:</strong>{" "}
              {item?.description}
            </p>
            <p>
              <FaClock className="inline mr-2" /> <strong>Berilgan:</strong>{" "}
              {new Date(item?.createdAt).toLocaleString("en-GB")}
            </p>
            <p>
              <FaClock className="inline mr-2" /> <strong>Muddati:</strong>{" "}
              {deadline.toLocaleString("en-GB")}
            </p>
            <p>
              <FaUser className="inline mr-2" />{" "}
              <strong>Buyruq beruvchi:</strong> {item?.commandStaff?.name}
            </p>
            <p>
              <FaUser className="inline mr-2" /> <strong>Bajaruvchi:</strong>{" "}
              {item?.staff?.name}
            </p>

            {item?.file && item?.responseFile && (
              <div className="mt-3 items-center">
                <div className="flex items-center mb-2">
                  <FaFileAlt className="mr-2" />
                  <strong>Topshiriq fayli:</strong>{" "}
                  <button
                    onClick={() => downloadFile(item.file)}
                    className="text-blue-600 underline ml-2"
                  >
                    {item.file.name?.split("_").slice(1).join("_")}
                  </button>
                  <FaDownload className="ml-2 text-gray-500" />
                </div>
                <div className="flex items-center mb-2">
                  <FaFileAlt className="mr-2" />
                  <strong>Javob fayli:</strong>{" "}
                  <button
                    onClick={() => downloadFile(item.responseFile)}
                    className="text-blue-600 underline ml-2"
                  >
                    {item.responseFile.name?.split("_").slice(1).join("_")}
                  </button>
                  <FaDownload className="ml-2 text-gray-500" />
                </div>
              </div>
            )}

            {item?.responseText && (
              <p className="mt-2">
                <strong>Javob:</strong> {item?.responseText}
              </p>
            )}

            {(item?.status === 1 || item?.status === 2) && (
              <div className="flex items-center my-3">
                <span className={`w-4 h-4 rounded-full ${color} mr-2`}></span>
                <span
                  className={`text-sm ${
                    timeDiffHours < 0 ? "text-red-600" : "text-gray-800"
                  }`}
                >
                  {timeText}
                </span>
              </div>
            )}

            {item?.status === 3 && (
              <div className="flex gap-4 mb-6">
                <button
                  onClick={handleAccept}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Qabul qilish
                </button>
                <button
                  onClick={() => setAccept(2)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Rad etish
                </button>
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
                {fileName && (
                  <p className="text-sm text-gray-700 mb-2">
                    Yuklanadigan fayl: {fileName}
                  </p>
                )}
                <button
                  onClick={handleReject}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  disabled={isLoading}
                >
                  {isLoading ? "Yuborilmoqda..." : "Yuborish"}
                </button>
              </div>
            )}

            {history.length > 0 && (
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-bold mb-4">Topshiriq tarixi</h2>
                {history.map((his) => (
                  <div key={his.id} className="flex text-sm mb-3">
                    <span className="mt-1 w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                    <div>
                      {formatHistory(
                        his,
                        item,
                        downloadFile,
                        getMessageForHistory(his)
                      )}
                    </div>
                  </div>
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

function formatHistory(his, item, downloadFile, messageObj) {
  const date = new Date(his.createdAt).toLocaleDateString("en-GB");
  const time = new Date(his.createdAt).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  let text = "";
  if (his.fromStatus === 1 && his.toStatus === 2)
    text = `Topshiriq ${item?.staff?.name} tomonidan ${date}, ${time} da ko'rildi.`;
  else if (his.fromStatus === 2 && his.toStatus === 3)
    text = `Topshiriq ${item?.staff?.name} tomonidan ${date}, ${time} da yuklandi.`;
  else if (his.fromStatus === 3 && his.toStatus === 1) {
    text = `Topshiriq ${item?.commandStaff?.name} tomonidan ${date}, ${time} da qaytarildi.`;
    if (his.responseText) text += ` Sabab: ${his.responseText}`;
  } else if (his.fromStatus === 3 && his.toStatus === 4)
    text = `Topshiriq ${item?.commandStaff?.name} tomonidan ${date}, ${time} da qabul qilindi.`;

  return (
    <>
      <p className="mb-1">{text}</p>
      {his.file && (
        <button
          onClick={() => downloadFile(his.file)}
          className="text-blue-600 underline text-sm flex items-center mt-1"
        >
          <FaDownload className="mr-1" />{" "}
          {his.file.name?.split("_").slice(1).join("_")}
        </button>
      )}
      {his.fromStatus === 3 && his.toStatus === 1 && messageObj && (
        <div className="flex items-center gap-2 mt-1 ml-4">
          {messageObj.message && (
            <p className="text-sm text-gray-700">
              📌 Sabab: {messageObj.message}
            </p>
          )}
          {messageObj.file && (
            <button
              onClick={() => downloadFile(messageObj.file)}
              className="text-blue-600 underline text-sm flex items-center mt-1"
            >
              <FaDownload className="mr-1" />{" "}
              {messageObj.file.name?.split("_").slice(1).join("_")}
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default BatafsilBuyruq;
