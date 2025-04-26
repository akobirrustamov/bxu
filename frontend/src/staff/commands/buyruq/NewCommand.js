import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiCall from "../../../config/index";
import Sidebar from "../../Sidebar";
import newbg from "../../../staff/images/newbg.jpg";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const NewCommand = () => {
    const navigate = useNavigate();
    const [rating, setRating] = useState(0);
    const [administrator, setAdministrator] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [commanders, setCommanders] = useState([]);
    const [selectedCommander, setSelectedCommander] = useState(null);
    const [selectedRole, setSelectedRole] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [staffList, setStaffList] = useState([]);
    const [expandedRank, setExpandedRank] = useState(null);
    const [selectedStaff, setSelectedStaff] = useState({});
    const [selectedDateTime, setSelectedDateTime] = useState("");
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState(null);

    useEffect(() => {
        fetchProfileData();
    }, []);

    useEffect(() => {
        if (commanders.length > 0) {
            setSelectedRole(commanders[0]?.id || "");
        }
    }, [commanders]);

    const toggleExpandRank = (rankId) => {
        setExpandedRank(expandedRank === rankId ? null : rankId);
    };

    const handleRankCheckboxToggle = (rankId, staffList) => {
        setSelectedStaff((prevState) => {
            const isAllSelected = staffList.every((staff) => prevState[staff.id]);
            const updatedStaff = { ...prevState };
            staffList.map((staff) => {
                if (isAllSelected) {
                    delete updatedStaff[staff.id];
                } else {
                    updatedStaff[staff.id] = { rankId, staffId: staff.id };
                }
            });
            return updatedStaff;
        });
    };

    const handleStaffCheckboxToggle = (rankId, staffId) => {
        setSelectedStaff((prevState) => {
            const updated = { ...prevState };
            if (updated[staffId]) {
                delete updated[staffId];
            } else {
                updated[staffId] = { rankId, staffId };
            }
            return updated;
        });
    };

    const fetchProfileData = async () => {
        setIsLoading(true);
        try {
            const token = localStorage.getItem("token");
            const role = localStorage.getItem("role");

            if (!token || !role) return;

            if (role === "ROLE_STAFF") {
                const profile = await ApiCall(`/api/v1/app/staff/me/${token}`, "GET");
                setAdministrator(profile.data);

                const com = await ApiCall(`/api/v1/app/staff/commander/${token}`, "GET");
                setCommanders(com.data);

                if (com.data.length > 0) {
                    const defaultCommander = com.data[0];
                    setSelectedCommander(defaultCommander);
                    setSelectedRole(defaultCommander.rank.id);
                    const resListStaff = await ApiCall(`/api/v1/app/commander/list-staff/${defaultCommander?.rank?.id}`, "GET");
                    setStaffList(resListStaff.data);
                }
            }
        } catch (err) {
            toast.error("Xatolik: " + err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setFileName(selectedFile.name);
        }
    };

    const handleSubmit = () => {
        confirmAlert({
            title: 'Tastiqlash',
            message: "Buyruqni jo'natishga ishonchingiz komilmi?",
            buttons: [
                {
                    label: 'Ha',
                    onClick: submitCommand
                },
                {
                    label: 'Yo‘q',
                    onClick: () => { }
                }
            ]
        });
    };

    const submitCommand = async () => {
        const currentTime = new Date();
        const deadline = new Date(selectedDateTime);
        const timeDifference = deadline - currentTime;

        if (timeDifference <= 6 ) {
            toast.error("Xatolik! Topshiriq muddati kamida 1 soat bo'lishi kerak.");
            return;
        }

        let uploadedFile = null;

        try {
            if (file) {
                const formData = new FormData();
                formData.append("photo", file);
                formData.append("prefix", `/command/${administrator.name}`);
                const uploadResponse = await ApiCall('/api/v1/file/upload', "POST", formData);
                uploadedFile = uploadResponse.data;
                // alert(JSON.stringify(uploadedFile));
                // console.log(uploadResponse.data);
                
            }

            const selectedStaffList = Object.values(selectedStaff);
            const submissionData = {
                text: title,
                description,
                ball: rating,
                commandRankId: selectedRole,
                commandStaffId: administrator?.id,
                file: uploadedFile,
                dateTime: selectedDateTime,
                selectedStaffList,
            };

            const response = await ApiCall('/api/v1/app/command', "POST", submissionData);
            if (response.error === false) {
                toast.success("Muvaffaqiyatli! Malumotlar yuborildi.");
                setTimeout(() => {
                    navigate("/mobil/commands/buyruqlar");
                }, 2000);
            } else {
                toast.error("Xatolik! Malumot yuborilmadi.");
            }
        } catch (err) {
            toast.error("Xatolik: " + err.message);
        }
    };

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen text-xl">Yuklanmoqda...</div>;
    }

    return (
        <div className="flex">
            <Sidebar />
            <div className="bg-gray-200 p-4 sm:ml-64 w-full min-h-screen" style={{
                backgroundImage: `url(${newbg})`,
                backgroundRepeat: "repeat",
            }}>
                <div className="max-w-3xl mx-auto p-6 space-y-6">
                    <h1 className="text-2xl font-bold text-center">Yangi topshiriq yaratish</h1>

                    <select
                        className="w-full border border-gray-500 rounded px-4 py-2 bg-gray-100 cursor-not-allowed"
                        value={selectedRole}
                        disabled
                    >
                        {commanders.map((cmd) => (
                            <option key={cmd.id} value={cmd.id}>
                                {cmd.rank.name}
                            </option>
                        ))}
                    </select>

                    <input
                        type="text"
                        className="w-full border border-gray-500 rounded px-4 py-2"
                        placeholder="Topshiriq sarlavhasi"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <textarea
                        className="w-full border border-gray-500 rounded px-4 py-2"
                        placeholder="Topshiriq haqida batafsil ma'lumot"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={4}
                    />

                    <input type="file" onChange={handleFileChange} className="w-full" />
                    {fileName && <p className="text-sm text-gray-600">Fayl: {fileName}</p>}

                    <input
                        type="datetime-local"
                        className="w-full border border-gray-500 rounded px-4 py-2"
                        value={selectedDateTime}
                        onChange={(e) => setSelectedDateTime(e.target.value)}
                    />

                    <h3 className="text-lg text-center font-semibold mt-4">
                        <i className="fa-solid fa-user-group"></i> Xodimlarni tanlang
                    </h3>

                    {staffList.map((item) => (
                        <div key={item.rank.id} className="border bg-gray-200 border-gray-500 p-3 rounded mb-2">
                            <div className="flex justify-between items-center">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        checked={item.staff.every((staff) => selectedStaff[staff.id])}
                                        onChange={() => handleRankCheckboxToggle(item.rank.id, item.staff)}
                                    />
                                    <span className="font-medium">{item.rank.name}</span>
                                </label>
                                <button
                                    type="button"
                                    onClick={() => toggleExpandRank(item.rank.id)}
                                    className="text-blue-500 text-sm"
                                >
                                    {expandedRank === item.rank.id ? "Yopish" : "Ko'rish"}
                                </button>
                            </div>

                            {expandedRank === item.rank.id && (
                                <div className="mt-2 ml-4 space-y-1">
                                    {item.staff.map((staff) => (
                                        <label key={staff.id} className="block">
                                            <input
                                                type="checkbox"
                                                className="mr-2"
                                                checked={!!selectedStaff[staff.id]}
                                                onChange={() => handleStaffCheckboxToggle(item.rank.id, staff.id)}
                                            />
                                            {staff.name}
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    <button
                        onClick={handleSubmit}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold"
                    >
                        Yuborish
                    </button>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default NewCommand;
