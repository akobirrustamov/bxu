import React, { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import ApiCall, { baseUrl } from "../../config/index";
import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar";
import newbg from "../images/newbg.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function NomenklaturaFolder() {
  const location = useLocation();
  const { itemData } = location.state || {};
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState(null);
  const [fileDescription, setFileDescription] = useState("");
  const [saving, setSaving] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (itemData?.id && itemData?.folder) {
      fetchFiles();
    }
  }, [itemData?.id]);

  const fetchFiles = async () => {
    try {
      setLoading(true);
      const response = await ApiCall(
        `/api/v1/app/nomenklaturafile/${itemData.id}/${itemData.folder}`,
        "GET"
      );
      console.log(response.data);

      if (!response.error && response.data) {
        setFiles(response.data);
      } else {
        toast.error("Failed to fetch files.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error fetching files.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setIsModalVisible(true);
    } else {
      toast.warning("Please select a valid PDF file.");
    }
  };

  const handleSaveFile = async () => {
    if (!file || !fileDescription) {
      toast.warning("Please select a file and enter a description.");
      return;
    }

    setSaving(true);

    try {
      const formData = new FormData();
      formData.append("photo", file);
      formData.append(
        "prefix",
        `/${itemData.name}/${itemData.code}-${itemData.folder}`
      );

      const uploadResponse = await ApiCall(
        "/api/v1/file/upload",
        "POST",
        formData,
        {
          "Content-Type": "multipart/form-data",
        }
      );

      if (uploadResponse.data) {
        await saveFileDetails(uploadResponse.data);
      } else {
        toast.error("Failed to upload the file.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error uploading the file.");
    } finally {
      setSaving(false);
    }
  };

  const saveFileDetails = async (attachmentId) => {
    try {
      const fileData = {
        description: fileDescription,
        userId: itemData.user.id,
        nomenklaturaId: itemData.id,
        fileId: attachmentId,
        folder: itemData.folder,
      };

      const saveResponse = await ApiCall(
        "/api/v1/app/nomenklaturafile",
        "PUT",
        fileData
      );

      if (!saveResponse.error) {
        toast.success("File saved successfully!");
        resetForm();
        fetchFiles();
      } else {
        toast.error("Failed to save file details.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error saving file details.");
    }
  };

  const resetForm = () => {
    setFile(null);
    setFileDescription("");
    setIsModalVisible(false);
  };

  const filteredFiles = files?.filter((file) => {
    const descriptionMatch = file.description
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());
    const dateMatch = new Date(file.createdAt)
      .toLocaleDateString()
      .includes(searchQuery);
    return descriptionMatch || dateMatch;
  });

  return (
    <div className="flex">
      <Sidebar />
      <div
        className="p-4 sm:ml-64 w-full min-h-screen"
        style={{
          backgroundImage: `url(${newbg})`,
          backgroundRepeat: "repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate("/mobil/nomenklatura")}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            <span className="font-medium">Ortga qaytish</span>
          </button>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-2">
            {itemData?.code} - {itemData?.name}
          </h2>
          <p className="text-gray-600 mb-4">Paket: {itemData?.folder}</p>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div className="relative flex-grow max-w-md">
              <input
                type="text"
                placeholder="Fayl yoki sanani qidirish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <div className="flex-shrink-0">
              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md cursor-pointer flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                Fayl yuklash
              </label>
            </div>
          </div>

          <Modal
            open={isModalVisible}
            onClose={resetForm}
            center
            classNames={{
              modal: "rounded-lg max-w-md",
            }}
          >
            <h3 className="text-xl font-bold mb-4">Yangi fayl qo'shish</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-1">Tanlangan fayl:</p>
                <div className="flex items-center p-2 border rounded bg-gray-50">
                  <svg
                    className="text-red-500 w-6 h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="truncate">{file?.name}</span>
                </div>
              </div>

              <div>
                <label className="block font-medium mb-1">Fayl izohi:</label>
                <textarea
                  rows={3}
                  placeholder="Fayl izohi..."
                  value={fileDescription}
                  onChange={(e) => setFileDescription(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-2">
                <button
                  onClick={resetForm}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Bekor qilish
                </button>
                <button
                  onClick={handleSaveFile}
                  disabled={saving}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  {saving ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Saqlanmoqda...
                    </>
                  ) : (
                    "Saqlash"
                  )}
                </button>
              </div>
            </div>
          </Modal>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-3 text-gray-600">Yuklanmoqda...</p>
            </div>
          ) : (
            <div className="flex flex-wrap gap-4 justify-center">
              {filteredFiles.length > 0 ? (
                filteredFiles.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg w-1/4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow overflow-hidden"
                  >
                    <div className="p-4">
                      <div className="flex items-start mb-3">
                        <div className="bg-red-100 p-2 rounded-md mr-3">
                          <svg
                            className="text-red-500 w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold line-clamp-2">
                            {item.description || "Izoh mavjud emas"}
                          </h3>
                          <p className="text-gray-500 text-sm mt-1">
                            {new Date(item.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-3 bg-gray-50">
                      <a
                        href={`${baseUrl}/api/v1/file/getFile/${item.file.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
                      >
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        Yuklab olish
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="mt-2 text-lg font-medium text-gray-900">
                    Fayllar topilmadi
                  </h3>
                  <p className="mt-1 text-gray-500">
                    Ushbu paketda hali fayllar mavjud emas.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NomenklaturaFolder;
