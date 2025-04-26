import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Sidebar";
import newbg from "../../../staff/images/newbg.jpg";
import ApiCall from "../../../config/index";

const InProgressTopshiriq = () => {
    const [commands, setCommands] = useState([]);
    const [filteredCommands, setFilteredCommands] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [expanded, setExpanded] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        getMyCommands();
    }, []);

    const getMyCommands = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                alert("Token not found.");
                return;
            }

            const response = await ApiCall(`/api/v1/app/staff/my-commands/${token}/2`, "GET");

            if (response.error === false && response.data) {
                setCommands(response.data);
                setFilteredCommands(response.data);
            } else {
                alert("Error: Failed to fetch commands.");
            }
        } catch (error) {
            alert("Error: An unexpected error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleNavigateToDetail = useCallback((item) => {
        console.log(item);
        
        navigate("/mobil/commands/topshiriqlarim/javobtopshiriq", { state: { itemData: item } });
    }, [navigate]);

    const renderCommandItem = (item) => {
        const truncatedDescription = item.description.length > 50
            ? item.description.substring(0, 50) + "..."
            : item.description;

        const toggleExpanded = (id) => {
            setExpanded(expanded === id ? 0 : id);
        };

        const now = new Date();
        const timeLimitDate = new Date(item.timeLimit);
        const timeDifferenceInMs = timeLimitDate - now;
        const timeDifferenceInHours = timeDifferenceInMs / (1000 * 60 * 60);
        const timeDifferenceInDays = Math.floor(timeDifferenceInHours / 24);
        const remainingHours = Math.floor(timeDifferenceInHours % 24);

        let circleColor = "bg-red-500";
        let timeText = `Qolgan vaqt: ${Math.abs(timeDifferenceInDays)} kun ${Math.abs(remainingHours)} soat`;

        if (timeDifferenceInHours < 0) {
            timeText = `Topshiriq muddatida bajarilmadi: ${Math.abs(timeDifferenceInDays)} kun ${Math.abs(remainingHours)} soat o'tdi`;
        } else if (timeDifferenceInHours > 24) {
            circleColor = "bg-green-500";
        } else if (timeDifferenceInHours > 12) {
            circleColor = "bg-yellow-500";
        }

        return (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-4 mb-4">
                <h3 className="text-xl font-bold text-gray-800">{item.text}</h3>
                <p
                    onClick={() => toggleExpanded(item.id)}
                    className="text-gray-600 mt-2 cursor-pointer flex items-center"
                >
                    <i className="fas fa-archive mr-2"></i>
                    {expanded === item.id ? item.description : truncatedDescription}
                </p>

                <p className="text-gray-700 mt-2 flex items-center">
                    <i className="fas fa-clock mr-2"></i>
                    <span className="font-bold mr-2">Topshiriq berilgan sana:</span>
                    {new Date(item.createdAt).toLocaleDateString("en-GB")} {new Date(item.createdAt).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}
                </p>

                <p className="text-gray-700 flex items-center">
                    <i className="fas fa-clock mr-2"></i>
                    <span className="font-bold mr-2">Bajarish muddati:</span>
                    {`${timeLimitDate.toLocaleDateString("en-GB")}, ${timeLimitDate.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}`}
                </p>

                <p className="text-gray-700 flex items-center">
                    <i className="fas fa-user mr-2"></i>
                    <span className="font-bold mr-2">Topshiriq beruvchi:</span>
                    {item?.commandStaff?.name || "N/A"}
                </p>

                <div className="flex items-center mt-4">
                    <div className={`w-3 h-3 rounded-full mr-2 ${circleColor}`}></div>
                    <span className={`text-sm ${timeDifferenceInHours < 0 ? "text-red-500" : "text-black"}`}>
                        {timeText}
                    </span>
                </div>

                <div className="mt-4">
                    <button
                        onClick={() => handleNavigateToDetail(item)}
                        className="text-indigo-600 hover:underline"
                    >
                        Javob berish
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <div
                className="flex-1 p-6 overflow-y-auto"
                style={{
                    backgroundImage: `url(${newbg})`,
                    backgroundRepeat: "repeat",
                }}
            >
                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="loader border-t-4 border-indigo-500 rounded-full w-12 h-12 animate-spin"></div>
                    </div>
                ) : (
                    <div className="space-y-4 max-w-4xl mx-auto">
                        {filteredCommands.map((item) => renderCommandItem(item))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default InProgressTopshiriq;
