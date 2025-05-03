import React, { useEffect, useState } from "react";
import newbg from "./../images/newbg.jpg";
import ApiCall, { baseUrl } from "../../config/index";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { saveAs } from "file-saver";

const DetailGroupe = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false); // Yangi holat
  const [name, setName] = useState("");

  useEffect(() => {
    fetchStudents();
    fetchGroups();
  }, []);

  const fetchStudents = async () => {
    setLoading(true);
    try {
      let obj = {
        endpoint: `/v1/data/student-list?limit=100&_group=${id}`,
        method: "GET",
        data: null,
      };
      const response = await ApiCall(`/api/v1/hemis`, "POST", obj);
      if (response.data.success && response.data.data) {
        const items = response.data.data.items;
        setStudents(items);
      } else {
        console.error("Failed to fetch students:", response.message);
      }
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchGroups = async () => {
    try {
      let obj = {
        endpoint: `/v1/data/group-list?id=${id}`,
        method: "GET",
        data: null,
      };
      const response = await ApiCall(`/api/v1/hemis`, "POST", obj);
      if (response.data.success && response.data.data) {
        let groupName = response.data.data.items[0].name;
        setName(groupName);
      } else {
        console.error("Failed to fetch group:", response.message);
      }
    } catch (error) {
      console.error("Error fetching group:", error);
    }
  };

  const downloadAttendance = async (groupId) => {
    try {
      setDownloading(true);
      // const url = `${BASE_URL}/api/v1/app/attendance/${groupId}`; // local backend

      // const response = await fetch(url, {
      //   method: "GET",
      // });
      const response = await fetch(
        `${baseUrl}/api/v1/app/attendance/${groupId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/pdf",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to download file");
      }

      const blob = await response.blob();
      const fileName = `davomat_${groupId}.xlsx`;
      // saveAs(blob, fileName);
    } catch (error) {
      console.error("Error downloading file:", error);
      alert("Faylni yuklashda xatolik yuz berdi!");
    } finally {
      setDownloading(false);
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
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate("/mobil/groups")}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            <span className="font-medium">Ortga qaytish</span>
          </button>
        </div>
        {loading || downloading ? ( // 🔥 loading yoki downloading bo'lsa Loading component
          <Loading />
        ) : students.length !== 0 ? (
          <div className="px-14">
            <div className="overflow-x-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg mb-6 p-6 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-1 flex items-center">
                    {name} guruhi talabalar ro'yxati
                  </h2>
                  <p className="text-blue-100 flex items-center">
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
                    📚 Dars Jadvali
                  </button>

                  <button
                    onClick={() => downloadAttendance(id)}
                    disabled={downloading} // 🔥 downloading bo'lsa tugma disable
                    className={`bg-yellow-400 text-blue-800 hover:bg-yellow-300 font-medium py-2 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center ${
                      downloading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    📥 Davomat Jurnali
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto bg-white rounded-lg shadow">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      №
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Ism Familiya
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Semestr
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
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
