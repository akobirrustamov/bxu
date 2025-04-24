import React, { useEffect, useState } from "react";
import newbg from "./../images/newbg.jpg";
import { useParams } from "react-router-dom";
import ApiCall from "../../config/index";
import Sidebar from "../Sidebar";

const DetailGroupe = () => {
  const { id } = useParams();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetchStudents = async () => {
    let AllStudents = [];
    let obj = {
      endpoint: `/v1/data/student-list?_group=${id}`,
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

  useEffect(() => {
    fetchStudents();
  }, []);

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
        <h1 className="text-2xl font-bold mb-4">Guruh ID: {id}</h1>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : students.length !== 0 ? (
          <div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Talabalar ro'yxati</h2>
              <p className="text-gray-600 mb-4">
                Guruhdagi talabalar soni: {students.length}
              </p>
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
