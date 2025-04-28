import React, { useEffect, useState, useCallback } from "react";
import newbg from "./../images/newbg.jpg";
import ApiCall from "../../config/index";
import Sidebar from "../Sidebar";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

function Xodimlar() {
  const navigation = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [listStaff, setListStaff] = useState([]);
  const [expandedRank, setExpandedRank] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [nameRank, setNameRank] = useState("");

  const toggleExpandRank = (rankId) => {
    setExpandedRank(expandedRank === rankId ? null : rankId);
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    const token = localStorage.getItem("token");
    try {
      let obj = {
        endpoint: "/v1/data/staff-list?limit=100",
        method: "GET",
        data: null,
      };
      const response = await ApiCall(
        `/api/v1/app/staff/commander/${token}`,
        "GET",
        obj
      );
      if (response.data) {
        let items = response.data[0];
        let rankname = response.data[0].rank.name;
        console.log(rankname);

        setNameRank(rankname);
        if (response.data.length > 0) {
          const resListStaff = await ApiCall(
            `/api/v1/app/commander/list-staff/${items?.rank?.id}`,
            "GET"
          );
          setListStaff(resListStaff.data);
        }
      }
    } catch (error) {
      alert("Error", error.message || "An error occurred.");
      navigation.replace("Login");
    } finally {
      setIsLoading(false);
    }
  };

  const handleNavigateToDetail = useCallback(
    (staff) => {
      navigation.navigate("Batafsil xodim", { staffData: staff });
    },
    [navigation]
  );

  // Filtrlash (search uchun to'g'ri kod)
  const getFilteredListStaff = () => {
    if (!searchTerm) {
      return listStaff;
    }
    return listStaff.filter((item) =>
      item.rank.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredList = getFilteredListStaff();

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
          backgroundAttachment: "fixed",
        }}
      >
        <div className="px-4 sm:px-6 lg:px-8 pb-8">
          <div className="max-w-7xl mx-auto">
            {/* Sarlavha */}
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-3">
                Xodimlar ro'yxati
              </h1>
            </div>

            {/* Asosiy Rektor */}
            {listStaff[0]?.rank && (
              <div className="mb-10 w-full mx-auto md:w-1/2 lg:w-1/2 p-4 md:p-6 flex justify-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition duration-300">
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-5 w-full">
                  <div className="bg-white p-2 rounded-full shadow-md flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-center md:text-left w-full">
                    <div className="flex flex-col md:flex-row md:items-center justify-center md:justify-start gap-1">
                      <h2 className="text-xl md:text-2xl font-bold text-blue-900">
                        Sizning lavozimingiz:
                      </h2>
                      <h2 className="text-xl md:text-2xl font-bold text-blue-900">
                        {listStaff[0].rank.name}
                      </h2>
                    </div>

                    <div className="mt-2 flex gap-2 items-center md:items-start">
                      <h2 className="text-lg md:text-xl font-bold text-blue-900">
                        Siz topshiriq bera oladigan lavozimlar
                      </h2>
                      <div className="mt-1">
                        <svg
                          className="w-6 h-6 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Search input */}
            <div className="my-4 group relative px-20">
              <input
                type="text"
                placeholder="🔍 Guruh qidiruvi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 pl-12 pr-10 text-lg font-medium text-gray-800 bg-white rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:border-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:focus:border-blue-400 dark:focus:ring-blue-900/50"
              />

              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* Lavozimlar va xodimlar */}
            <div className="flex flex-wrap justify-center w-full gap-4 md:gap-6">
              {filteredList?.length > 0 ? (
                filteredList.map((item, index) => (
                  <div
                    key={item.rank.id || index}
                    className="w-full sm:w-[48%] lg:w-[30%] bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-100 group"
                  >
                    {/* Card header */}
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 flex items-center gap-4">
                      <div className="bg-white p-2 rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                        <svg
                          className="w-6 h-6 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                        {item.rank.name}
                      </h3>
                    </div>

                    {/* Card content */}
                    <div className="px-5 py-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {item.staff.length} ta xodim
                        </span>
                        <button
                          onClick={() => toggleExpandRank(item.rank.id)}
                          className="text-sm text-blue-600 hover:text-blue-800 transition-colors flex items-center"
                        >
                          {expandedRank === item.rank.id ? (
                            <>
                              Yopish
                              <svg
                                className="w-4 h-4 ml-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 15l7-7 7 7"
                                />
                              </svg>
                            </>
                          ) : (
                            <>
                              Ko'rish
                              <svg
                                className="w-4 h-4 ml-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </>
                          )}
                        </button>
                      </div>

                      {expandedRank === item.rank.id && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          {item.staff.length > 0 ? (
                            <div className="space-y-1.5">
                              {item.staff.map((staff) => (
                                <div
                                  key={staff.id}
                                  className="flex justify-between items-center px-3 py-1.5 bg-gray-50 rounded-lg hover:bg-blue-50/60 transition-colors duration-200 group"
                                >
                                  <div className="flex items-center gap-2.5">
                                    <div className="bg-blue-100/80 p-1.5 rounded-full group-hover:bg-blue-200/50 transition-colors">
                                      <svg
                                        className="w-3.5 h-3.5 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                      </svg>
                                    </div>
                                    <div className="space-y-0.5">
                                      <h4 className="font-medium text-gray-800 text-xs leading-tight">
                                        {staff.name}
                                      </h4>
                                      {staff.phone && (
                                        <p className="text-[11px] text-gray-500 leading-tight">
                                          {staff.phone}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                  <button
                                    onClick={() =>
                                      handleNavigateToDetail(staff)
                                    }
                                    className="text-xs bg-white border border-blue-200/80 text-blue-600 px-2.5 py-0.5 rounded-md hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors duration-150"
                                  >
                                    Batafsil
                                  </button>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="text-center py-4 text-gray-500 bg-blue-50 rounded-lg">
                              <svg
                                className="mx-auto w-6 h-6 text-blue-400 mb-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                />
                              </svg>
                              Xodimlar mavjud emas
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="w-full py-12 text-center bg-blue-50 rounded-xl max-w-2xl mx-auto">
                  <div className="bg-white p-4 rounded-full inline-flex items-center justify-center shadow-sm mb-4">
                    <svg
                      className="w-10 h-10 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-medium text-gray-800">
                    Lavozimlar topilmadi
                  </h3>
                  <p className="mt-2 text-gray-600 max-w-md mx-auto">
                    Hech qanday lavozim mavjud emas
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Xodimlar;
