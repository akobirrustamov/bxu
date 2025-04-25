import React, { useEffect, useState } from "react";
import Sidebar from "./../Sidebar";
import ApiCall from "../../config/index";
import newbg from "./../images/newbg.jpg";
import Loading from "../components/Loading";

function DarsJadvali() {
  const [jadval, setJadval] = useState([]);
  const [loading, setLoading] = useState(true);
  const [weekRange, setWeekRange] = useState("");

  useEffect(() => {
    fetchJadval();
  }, []);

  const getWeekTimestamps = () => {
    const now = new Date();
    const dayOfWeek = now.getUTCDay();
    const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const sundayOffset = 7 - dayOfWeek;

    const monday = new Date(now);
    monday.setUTCDate(now.getUTCDate() + mondayOffset);
    monday.setUTCHours(0, 0, 0, 0);

    const sunday = new Date(now);
    sunday.setUTCDate(now.getUTCDate() + sundayOffset);
    sunday.setUTCHours(23, 59, 59, 999);

    return {
      todayTimestamp: Math.floor(monday.getTime() / 1000),
      tomorrowTimestamp: Math.floor(sunday.getTime() / 1000),
      monday,
      sunday,
    };
  };

  const formatDate = (date) => {
    const day = date.getUTCDate().toString().padStart(2, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = date.getUTCFullYear();
    return `${day}.${month}.${year}`;
  };

  const fetchJadval = async () => {
    try {
      setLoading(true);
      let allLessons = [];
      let { todayTimestamp, tomorrowTimestamp, monday, sunday } =
        getWeekTimestamps();
      setWeekRange(`${formatDate(monday)} - ${formatDate(sunday)}`);

      let page = 1;
      let hasNextPage = true;

      while (hasNextPage) {
        let obj = {
          endpoint: `/v1/data/schedule-list?lesson_date_from=${todayTimestamp}&lesson_date_to=${tomorrowTimestamp}&limit=200&page=${page}`,
          method: "GET",
          data: null,
        };

        const response = await ApiCall(`/api/v1/hemis`, "POST", obj);

        if (response.data.success && response.data.data) {
          const items = response.data.data.items;
          allLessons = [...allLessons, ...items];

          const pagination = response.data.data.pagination;
          hasNextPage = page < pagination.pageCount;
          page++;
        } else {
          console.error("Failed to fetch lessons:", response.message);
          hasNextPage = false;
        }
      }

      setJadval(allLessons);
    } catch (error) {
      console.error("Error fetching lessons:", error);
    } finally {
      setLoading(false);
    }
  };

  const groupByGroupName = () => {
    const grouped = {};
    jadval.forEach((lesson) => {
      const groupName = lesson.group?.name || "Noma'lum guruh";
      const lessonNumber = lesson.lessonPair?.name; // 1,2,3,4,5,6

      if (!grouped[groupName]) {
        grouped[groupName] = {};
      }
      grouped[groupName][lessonNumber] = {
        subjectName: lesson.subject?.name || "Fan nomi yo'q",
        teacherName: lesson.employee?.name || "O'qituvchi yo'q",
        roomName: lesson.auditorium?.name || "Xona yo'q",
      };
    });
    return grouped;
  };

  const groupedLessons = groupByGroupName();

  const lessonNumbers = [1, 2, 3, 4, 5, 6]; // 6 dars bor inobatga olindi

  return (
    <div className="flex">
      <Sidebar />
      <div
        className="sm:ml-64 w-full min-h-screen"
        style={{
          backgroundImage: `url(${newbg})`,
          backgroundRepeat: "repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="min-h-screen px-4 md:px-8 pt-4">
          <div className="max-w-7xl mx-auto">
            {/* Sarlavha */}
            <div className="text-center mb-2">
              <h1 className="text-4xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                📚 Dars Jadvali{" "}
                <span className="text-blue-400">({weekRange})</span>
              </h1>
              <div className="mt-2 text-xl font-semibold text-blue-700 bg-white inline-block px-6 py-2 rounded-lg border-2 border-blue-300 shadow-md">
                📅 Bugun{" "}
                <span className="font-bold text-purple-600">
                  {Object.keys(groupedLessons).length}
                </span>{" "}
                ta guruh uchun dars belgilangan
              </div>
            </div>

            {/* Jadval */}
            {loading ? (
              <Loading />
            ) : (
              <div className="bg-white rounded-2xl shadow-xl overflow-x-auto max-h-[80vh] border-2 border-blue-300">
                <table className="w-full table-auto relative">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="p-3 sticky top-0 left-0 z-30 bg-blue-600">
                        № / Guruh
                      </th>
                      {lessonNumbers.map((num) => (
                        <th
                          key={num}
                          className="p-3 text-center border-x-2 sticky top-0 bg-blue-600 z-20"
                        >
                          {num}-dars
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {Object.keys(groupedLessons).map((groupName, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}
                      >
                        <td className="p-3 font-bold text-blue-800 sticky left-0 bg-white border-2 border-gray-200 whitespace-nowrap z-10">
                          <div className="flex items-center">
                            <span className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full mr-3">
                              {index + 1}
                            </span>
                            {groupName}
                          </div>
                        </td>
                        {lessonNumbers.map((lessonNumber) => {
                          const lessonInfo =
                            groupedLessons[groupName][lessonNumber];
                          return (
                            <td
                              key={lessonNumber}
                              className="p-2 border-2 border-gray-200 text-center"
                            >
                              {lessonInfo ? (
                                <div className="flex flex-col items-center text-sm">
                                  <span className="font-semibold">
                                    {lessonInfo.subjectName}
                                  </span>
                                  <span className="text-gray-500">
                                    {lessonInfo.teacherName}
                                  </span>
                                  <span className="text-gray-400">
                                    {lessonInfo.roomName}
                                  </span>
                                </div>
                              ) : (
                                "-"
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DarsJadvali;
