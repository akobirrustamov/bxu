import React, { useEffect, useState } from "react";
import Sidebar from "./../Sidebar";
import ApiCall from "../../config/index";
import newbg from "./../images/newbg.jpg";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCalendarAlt,
  faUserTie,
  faLayerGroup,
  faFolderOpen,
  faClock,
  faArrowRight,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

function DailyControl() {
  const [dailyControls, setDailyControls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [rank, setRank] = useState(null);

  useEffect(() => {
    fetchRank();
  }, []);

  const fetchRank = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await ApiCall("/api/v1/app/staff/rank/" + token, "GET");
      if (res.data) {
        let ha = false;
        res.data.map((item) => {
          if (item.id === 1 || item.id === 2) {
            setRank(item.id);
            ha = true;
          }
        });
        if (ha) {
          fetchDailyControlsRanks();
        } else {
          fetchDailyControls();
        }

        const hasRelevantRank = res.data.some(
          (item) => item.id === 1 || item.id === 2
        );
        localStorage.setItem("attendance", hasRelevantRank ? "true" : "false");
      } else {
        navigate("/mobil/login");
      }
    } catch (error) {
      navigate("/mobil/login");
    } finally {
      setLoading(false);
    }
  };

  const fetchDailyControls = async () => {
    try {
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");

      // Agar foydalanuvchi token yoki rolega ega bo‘lmasa, login sahifasiga yo‘naltiriladi
      //   if (!token || role !== "ROLE_STAFF") {
      //     navigate("/mobil/login");
      //     return;
      //   }

      setLoading(true);

      const subfoldersResponse = await ApiCall(
        `/api/v1/daily-control/staff/${token}`,
        "GET"
      );

      if (
        subfoldersResponse.error === false &&
        Array.isArray(subfoldersResponse.data)
      ) {
        const controlsMap = new Map();

        subfoldersResponse.data.forEach((subfolder) => {
          if (subfolder?.dailyControl?.id) {
            const controlId = subfolder.dailyControl.id;

            if (!controlsMap.has(controlId)) {
              controlsMap.set(controlId, {
                ...subfolder.dailyControl,
                subFolders: [],
              });
            }

            controlsMap.get(controlId).subFolders.push(subfolder);
          } else {
            console.warn("dailyControl yoki id topilmadi:", subfolder);
          }
        });

        const controlsWithSubfolders = Array.from(controlsMap.values());
        setDailyControls(controlsWithSubfolders);
      } else {
        setError("Failed to fetch data");
      }
    } catch (err) {
      setError(err.message || "Xatolik yuz berdi");
      //   navigate("/mobil/login");
    } finally {
      setLoading(false);
    }
  };

  const fetchDailyControlsRanks = async () => {
    try {
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");

      // if (!token || role !== "ROLE_STAFF") {
      //   navigate("/mobil/login");
      //   return;
      // }

      setLoading(true);

      const response = await ApiCall(`/api/v1/rector`, "GET");

      if (response.data) {
        const controlsMap = new Map();

        response.data.forEach((subfolder) => {
          const dailyControl = subfolder?.id;
          // Faqat dailyControl mavjud va id bo'lsa davom etamiz
          if (dailyControl) {
            const controlId = dailyControl.id;

            if (!controlsMap.has(controlId)) {
              controlsMap.set(controlId, {
                ...dailyControl,
                subFolders: [],
              });
            }

            controlsMap.get(controlId).subFolders.push(subfolder);
          } else {
            console.warn(
              "dailyControl topilmadi yoki noto'g'ri formatda:",
              subfolder
            );
          }
        });

        const controlsWithSubfolders = Array.from(controlsMap.values());

        setDailyControls(controlsWithSubfolders);
      } else {
        setError("Failed to fetch data");
      }
    } catch (err) {
      console.error("Xatolik:", err);
      setError(err.message || "Xatolik yuz berdi");
      // navigate("/mobil/login");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex">
        <Sidebar />
        <div className="p-4 sm:ml-64 w-full min-h-screen flex items-center justify-center">
          <div className="text-xl flex items-center">
            <FontAwesomeIcon icon={faClock} className="mr-3 animate-spin" />
            Loading daily controls...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex">
        <Sidebar />
        <div className="p-4 sm:ml-64 w-full min-h-screen flex items-center justify-center">
          <div className="text-xl text-red-500">
            <FontAwesomeIcon icon={faClipboardList} className="mr-2" />
            {error}
          </div>
        </div>
      </div>
    );
  }

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
            onClick={() => navigate("/mobil")}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            <span className="font-medium">Ortga qaytish</span>
          </button>
        </div>
        <div className="flex items-center mb-6">
          <FontAwesomeIcon
            icon={faClipboardList}
            className="text-blue-600 text-2xl mr-3"
          />
          <h1 className="text-2xl font-bold text-gray-800">
            Kunlik nazorat bo'limi
          </h1>
        </div>

        {dailyControls.length === 0 ? (
          <div className="bg-white bg-opacity-95 p-8 rounded-xl shadow-lg text-center max-w-md mx-auto">
            <FontAwesomeIcon
              icon={faFolderOpen}
              className="text-gray-400 text-4xl mb-4"
            />
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              No daily controls assigned
            </h3>
            <p className="text-gray-500">
              You don't have any daily controls assigned yet.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {dailyControls.map((control) => (
              <div
                key={control?.id}
                className="bg-white bg-opacity-95 p-6 rounded-xl shadow-lg"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-xl mr-4">
                      <FontAwesomeIcon
                        icon={faLayerGroup}
                        className="text-blue-600 text-xl"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 mb-1">
                        {control?.name}
                      </h2>
                      <p className="text-gray-600">{control?.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
                    {new Date(control?.createdAt).toLocaleDateString()}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h3 className="font-medium text-gray-700 mb-3 flex items-center">
                    <FontAwesomeIcon
                      icon={faFolderOpen}
                      className="mr-2 text-blue-500"
                    />
                    Bo'limlar:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {control.subFolders.map((subfolder) => (
                      <div
                        onClick={() =>
                          navigate("/mobil/daily-control/" + subfolder?.id)
                        }
                        key={subfolder?.id}
                        className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-all cursor-pointer group"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center">
                            <FontAwesomeIcon
                              icon={faFolderOpen}
                              className="mr-2 text-blue-400 group-hover:text-blue-600"
                            />
                            <h4 className="font-medium text-gray-800 group-hover:text-blue-600">
                              {subfolder?.name}
                            </h4>
                          </div>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-gray-400 group-hover:text-blue-500"
                          />
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          {subfolder?.description}
                        </p>
                        <div className="flex items-center text-xs text-gray-500">
                          <FontAwesomeIcon icon={faUserTie} className="mr-1" />
                          <span>Ma'sul: {subfolder?.name}</span>
                          <span className="mx-2">•</span>
                          <FontAwesomeIcon
                            icon={faCalendarAlt}
                            className="mr-1"
                          />
                          <span>
                            {new Date(subfolder.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DailyControl;
