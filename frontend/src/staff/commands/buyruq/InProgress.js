import React, { useCallback, useEffect, useState } from 'react';
import ApiCall from "../../../config/index";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { FaArchive, FaClock, FaUser, FaCheck } from 'react-icons/fa';
import newbg from "../../../staff/images/newbg.jpg";
import Sidebar from '../../Sidebar';
import Loading from '../../components/Loading';

function InProgress() {
    const [administrator, setAdministrator] = useState(null);
    const [commands, setCommands] = useState([]);
    const [filteredCommands, setFilteredCommands] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [expanded, setExpanded] = useState(0);
    const [searchName, setSearchName] = useState("");
    const [selectedStatus, setSelectedStatus] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        getMe();
    }, []);

    const getMe = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await ApiCall(`/api/v1/app/staff/me/${token}`, "GET");
            if (response?.error === false && response.data) {
                setAdministrator(response.data);
                await getMyCommands(response.data.id);
            } else {
                toast.error("Failed to fetch profile data");
            }
        } catch (error) {
            toast.error("An unexpected error occurred.");
        }
    };

    const getMyCommands = async (id) => {
        try {
            const token = localStorage.getItem("token");
            const response = await ApiCall(`/api/v1/app/staff/commands/${token}/2`, "GET");
            if (response?.error === false && response.data) {
                setCommands(response.data);
                setFilteredCommands(response.data);
            } else {
                toast.error("Failed to fetch commands.");
            }
        } catch (error) {
            toast.error("An unexpected error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        filterCommands();
    }, [searchName, selectedStatus, commands]);

    const filterCommands = () => {
        let filtered = [...commands];

        if (searchName.trim()) {
            filtered = filtered.filter((cmd) =>
                cmd?.staff?.name?.toLowerCase().includes(searchName.toLowerCase()) ||
                cmd?.text?.toLowerCase().includes(searchName.toLowerCase())
            );
        }

        if (selectedStatus !== 0 && selectedStatus !== 3) {
            filtered = filtered.filter((cmd) => cmd.status === selectedStatus);
        }

        if (selectedStatus === 3) {
            const now = new Date();
            filtered = filtered.filter((cmd) => {
                const deadline = new Date(cmd.timeLimit);
                return deadline < now;
            });
        }

        setFilteredCommands(filtered);
    };

    const handleNavigateToDetail = useCallback((item) => {
        navigate("/mobil/commands/buyruqlar/batafsil", { state: { itemData: item } });
    }, [navigate]);

    const renderCommandItem = ({ item }) => {
        const truncatedDescription = item.description?.length > 50
            ? item.description.substring(0, 50) + "..."
            : item.description;

        const toggleExpanded = (id) => {
            setExpanded((prev) => (prev === id ? 0 : id));
        };

        const now = new Date();
        const deadline = new Date(item.timeLimit);
        const timeDiffInMs = deadline - now;
        const timeDiffInHours = timeDiffInMs / (1000 * 60 * 60);
        const timeDiffInDays = Math.floor(timeDiffInHours / 24);
        const remainingHours = Math.floor(timeDiffInHours % 24);

        let circleColor = "bg-red-500";
        let timeText = `Qolgan vaqt: ${Math.abs(timeDiffInDays)} kun ${Math.abs(remainingHours)} soat`;

        if (timeDiffInHours < 0) {
            timeText = `Topshiriq muddatida bajarilmadi: ${Math.abs(timeDiffInDays)} kun va ${Math.abs(remainingHours)} soat o'tdi`;
        } else if (timeDiffInHours > 24) {
            circleColor = "bg-green-500";
        } else if (timeDiffInHours > 12) {
            circleColor = "bg-yellow-500";
        }

        return (
            <div className="bg-white shadow rounded p-4">
                <h2 className="text-xl font-semibold">{item.text}</h2>

                <p className="mt-2 text-gray-700 cursor-pointer" onClick={() => toggleExpanded(item.id)}>
                    <FaArchive className="inline mr-2 text-gray-500" />
                    {expanded === item.id ? item.description : truncatedDescription}
                </p>

                <p className="text-sm text-gray-600 mt-2">
                    <FaClock className="inline mr-1 text-gray-500" />
                    <strong>Topshiriq berilgan sana:</strong>{" "}
                    {new Date(item.createdAt).toLocaleDateString("en-GB")}{" "}
                    {new Date(item.createdAt).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}
                </p>

                <p className="text-sm text-gray-600">
                    <FaClock className="inline mr-1 text-gray-500" />
                    <strong>Bajarish muddati:</strong>{" "}
                    {deadline.toLocaleDateString("en-GB")}{" "}
                    {deadline.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}
                </p>

                <p className="text-sm text-gray-600">
                    <FaUser className="inline mr-1 text-gray-500" />
                    <strong>Topshiriq bajaruvchi:</strong> {item?.staff?.name || "N/A"}
                </p>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${circleColor}`} />
                        <span className={`text-sm ${timeDiffInHours < 0 ? "text-red-600" : ""}`}>{timeText}</span>
                    </div>
                    <div className="text-green-600 text-lg">
                        <FaCheck />
                        {item.status === 2 && <FaCheck className="inline ml-1 text-green-600" />}
                    </div>
                </div>

                <button onClick={() => handleNavigateToDetail(item)} className="mt-4 text-blue-600 hover:underline">
                    Batafsil..
                </button>
            </div>
        );
    };

    return (
        <div className='flex'>
            <Sidebar />
            <div className=" sm:ml-64 w-full min-h-screen" style={{
                backgroundImage: `url(${newbg})`,
                backgroundRepeat: "repeat",
            }}>

                <div className="flex items-center">
                    <div className="w-full max-w-[1440px] mx-auto p-4">
                        <input
                            type="text"
                            placeholder="Qidiruv.."
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                            className="w-full p-2 border rounded-md"
                        />

                        {isLoading ? (
                            <Loading />
                        ) : (
                            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 mt-4">
                                {filteredCommands.map((item, index) => (
                                    <div key={index}>{renderCommandItem({ item })}</div>
                                ))}
                            </div>
                        )}

                    </div>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
}

export default InProgress;
