import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiCall from "../../../config/index";
import newbg from "../../../staff/images/newbg.jpg";
import Sidebar from "../../Sidebar";
import { toast, ToastContainer } from "react-toastify";
import { FaArchive, FaClock, FaUser, FaCheck } from "react-icons/fa";
import Loading from "../../components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";

const Pending = () => {
  const [administrator, setAdministrator] = useState(null);
  const [commands, setCommands] = useState([]);
  const [filteredCommands, setFilteredCommands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchName, setSearchName] = useState("");
  const [expanded, setExpanded] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    getMe();
  }, []);

  const getMe = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await ApiCall(`/api/v1/app/staff/me/${token}`, "GET");

      if (response.error === false && response.data) {
        setAdministrator(response.data);
        await getMyCommands(response.data.id);
      } else {
        toast.error("Failed to fetch profile data.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
    }
  };

  const getMyCommands = async (userId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await ApiCall(
        `/api/v1/app/staff/commands/${token}/3`,
        "GET"
      );
      console.log(response.data);

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
      filtered = filtered.filter(
        (cmd) =>
          cmd.commandStaff?.name
            ?.toLowerCase()
            .includes(searchName.toLowerCase()) ||
          cmd.text?.toLowerCase().includes(searchName.toLowerCase())
      );
    }
    setFilteredCommands(filtered);
  };

  const handleNavigateToDetail = useCallback(
    (item) => {
      navigate("/mobil/commands/buyruqlar/batafsil", {
        state: { itemData: item },
      });
    },
    [navigate]
  );

  const renderCommandItem = (item) => {
    const isExpanded = expanded === item.id;
    const toggleExpanded = (id) => {
      setExpanded(expanded === id ? 0 : id);
    };

    const now = new Date();
    const tileLimitDate = new Date(item.timeLimit);
    const timeDiffInMs = tileLimitDate - now;
    const timeDiffInHours = timeDiffInMs / (1000 * 60 * 60);
    const timeDiffInDays = Math.floor(timeDiffInHours / 24);
    const remainingHours = Math.floor(timeDiffInHours % 24);

    let circleColor = "bg-red-500";
    let timeText = `Qolgan vaqt: ${Math.abs(timeDiffInDays)} kun ${Math.abs(
      remainingHours
    )} soat`;

    if (timeDiffInHours < 0) {
      timeText = `Topshiriq muddatida bajarilmadi: ${Math.abs(
        timeDiffInDays
      )} kun va ${Math.abs(remainingHours)} soat o'tdi`;
      circleColor = "bg-red-500";
    } else if (timeDiffInHours > 24) {
      circleColor = "bg-green-500";
    } else if (timeDiffInHours > 12) {
      circleColor = "bg-yellow-400";
    }

    return (
      <div className="bg-white rounded shadow p-4" key={item.id}>
        <h2 className="text-lg font-semibold">{item.text}</h2>
        <p
          className="mt-2 cursor-pointer text-gray-700"
          onClick={() => toggleExpanded(item.id)}
        >
          <FaArchive className="inline mr-2 text-gray-500" />
          {isExpanded
            ? item.description
            : `${item.description?.slice(0, 50)}...`}
        </p>
        <p className="text-sm text-gray-600 mt-2">
          <FaClock className="inline mr-1 text-gray-500" />
          <strong>Topshiriq berilgan sana:</strong>{" "}
          {new Date(item.createdAt).toLocaleString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <p className="text-sm text-gray-600">
          <FaClock className="inline mr-1 text-gray-500" />
          <strong>Bajarish muddati:</strong>{" "}
          {tileLimitDate.toLocaleString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <p className="text-sm text-gray-600">
          <FaUser className="inline mr-1 text-gray-500" />
          <strong>Topshiriq bajaruvchi:</strong> {item?.staff?.name || "N/A"}
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${circleColor}`}></div>
            <span
              className={`text-sm w-11/12 ${
                timeDiffInHours < 0 ? "text-red-600" : ""
              }`}
            >
              {timeText}
            </span>
          </div>
          <div className="text-green-600 text-lg">
            <FaCheck />
            {item.status === 2 && <FaCheck className="inline ml-1" />}
          </div>
        </div>
        <button
          onClick={() => handleNavigateToDetail(item)}
          className="mt-3 text-indigo-600 hover:underline"
        >
          Batafsil..
        </button>
      </div>
    );
  };

  return (
    <div className="flex">
      <Sidebar />
      <div
        className="sm:ml-64 w-full min-h-screen"
        style={{
          backgroundImage: `url(${newbg})`,
          backgroundRepeat: "repeat",
        }}
      >
        <div className="flex items-center">
          <div className="w-full max-w-[1440px] mx-auto p-4">
            <h2 className="text-center mb-6 text-gray-600">
              <FontAwesomeIcon icon={faHandshake} className="mr-2" />
              Kutilmoqda
            </h2>
            <input
              type="text"
              placeholder="Qidiruv..."
              className="w-full p-2 border rounded-md"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
            {isLoading ? (
              <Loading />
            ) : (
              <div className="grid gap-4 mt-4">
                {filteredCommands.map((item, index) => (
                  <div key={index}>{renderCommandItem(item)}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Pending;
