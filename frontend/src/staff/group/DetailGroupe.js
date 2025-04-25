import React, { useEffect, useState } from "react";
import newbg from "./../images/newbg.jpg";
import { useParams } from "react-router-dom";
import ApiCall from "../../config/index";
import Loading from "../components/Loading";
import Sidebar from "../Sidebar";

const DetailGroupe = () => {
  const { id } = useParams();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");

  useEffect(() => {
    fetchStudents();
    fetchGroups();
  }, []);
  const fetchStudents = async () => {
    let AllStudents = [];
    let obj = {
      endpoint: `/v1/data/student-list?limit=100&_group=${id}`,
      method: "GET",
      data: null,
    };
    const response = await ApiCall(`/api/v1/hemis`, "POST", obj);
    if (response.data.success && response.data.data) {
      const items = response.data.data.items;
      AllStudents = [...AllStudents, ...items];
    } else {
      console.error("Failed to fetch groups:", response.message);
    }
    setStudents(AllStudents);
    setLoading(false);
  };
  const fetchGroups = async () => {
    let obj = {
      endpoint: "/v1/data/group-list?id=" + id,
      method: "GET",
      data: null,
    };
    const response = await ApiCall(`/api/v1/hemis`, "POST", obj);

    if (response.data.success && response.data.data) {
      let name = response.data.data.items[0].name;
      setName(name);
    } else {
      console.error("Failed to fetch groups:", response.message);
    }
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
        {loading ? (
          <Loading />
        ) : students.length !== 0 ? (
          <div className="px-14">
            <div className="overflow-x-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg mb-6 p-6 text-white">
              <div className="flex justify-between items-start ">
                <div>
                  <h2 className="text-2xl font-bold mb-1 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    {name} guruhi talabalar ro'yxati
                  </h2>
                  <p className="text-blue-100 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                    Guruhdagi talabalar soni:{" "}
                    <span className="font-semibold text-white ml-1">
                      {students.length}
                    </span>
                  </p>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => {
                      window.location.href = `/mobil/groups/dasr-jadval/${id}`;
                    }}
                    className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-2 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                    Dars Jadvali
                  </button>
                  <button className="bg-yellow-400 text-blue-800 hover:bg-yellow-300 font-medium py-2 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Davomat Jurnali
                  </button>
                </div>
              </div>

              {/* Bu yerga jadval yoki boshqa kontent qo'shishingiz mumkin */}
            </div>
            <div className="overflow-x-auto bg-white rounded-lg shadow">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-600">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">
                      №
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">
                      Ism Familiya
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">
                      Semestr
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">
                      Rasm
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {students.map((student, index) => (
                    <tr
                      key={student.id}
                      className="hover:bg-blue-50 transition duration-200"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-semibold">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-bold text-blue-800">
                          {student.full_name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {student.student_id_number}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                        {student.semester?.name || "N/A"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img
                          src={
                            student.image || "https://via.placeholder.com/50"
                          }
                          alt={student.full_name}
                          className="h-10 w-10 rounded-full object-cover border-2 border-blue-600"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="w-full py-12 text-center">
            <div className="max-w-md mx-auto p-6 bg-gray-50 rounded-xl">
              <h2 className="text-lg font-semibold text-gray-800">
                Guruhda talaba mavjud emas
              </h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailGroupe;
