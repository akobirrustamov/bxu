import React, { useEffect, useState } from "react";
import Sidebar from "./../Sidebar";
import newbg from "./../images/newbg.jpg";
import ApiCall from "../../config/index";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Group() {
  const navigate = useNavigate();
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("Sirtqi bo'lim");
  const [searchTerm, setSearchTerm] = useState(""); // <-- Yangi state

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
    const matchesSearch = searchTerm
      ? group.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return matchesDepartment && matchesSearch;
  });

  const goDetails = (id) => {
    navigate(`/mobil/groups/${id}`);
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
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/mobil")}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              <span className="font-medium">Ortga qaytish</span>
            </button>
          </div>
          <div className="rounded-xl overflow-hidden">
            <div className="p-6 text-white">
              <h1 className="text-5xl font-bold text-center text-blue-600">
                Guruhlar
              </h1>
              <div className="flex items-center justify-center gap-6 mt-4">
                <h4 className="text-gray-700 font-medium flex items-center gap-2">
                  {/* Jami bo'limlar */}
                  Jami bo'limlar:{" "}
                  <span className="text-blue-600 font-semibold ml-1">
                    {departments.length}ta
                  </span>
                </h4>
                <h4 className="text-gray-700 font-medium flex items-center gap-2">
                  {/* Jami guruhlar */}
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
                  <div className="w-full flex flex-wrap items-center justify-between gap-2">
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
                  {/* Search input */}
                  <div className="my-4 group relative">
                    <input
                      type="text"
                      placeholder="🔍 Guruh qidiruvi..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full p-3 pl-12 pr-10 text-lg font-medium text-gray-800 bg-white rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:border-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:focus:border-blue-400 dark:focus:ring-blue-900/50"
                    />

                    {/* Clear button (conditional) */}
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
                </div>
              </div>

              {loading ? (
                <Loading />
              ) : (
                <div className="flex justify-center flex-wrap gap-6">
                  {filteredGroups.length > 0 ? (
                    filteredGroups.map((group, index) => (
                      <div
                        className="hover:scale-105 group transition-all duration-200 w-full lg:w-1/5 sm:w-1/2 md:w-1/3 cursor-pointer"
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
                              <p className="text-sm">{group.specialty.name}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="w-full py-12 text-center">
                      <div className="max-w-md mx-auto p-6 bg-gray-50 rounded-xl">
                        <h3 className="mt-3 text-lg font-medium text-gray-900">
                          Guruhlar topilmadi
                        </h3>
                        <p className="mt-2 text-gray-500">
                          Tanlangan kafedraga oid yoki qidiruvga mos guruhlar
                          mavjud emas.
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="w-full text-center mt-10">
                    <p className="text-gray-700 font-bold text-2xl">
                      Topilgan guruhlar soni:{" "}
                      <span className="font-bold text-blue-600">
                        {filteredGroups.length} ta
                      </span>
                    </p>
                  </div>
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
