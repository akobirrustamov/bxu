import React, { use } from "react";
import ApiCall from "../config/index";
import { useEffect, useState } from "react";

function Test() {
  let token = localStorage.getItem("student_token");
  const [student, setStudent] = useState({});
  useEffect(() => {
    fetchStudent();
  }, []);
  const fetchStudent = async () => {
    try {
      const response = await ApiCall(
        "/api/v1/app/student/account/" + token,
        "GET",
        null
      );
      setStudent(response.data);
    } catch (error) {
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        console.error("error fetching student data");
        // Handle the error (e.g., show an error message to the user)
      }
    }
  };

  return (
    <div class="">
      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg flex items-center justify-center gap-6 text-center">
        <div>
          <img
            class="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
            src={student.image}
            alt="Student photo"
          />
        </div>
        <div>
          <h2 class="text-xl font-bold text-gray-800">{student.second_name}</h2>
          <h2 class="text-xl font-bold text-gray-800">{student.first_name}</h2>
          <p class="text-indigo-600 font-medium">
            Guruhi talabasi: {student.group_name}
          </p>
        </div>
      </div>

      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Test;
