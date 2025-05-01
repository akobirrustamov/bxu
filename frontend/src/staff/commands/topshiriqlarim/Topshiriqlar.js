import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiCall from "../../../config/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInbox,
  faAreaChart,
  faHandshake,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../Sidebar";
import newbg from "../../../staff/images/newbg.jpg";
import Loading from "../../components/Loading";

const Topshiriqlar = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [statistic, setStatistic] = useState(null);

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

      const response = await ApiCall(
        `/api/v1/app/staff/commands/topshiriq/statistic/${token}`,
        "GET"
      );
      if (response.error === false && response.data) {
        console.log(response.data);
        setStatistic(response.data);
      } else {
        console.log("Failed to fetch commands.");
      }
    } catch (error) {
      alert("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div
        className="p-4 sm:ml-64 w-full min-h-screen"
        style={{
          backgroundImage: `url(${newbg})`,
          backgroundRepeat: "repeat",
        }}
      >
        <h2 className="text-center mb-6 font-semibold text-gray-600">
          📅 Mening topshiriqlarim
        </h2>
        {/* Контейнер карточек */}
        <div className="mt-2 transition-all duration-500">
          <div className="flex w-full gap-6">
            {/* Yangi topshiriq */}
            <div
              className="bg-green-500 hover:bg-green-600 w-1/2 p-6 rounded-lg shadow-md hover:shadow-xl transform transition hover:scale-105 cursor-pointer flex flex-col justify-center items-center"
              onClick={() =>
                navigate("/mobil/commands/topshiriqlarim/newtopshiriq")
              }
            >
              <FontAwesomeIcon
                icon={faInbox}
                size="3x"
                className="text-white"
              />
              <div className="mt-2">
                <span className="bg-orange-600 text-white px-3 py-2 rounded-full text-xl font-bold">
                  {statistic?.newCommandsCount || 0}
                </span>
              </div>
              <p className="text-xl font-semibold text-center text-white mt-2">
                Yangi topshiriq
              </p>
            </div>

            {/* Jarayonda */}
            <div
              className="bg-green-500 hover:bg-green-600 w-1/2 p-6 rounded-lg shadow-md hover:shadow-xl transform transition hover:scale-105 cursor-pointer flex flex-col justify-center items-center"
              onClick={() =>
                navigate("/mobil/commands/topshiriqlarim/jarayonda")
              }
            >
              <FontAwesomeIcon
                icon={faAreaChart}
                size="3x"
                className="text-white"
              />
              <div className="mt-2">
                <span className="bg-orange-600 text-white px-3 py-2 rounded-full text-xl font-bold">
                  {statistic?.inProgressCommandsCount || 0}
                </span>
              </div>
              <p className="text-xl font-semibold text-center text-white mt-2">
                Jarayonda
              </p>
            </div>
          </div>

          <div className="flex w-full gap-6 mt-4">
            {/* Kutilmoqda */}
            <div
              className="bg-green-500 hover:bg-green-600 w-1/2 p-6 rounded-lg shadow-md hover:shadow-xl transform transition hover:scale-105 cursor-pointer flex flex-col justify-center items-center"
              onClick={() =>
                navigate("/mobil/commands/topshiriqlarim/kutilmoqda")
              }
            >
              <FontAwesomeIcon
                icon={faHandshake}
                size="3x"
                className="text-white"
              />
              <div className="mt-2">
                <span className="bg-orange-600 text-white px-3 py-2 rounded-full text-xl font-bold">
                  {statistic?.pendingCommandsCount || 0}
                </span>
              </div>
              <p className="text-xl font-semibold text-center text-white mt-2">
                Kutilmoqda
              </p>
            </div>

            {/* Bajarilgan */}
            <div
              className="bg-green-500 hover:bg-green-600 w-1/2 p-6 rounded-lg shadow-md hover:shadow-xl transform transition hover:scale-105 cursor-pointer flex flex-col justify-center items-center"
              onClick={() =>
                navigate("/mobil/commands/topshiriqlarim/completed")
              }
            >
              <FontAwesomeIcon
                icon={faCheck}
                size="3x"
                className="text-white"
              />
              <div className="mt-2">
                <span className="bg-orange-600 text-white px-3 py-2 rounded-full text-xl font-bold">
                  {statistic?.completedCommandsCount || 0}
                </span>
              </div>
              <p className="text-xl font-semibold text-center text-white mt-2">
                Bajarilgan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topshiriqlar;
