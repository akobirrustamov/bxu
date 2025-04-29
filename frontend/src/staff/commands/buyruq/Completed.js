import React, { useCallback, useEffect, useState } from "react";
import ApiCall from "../../../config/index";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../../components/Loading";
import Sidebar from "../../Sidebar";
import newbg from "../../../staff/images/newbg.jpg";


const Completed = () => {
    const navigate = useNavigate();
    const [administrator, setAdministrator] = useState(null);
    const [commands, setCommands] = useState([]);
    const [filteredCommands, setFilteredCommands] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchName, setSearchName] = useState("");
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        getMe();
    }, []);

    const getMe = async () => {
        try {
            const token = localStorage.getItem("token"); // Replace AsyncStorage with localStorage
            const response = await ApiCall(`/api/v1/app/staff/me/${token}`, "GET");

            if (response?.error === false && response.data) {
                setAdministrator(response.data);
                await getMyCommands(response.data.id);
            } else {
                toast.error("Failed to fetch profile data.");
            }
        } catch (error) {
            toast.error("An unexpected error occurred.");
        }
    };

    const getMyCommands = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await ApiCall(`/api/v1/app/staff/commands/${token}/4`, "GET");

            if (response.error === false && response.data) {
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
    }, [searchName, commands]);

    const filterCommands = () => {
        let filtered = commands;

        if (searchName.trim()) {
            filtered = filtered.filter((cmd) =>
                cmd?.commandStaff?.name?.toLowerCase().includes(searchName.toLowerCase()) ||
                cmd?.text?.toLowerCase().includes(searchName.toLowerCase())
            );
        }

        setFilteredCommands(filtered);
    };

    const handleNavigateToDetail = useCallback((item) => {
        navigate("/mobil/commands/buyruqlar/batafsil", { state: { itemData: item } });
    }, [navigate]);

    const renderCommandItem = (item, index) => {
        const toggleExpanded = (id) => {
            setExpanded(expanded === id ? null : id);
        };

        const now = new Date();
        const tileLimitDate = new Date(item.timeLimit);
        const timeDifferenceInMs = tileLimitDate - now;
        const timeDifferenceInHours = timeDifferenceInMs / (1000 * 60 * 60);
        const timeDifferenceInDays = Math.floor(timeDifferenceInHours / 24);
        const remainingHours = Math.floor(timeDifferenceInHours % 24);
        const responseTime = new Date(item.responseTime);
        let circleColor = "bg-red-500";
        let timeText = `Qolgan vaqt: ${Math.abs(timeDifferenceInDays)} kun ${Math.abs(remainingHours)} soat`

        if (timeDifferenceInHours < 0) {
            timeText = `Topshiriq muddatida bajarilmadi:${Math.abs(timeDifferenceInDays)} kun va ${Math.abs(remainingHours)} soat o'tdi`;
        } else if (timeDifferenceInHours > 24) {
            circleColor = "bg-green-500";
        } else if (timeDifferenceInHours > 12) {
            circleColor = "bg-yellow-500";
        }

        return (
            <div key={item.id} className="bg-white shadow-md rounded-lg p-4">
                <div className="font-bold text-lg mb-2">{item.text}</div>
                <div
                    className="text-sm text-gray-600 cursor-pointer"
                    onClick={() => toggleExpanded(item.id)}
                >
                    {expanded === item.id ? item.description : `${item.description.substring(0, 50)}...`}
                </div>
                <div className="text-sm text-gray-500 mt-2">
                    <span className="font-bold">Topshiriq berilgan sana:</span>{" "}
                    {new Date(item.createdAt).toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">
                    <span className="font-bold">Bajarish muddati:</span>{" "}
                    {tileLimitDate.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">
                    <span className="font-bold">Bajarilgan muddati:</span>{" "}
                    {responseTime.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">
                    <span className="font-bold">Topshiriq bajaruvchi:</span>{" "}
                    {item.staff?.name || "N/A"}
                </div>
                <button
                    onClick={() => handleNavigateToDetail(item)}
                    className="mt-4 text-blue-500 hover:underline"
                >
                    Batafsil..
                </button>
            </div>
        );
    };

    return (
        <div className="flex">
            <Sidebar />

            <div className="sm:ml-64 w-full min-h-screen" style={{
                backgroundImage: `url(${newbg})`,
                backgroundRepeat: "repeat",
            }}
            >
                <div className="flex items-center">
                    <div className="w-full max-w-[1440px] mx-auto p-4">
                        <input
                            type="text"
                            placeholder="Qidiruv..."
                            value={searchName}
                            className="w-full p-2 border rounded-md"
                            onChange={(e) => setSearchName(e.target.value)}
                        />
                        {isLoading ? (
                            <Loading />
                        ) : (
                            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 mt-4">
                                {filteredCommands.map((item, index) =>
                                    <div key={index}>{renderCommandItem(item)}</div>)}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default Completed;