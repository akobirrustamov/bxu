import React, { useEffect, useState } from "react";
import Sidebar from "./../Sidebar";
import newbg from "./../images/newbg.jpg";
import ApiCall from "../../config/index";
import { useNavigate } from "react-router-dom";

function Group() {
  const navigate = useNavigate();
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("Sirtqi bo'lim");

  const fetchGroups = async () => {
    let AllGroups = [];
    let page = 1;
    let hasNextPage = true;

    let obj = {
      endpoint: "/v1/data/group-list?limit=200",
      method: "GET",
      data: null,
    };
    const response = await ApiCall(`/api/v1/hemis`, "POST", obj);

    if (response.data.success && response.data.data) {
      const items = response.data.data.items;
      AllGroups = [...AllGroups, ...items];

      hasNextPage = response.data.data.pagination?.hasNextPage || false;
      page++;
    } else {
      console.error("Failed to fetch groups:", response.message);
      hasNextPage = false;
    }

    setGroups(AllGroups);
    setLoading(false);
    const uniqueDepartments = [
      ...new Set(AllGroups.map((group) => group.department.name)),
    ];
    setDepartments(uniqueDepartments);

    const storedDepartment = localStorage.getItem("selectedDepartment");
    if (storedDepartment) {
      setSelectedDepartment(storedDepartment);
    } else {
      setSelectedDepartment(uniqueDepartments[0]);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  const filteredGroups = groups.filter((group) => {
    const matchesDepartment = selectedDepartment
      ? group.department.name === selectedDepartment
      : true;
    return matchesDepartment;
  });
  const goDetails = (id) => {
    navigate(`/mobil/groups/${id}`); // Navigatsiya orqali group details sahifasiga o'tish
  };

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
        <div className="max-w-7xl mx-auto">
          <div className="rounded-xl overflow-hidden">
            <div className="p-6 text-white">
              <h1 className="text-5xl font-bold text-center text-blue-600">
                Guruhlar
              </h1>
              <div className="flex items-center justify-center gap-6 mt-4">
                <h4 className="text-gray-700 font-medium flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-500"
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
                  Jami bo'limlar:{" "}
                  <span className="text-blue-600 font-semibold ml-1">
                    {departments.length}ta
                  </span>
                </h4>
                <h4 className="text-gray-700 font-medium flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Jami guruhlar:{" "}
                  <span className="text-blue-600 font-semibold ml-1">
                    {groups.length}ta
                  </span>
                </h4>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div className="w-full md:w-2/3 mx-auto">
                  <div className="w-full flex items-center justify-between gap-2">
                    {departments.map((dept, index) => (
                      <button
                        key={index}
                        className={`hover:scale-105 transition-all duration-200 rounded-lg px-6 py-2 ${
                          selectedDepartment === dept
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-black"
                        }`}
                        onClick={() => {
                          setSelectedDepartment(dept);
                          localStorage.setItem("selectedDepartment", dept);
                        }}
                      >
                        {dept}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <div className="flex justify-center flex-wrap gap-6">
                  {groups.length > 0 ? (
                    groups.map((group, index) => {
                      if (group.department.name === selectedDepartment) {
                        return (
                          <div
                            class="hover:scale-105 group transition-all duration-200 w-full lg:w-1/5 sm:w-1/2 md:w-1/3 cursor-pointer"
                            key={index}
                            onClick={() => goDetails(group.id)}
                          >
                            <div className="bg-white group-hover:!bg-blue-600 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 h-full border border-gray-100">
                              <div className="p-3">
                                <div className="flex items-center justify-between mb-3">
                                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white">
                                    {group.name}
                                  </h3>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-600 group-hover:text-white">
                                  <p className="text-sm">
                                    {group.specialty.name}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })
                  ) : (
                    <div className="w-full py-12 text-center">
                      <div className="max-w-md mx-auto p-6 bg-gray-50 rounded-xl">
                        <svg
                          className="w-12 h-12 mx-auto text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <h3 className="mt-3 text-lg font-medium text-gray-900">
                          Guruhlar topilmadi
                        </h3>
                        <p className="mt-2 text-gray-500">
                          Tanlangan kafedraga oid guruhlar mavjud emas.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Group;
