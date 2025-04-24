import React, { useCallback, useEffect, useState } from "react";
import ApiCall from "../../../config/index";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Sidebar from "../../Sidebar";
import newbg from "../../../staff/images/newbg.jpg";

const Completed = () => {
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
        // Navigate to detail page (implement navigation logic here)
        toast(`Navigating to detail page for: ${item.text}`);
    }, []);

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
        let timeText = `Remaining time: ${Math.abs(timeDifferenceInDays)} days ${Math.abs(remainingHours)} hours`;

        if (timeDifferenceInHours < 0) {
            timeText = `Task overdue: ${Math.abs(timeDifferenceInDays)} days and ${Math.abs(remainingHours)} hours ago`;
        } else if (timeDifferenceInHours > 24) {
            circleColor = "bg-green-500";
        } else if (timeDifferenceInHours > 12) {
            circleColor = "bg-yellow-500";
        }

        return (
            <div key={item.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
                <div className="font-bold text-lg mb-2">{item.text}</div>
                <div
                    className="text-sm text-gray-600 cursor-pointer"
                    onClick={() => toggleExpanded(item.id)}
                >
                    {expanded === item.id ? item.description : `${item.description.substring(0, 50)}...`}
                </div>
                <div className="text-sm text-gray-500 mt-2">
                    <span className="font-bold">Assigned Date:</span>{" "}
                    {new Date(item.createdAt).toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">
                    <span className="font-bold">Due Date:</span>{" "}
                    {tileLimitDate.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">
                    <span className="font-bold">Completion Date:</span>{" "}
                    {responseTime.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">
                    <span className="font-bold">Assigned To:</span>{" "}
                    {item.staff?.name || "N/A"}
                </div>
                <button
                    onClick={() => handleNavigateToDetail(item)}
                    className="mt-4 text-blue-500 hover:underline"
                >
                    More Details
                </button>
            </div>
        );
    };

    return (
        <div className='flex'>
            <Sidebar />
            <div className="p-4 sm:ml-64 w-full min-h-screen" style={{
                backgroundImage: `url(${newbg})`,
                backgroundRepeat: "repeat",
            }}>
                <div className="flex flex-col items-center">
                    <div className="w-full bg-gray-100 p-4">
                        <input
                            type="text"
                            placeholder="Qidiruv..."
                            className="w-full p-2 border rounded-md"
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                        />
                    </div>
                    {isLoading ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="loader">Loading...</div>
                        </div>
                    ) : (
                        <div className="p-4 w-full">
                            {filteredCommands.map((item, index) => renderCommandItem(item, index))}
                        </div>
                    )}
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default Completed;