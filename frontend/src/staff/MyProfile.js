import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import ApiCall from "../config/index";
import Sidebar from "./Sidebar";
import newbg from "./images/newbg.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUserCircle,
    faSignOutAlt,
    faUser,
    faLock,
    faPencil,
    faCamera,
    faPhone
} from '@fortawesome/free-solid-svg-icons';

function StaffProfile() {
    const [file, setFile] = useState(null);
    const [rank, setRank] = useState([]);
    const [administrator, setAdministrator] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [showPasswordForm, setShowPasswordForm] = useState(false);
    const [showPhoneInput, setShowPhoneInput] = useState(false);
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("+998");
    const [reenteredPassword, setReenteredPassword] = useState("");
    const [imageUploadInProgress, setImageUploadInProgress] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProfileData();
    }, []);

    const fetchProfileData = async () => {
        let timeoutId;
        try {
            const token = localStorage.getItem("token");
            const role = localStorage.getItem("role");


            if (!token || !role) {
                navigate("/");
                return;
            }

            // timeoutId = setTimeout(async () => {
            //     localStorage.removeItem("token");
            //     localStorage.removeItem("role");
            //
            //
            // }, 10000);

            if (role === "ROLE_STAFF") {
                const response = await ApiCall("/api/v1/app/staff/me/" + token, "GET");


                if ( response.data) {
                    setAdministrator(response.data);
                } else {
                    // navigate("/login");
                }

                const res = await ApiCall("/api/v1/app/staff/rank/" + token, "GET");
                if (res.status === 200 && res.data) {
                    setRank(res.data);
                    const hasRelevantRank = res.data.some((item) => item.id === 1 || item.id === 2);
                    localStorage.setItem("attendance", hasRelevantRank ? "true" : "false");
                } else {
                    // navigate("/login");
                }
            } else {
                // navigate("/login");
            }
        } catch (error) {
            // navigate("/login");
        } finally {
            setIsLoading(false);
            clearTimeout(timeoutId);
        }
    };

    const handleLogout = async () => {
        try {
            if(administrator.telegramId.length !== 13){
                alert("Xatolik", "Telegram mavjud bo'lgan telefon raqamingizni kiriting!");
                setShowPhoneInput(true);
                return;
            }
            localStorage.clear();
            // navigate("/login");
        } catch (error) {
            alert("Error", "Failed to log out. Please try again.");
        }
    };

    const handleSubmitPassword = async () => {
        if (password !== reenteredPassword) {
            alert("Error", "Passwords do not match.");
            return;
        }

        try {
            const token = localStorage.getItem("token");
            const response = await ApiCall(`/api/v1/app/staff/password/${token}`, "POST", password);
            if (response.status === 200) {
                alert("Success", "Password changed successfully.");
                setPassword("");
                setReenteredPassword("");
                setShowPasswordForm(false);
                fetchProfileData();
            } else {
                alert("Error", "Failed to change password.");
            }
        } catch (error) {
            alert("Error", error.message || "An error occurred.");
        }
    };

    const isValidPhoneNumber = (phone) => /^\+998\d{9}$/.test(phone);

    const handleSubmitPhoneNumber = async () => {
        if (!isValidPhoneNumber(phone)) {
            alert("Error", "Telefon raqam noto'g'ri kiritildi.");
            return;
        }

        try {
            const token = localStorage.getItem("token");
            const response = await ApiCall(`/api/v1/app/staff/phone/${token}`, "POST", { phone });
            if (response.status === 200) {
                alert("Success", "Telefon raqam muvaffaqiyatli saqlandi.");
                setPhone("+998");
                setShowPhoneInput(false);
                fetchProfileData();
            } else {
                alert("Error", "Telefon raqamni saqlashda xatolik yuz berdi.");
            }
        } catch (error) {
            alert("Error", error.message || "Noma'lum xatolik yuz berdi.");
        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;

        const validExtensions = ["png", "jpg", "jpeg"];
        const fileExtension = selectedFile.name.split(".").pop().toLowerCase();

        if (!validExtensions.includes(fileExtension)) {
            alert("Invalid File", "Please select a PNG, JPG, or JPEG image.");
            return;
        }

        setFile(selectedFile);
    };

    const handleFileUpload = async () => {
        if (imageUploadInProgress) return;
        setImageUploadInProgress(true);

        try {
            if (!file) {
                alert("Error", "Please select a file first.");
                return;
            }

            const formData = new FormData();
            formData.append("photo", file);
            formData.append("prefix", "/command/staff");

            const response = await ApiCall("/api/v1/file/upload", "POST", formData, {
                "Content-Type": "multipart/form-data",
            });

            if (response.status === 200 && response.data) {
                await handleProfileImageUpdate(response.data);
            } else {
                alert("Error", "Failed to upload file.");
            }
        } catch (error) {
            alert("Error", "An error occurred during file upload.");
        } finally {
            setImageUploadInProgress(false);
        }
    };

    const handleProfileImageUpdate = async (uuid) => {
        try {
            const token = localStorage.getItem("token");
            const response = await ApiCall(`/api/v1/app/staff/setPhoto/${token}`, "PUT", { uuid });
            if (response.status === 200) {
                alert("Success", "Profil rasmi muvaffaqiyatli o'zgartirildi.");
                fetchProfileData();
                setFile(null);
            } else {
                alert("Error", "Failed to update profile image.");
            }
        } catch (error) {
            alert("Error", "An error occurred while updating profile image.");
        }
    };

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
                {isLoading ? (
                    <div className="flex items-center justify-center h-full">
                        <p>Loading profile data...</p>
                    </div>
                ) : (
                    <div className="max-w-md mx-auto mt-16">
                        {administrator && (
                            <div className="bg-black bg-opacity-70 p-6 rounded-lg">
                                <div className="flex justify-center -mt-16 mb-4">
                                    {administrator.file ? (
                                        <label className="cursor-pointer">
                                            <input
                                                type="file"
                                                className="hidden"
                                                accept="image/png, image/jpeg, image/jpg"
                                                onChange={handleFileChange}
                                            />
                                            <img
                                                src={`${ApiCall.defaults.baseURL}/api/v1/file/getFile/${administrator.file.id}`}
                                                alt="Profile"
                                                className="w-32 h-32 rounded-full border-4 border-gray-700 object-cover"
                                            />
                                        </label>
                                    ) : (
                                        <label className="cursor-pointer">
                                            <input
                                                type="file"
                                                className="hidden"
                                                accept="image/png, image/jpeg, image/jpg"
                                                onChange={handleFileChange}
                                            />
                                            <FontAwesomeIcon
                                                icon={faUserCircle}
                                                className="text-white text-6xl"
                                            />
                                        </label>
                                    )}
                                </div>

                                <h2 className="text-white text-2xl font-bold text-center mb-6">
                                    {administrator.name}
                                </h2>

                                <div className="space-y-3">
                                    {rank.map((item, index) => (
                                        <button
                                            key={index}
                                            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded flex items-center"
                                        >
                                            <FontAwesomeIcon icon={faUser} className="mr-2" />
                                            <span>{item.name}</span>
                                        </button>
                                    ))}

                                    <button
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded flex justify-between items-center"
                                        onClick={() => setShowPasswordForm(!showPasswordForm)}
                                    >
                                        <div className="flex items-center">
                                            <FontAwesomeIcon icon={faLock} className="mr-2" />
                                            <span>Parolni almashtirish</span>
                                        </div>
                                        <FontAwesomeIcon icon={faPencil} />
                                    </button>

                                    {showPasswordForm && (
                                        <div className="bg-gray-800 p-4 rounded-lg mt-2">
                                            <label className="block text-white mb-1">Yangi parol kiriting</label>
                                            <input
                                                type="password"
                                                placeholder="Yangi parol"
                                                className="w-full px-3 py-2 mb-3 rounded"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <label className="block text-white mb-1">Parolni takrorlang</label>
                                            <input
                                                type="password"
                                                placeholder="Parolni qayta kiriting"
                                                className="w-full px-3 py-2 mb-3 rounded"
                                                value={reenteredPassword}
                                                onChange={(e) => setReenteredPassword(e.target.value)}
                                            />
                                            <button
                                                className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
                                                onClick={handleSubmitPassword}
                                            >
                                                Saqlash
                                            </button>
                                        </div>
                                    )}

                                    <label className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded flex justify-between items-center cursor-pointer">
                                        <div className="flex items-center">
                                            <FontAwesomeIcon icon={faCamera} className="mr-2" />
                                            <span>Profil rasmini tanlash</span>
                                        </div>
                                        <FontAwesomeIcon icon={faPencil} />
                                        <input
                                            type="file"
                                            className="hidden"
                                            accept="image/png, image/jpeg, image/jpg"
                                            onChange={handleFileChange}
                                        />
                                    </label>

                                    {file && (
                                        <div className="bg-gray-800 p-4 rounded-lg mt-2">
                                            <p className="text-white mb-2">Tanlangan fayl: {file.name}</p>
                                            <button
                                                className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
                                                onClick={handleFileUpload}
                                                disabled={imageUploadInProgress}
                                            >
                                                {imageUploadInProgress ? "Yuklanmoqda..." : "Yuklash"}
                                            </button>
                                        </div>
                                    )}

                                    <button
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded flex justify-between items-center"
                                        onClick={() => setShowPhoneInput(!showPhoneInput)}
                                    >
                                        <div className="flex items-center">
                                            <FontAwesomeIcon icon={faPhone} className="mr-2" />
                                            <span>{administrator.telegramId === "0" ? "Telefon raqamingizni kiriting" : administrator.telegramId}</span>
                                        </div>
                                        <FontAwesomeIcon icon={faPencil} />
                                    </button>

                                    {showPhoneInput && (
                                        <div className="bg-gray-800 p-4 rounded-lg mt-2">
                                            <label className="block text-white mb-1">Yangi telefon raqamini kiriting</label>
                                            <input
                                                type="tel"
                                                placeholder="Telefon raqami"
                                                className="w-full px-3 py-2 mb-3 rounded"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                            <button
                                                className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
                                                onClick={handleSubmitPhoneNumber}
                                            >
                                                Saqlash
                                            </button>
                                        </div>
                                    )}

                                    <button
                                        className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded flex items-center justify-center"
                                        onClick={handleLogout}
                                    >
                                        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                                        <span>Tizimdan chiqish</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default StaffProfile;