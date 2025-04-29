import React, { useEffect, useState } from "react";
import newbg from "./../images/newbg.jpg";
import ApiCall from "../../config/index";
import Sidebar from "../Sidebar";
import Loading from "../components/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import defLogo from "./download.png";

function BatafsilXodimlar() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const staff = state?.staffData;
  console.log(staff);

  const [statistic, setStatistic] = useState({
    allCommandsCount: 0,
    commands: [],
    completedCommandsCount: 0,
    inProgressCommandsCount: 0,
    newCommandsCount: 0,
    pendingCommandsCount: 0,
  });
  const [selectedStatus, setSelectedStatus] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const items = [
    { label: "Yangi buyruq", value: 1 },
    { label: "Bajarilmoqda", value: 2 },
    { label: "Tasdiqlanishi kutilmoqda", value: 3 },
    { label: "Tugatilgan", value: 4 },
    { label: "Barchsi", value: 5 },
  ];

  const getStaffCommands = async () => {
    const role = localStorage.getItem("role");
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");

      let response;
      response = role
        ? await ApiCall(
            `/api/v1/app/staff/rector/statistic/${staff.id}/${token}`,
            "GET"
          )
        : await ApiCall(
            `/api/v1/app/staff/statistic/${staff.id}/${token}`,
            "GET"
          );
      console.log(response.data);

      if (response.data) {
        setStatistic(response.data);
      } else {
        alert("Error1");
      }
    } catch (error) {
      alert("Error2");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getStaffCommands();
  }, []);

  const filteredCommands =
    selectedStatus === 5
      ? statistic.commands
      : statistic.commands.filter(
          (command) => command.status === selectedStatus
        );

  const renderCommandItem = (item) => {
    const truncatedDescription =
      item.description.length > 50
        ? item.description.substring(0, 50) + "..."
        : item.description;

    const now = new Date();
    const tileLimitDate = new Date(item.timeLimit);
    const timeDifferenceInMs = tileLimitDate - now;
    const timeDifferenceInHours = timeDifferenceInMs / (1000 * 60 * 60);
    const timeDifferenceInDays = Math.floor(timeDifferenceInHours / 24);
    const remainingHours = Math.floor(timeDifferenceInHours % 24);

    let circleColor = "red";
    let timeText = `Qolgan vaqt: ${Math.abs(
      timeDifferenceInDays
    )} kun ${Math.abs(remainingHours)} soat`;

    if (timeDifferenceInHours < 0) {
      timeText = `Topshiriq muddatida bajarilmadi: ${Math.abs(
        timeDifferenceInDays
      )} kun va ${Math.abs(remainingHours)} soat o'tdi`;
      circleColor = "red";
    } else if (timeDifferenceInHours > 24) {
      circleColor = "green";
    } else if (timeDifferenceInHours > 12) {
      circleColor = "yellow";
    }

    return (
      <div key={item.id} className="bg-white p-4 rounded-lg shadow mb-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">{item.title}</h3>
          <div className={`w-4 h-4 rounded-full bg-${circleColor}-500`}></div>
        </div>
        <p className="text-gray-600 my-2">{truncatedDescription}</p>
        <p className="text-sm text-gray-500">{timeText}</p>
      </div>
    );
  };

  return (
    <div
      className="flex"
      style={{
        backgroundImage: `url(${newbg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Sidebar />
      <div className="p-4 sm:ml-64 w-full min-h-screen">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="max-w-7xl mx-auto">
            {/* Xodim ma'lumotlari */}
            <div className="flex justify-center">
              <div className="text-center">
                <div className="relative inline-block">
                  <img
                    src={staff.file === null ? defLogo : staff.file}
                    alt="Staff"
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-indigo-600 rounded-full p-2 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mt-4">
                  <h1 className="text-2xl font-bold text-gray-800">
                    {staff.name}
                  </h1>
                  <p className="text-gray-600 mt-1">{staff.position}</p>
                </div>
              </div>
            </div>

            {/* Statistika kartalari */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Ish statistikasi
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  {
                    label: "Jami buyruqlar",
                    value: statistic.allCommandsCount,
                    color: "blue",
                  },
                  {
                    label: "Yangi buyruqlar",
                    value: statistic.newCommandsCount,
                    color: "purple",
                  },
                  {
                    label: "Bajarilmoqda",
                    value: statistic.inProgressCommandsCount,
                    color: "amber",
                  },
                  {
                    label: "Tasdiqlanishi kutilmoqda",
                    value: statistic.pendingCommandsCount,
                    color: "orange",
                  },
                  {
                    label: "Tugatilgan",
                    value: statistic.completedCommandsCount,
                    color: "emerald",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`bg-${item.color}-50 p-4 rounded-lg border border-${item.color}-100`}
                  >
                    <p
                      className={`text-sm font-medium text-${item.color}-600 mb-1`}
                    >
                      {item.label}
                    </p>
                    <p className={`text-2xl font-bold text-${item.color}-800`}>
                      {item.value}
                    </p>
                    <div className="mt-2 h-1.5 w-full bg-white rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-${item.color}-500`}
                        style={{
                          width: `${
                            item.value > 0
                              ? Math.min(
                                  (item.value / statistic.allCommandsCount) *
                                    100,
                                  100
                                )
                              : 0
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Buyruqlar ro'yxati */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Buyruqlar ro'yxati
                </h2>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(Number(e.target.value))}
                  className="mb-1 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition w-full sm:w-auto"
                >
                  {items.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              {filteredCommands.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredCommands.map((command) => (
                    <div
                      key={command.id}
                      className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-gray-800">
                          {command.title}
                        </h3>
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            command.status === 1
                              ? "bg-blue-100 text-blue-800"
                              : command.status === 2
                              ? "bg-amber-100 text-amber-800"
                              : command.status === 3
                              ? "bg-orange-100 text-orange-800"
                              : "bg-emerald-100 text-emerald-800"
                          }`}
                        >
                          {items.find((i) => i.value === command.status)?.label}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mt-2 mb-3">
                        {command.description.length > 100
                          ? `${command.description.substring(0, 100)}...`
                          : command.description}
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>
                          Muddat:{" "}
                          {new Date(command.timeLimit).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="mx-auto w-20 h-20 text-gray-200 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-500 font-medium">
                    Hech qanday buyruq topilmadi
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    {items.find((item) => item.value === selectedStatus)?.label}{" "}
                    buyruqlar mavjud emas
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BatafsilXodimlar;
