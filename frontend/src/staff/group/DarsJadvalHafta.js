import React, { useEffect, useState } from "react";
import Sidebar from "./../Sidebar";
import newbg from "./../images/newbg.jpg";
import ApiCall from "../../config/index";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function DarsJadvalHafta() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [weekRange, setWeekRange] = useState("");

  const daysOfWeek = [
    { name: "Dushanba", short: "Du", key: 1 },
    { name: "Seshanba", short: "Se", key: 2 },
    { name: "Chorshanba", short: "Cho", key: 3 },
    { name: "Payshanba", short: "Pay", key: 4 },
    { name: "Juma", short: "Ju", key: 5 },
    { name: "Shanba", short: "Sha", key: 6 },
  ];

  useEffect(() => {
    fetchLessons();
  }, [id]);

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

  const fetchLessons = async () => {
    try {
      setLoading(true);
      let AllLessons = [];
      let { todayTimestamp, tomorrowTimestamp, monday, sunday } =
        getWeekTimestamps();

      // Set week range for display
      setWeekRange(`${formatDate(monday)} - ${formatDate(sunday)}`);

      let obj = {
        endpoint: `/v1/data/schedule-list?lesson_date_from=${todayTimestamp}&lesson_date_to=${tomorrowTimestamp}&_group=${id}`,
        method: "GET",
        data: null,
      };

      const response = await ApiCall(`/api/v1/hemis`, "POST", obj);

      if (response.data.success && response.data.data) {
        AllLessons = response.data.data.items;
        setLessons(AllLessons);
      } else {
        console.error("Failed to fetch lessons:", response.message);
      }
    } catch (error) {
      console.error("Error fetching lessons:", error);
    } finally {
      setLoading(false);
    }
  };

  // Group lessons by day of week
  const groupLessonsByDay = () => {
    const grouped = {};

    daysOfWeek.forEach((day) => {
      grouped[day.key] = [];
    });

    lessons.forEach((lesson) => {
      const lessonDate = new Date(lesson.lesson_date * 1000);
      const dayOfWeek = lessonDate.getUTCDay() || 7; // Convert Sunday (0) to 7

      if (grouped[dayOfWeek]) {
        grouped[dayOfWeek].push(lesson);
      }
    });

    // Sort lessons by time within each day
    daysOfWeek.forEach((day) => {
      grouped[day.key]?.sort((a, b) => {
        return a.lessonPair.code.localeCompare(b.lessonPair.code);
      });
    });

    return grouped;
  };

  const groupedLessons = groupLessonsByDay();

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
              onClick={() => navigate("/mobil/groups/" + id)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              <span className="font-medium">Ortga qaytish</span>
            </button>
          </div>
          <div className="p-6 mb-6">
            <h1 className="text-2xl font-bold text-blue-800 mb-4">
              Haftalik Dars Jadvali:{" "}
              <span className="font-semibold text-gray-700">{weekRange}</span>
            </h1>

            {loading ? (
              <Loading />
            ) : lessons.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-500">
                  Bu hafta uchun darslar mavjud emas
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <div className="flex flex-wrap gap-4 w-full">
                  {daysOfWeek.map((day) => (
                    <div
                      key={day.key}
                      className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 lg:w-[30%] w-full border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="text-center font-semibold text-blue-700 mb-4 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {day.name}
                      </div>

                      <div className="space-y-3">
                        {groupedLessons[day.key]?.length > 0 ? (
                          groupedLessons[day.key].map((lesson, idx) => (
                            <div
                              key={idx}
                              className="bg-white p-4 rounded-lg shadow-xs border border-gray-100 hover:border-blue-200 transition-all duration-150"
                            >
                              <div className="font-medium text-gray-800 flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 mr-2 text-indigo-500"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                  />
                                </svg>
                                {lesson.subject.name}
                              </div>

                              <div className="text-sm text-blue-600 mt-2 font-medium flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 mr-2"
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
                                {lesson.lessonPair.start_time} -{" "}
                                {lesson.lessonPair.end_time}
                              </div>

                              <div className="text-sm text-gray-600 mt-2 flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 mr-2 text-gray-500"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                  />
                                </svg>
                                <span className="font-medium">Auditoriya:</span>{" "}
                                &nbsp;{lesson.auditorium.name}
                              </div>

                              <div className="text-sm text-gray-600 mt-1 flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 mr-2 text-gray-500"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                  />
                                </svg>
                                <span className="font-medium">O'qituvchi:</span>{" "}
                                &nbsp;{lesson.employee.name}
                              </div>

                              <div
                                className={`text-xs mt-3 px-3 py-1 rounded-full inline-flex items-center ${
                                  lesson.trainingType.code === "12"
                                    ? "bg-purple-100 text-purple-800"
                                    : lesson.trainingType.code === "11"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-blue-100 text-blue-800"
                                }`}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-3 w-3 mr-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                  />
                                </svg>
                                {lesson.trainingType.name}
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="text-center text-gray-400 py-6 flex flex-col items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 mb-2 text-gray-300"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            Darslar mavjud emas
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DarsJadvalHafta;
