import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiCall from "../config/index";

function Test() {
  const navigate = useNavigate();
  const token = localStorage.getItem("student_token");

  const [student, setStudent] = useState({});
  const [test, setTest] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {

    console.log(token)
    if (!token){
      navigate("/test/login")
    }
    fetchStudent();
    fetchTest();
  }, []);

  const checkTest = async (id) => {
    try {
      const response = await ApiCall(`/api/v1/test-suitsid/student/${id}`, "GET", null);
     if (response.data){
       navigate("/test/done")
     }
    } catch (error) {
      console.error("error fetching test data");
    }
  };

  const fetchStudent = async () => {
    try {
      const response = await ApiCall(
          "/api/v1/app/student/account/" + token,
          "GET",
          null
      );
      if (response.error) {
        navigate("/test/login");
      }
      setStudent(response.data);
      if (!response.error){
        await checkTest(response.data.id)

      }
    } catch (error) {
      if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
      ) {
        console.error("error fetching student data");
      }
    }
  };

  const fetchTest = async () => {
    try {
      const response = await ApiCall("/api/v1/test-suitsid", "GET", null);
      setTest(response.data);
    } catch (error) {
      console.error("error fetching test data");
    }
  };

  const handleOptionChange = (testId, value) => {
    setAnswers((prev) => ({ ...prev, [testId]: value }));
  };

  const allAnswered = test.length > 0 && test.every((item) => answers[item.id]);

  const handleFinishTest = async () => {
    let mark = 0;

    test.forEach((item) => {
      if (answers[item.id] === "answer1") {
        mark += item.ball1 ;
      } else if (answers[item.id] === "answer2") {
        mark += item.ball2;
      }
    });

    try {
      const response = await ApiCall(
          `/api/v1/test-suitsid/result/${student.id}/${mark}`,
          "POST",
          null
      );
      localStorage.clear()
      alert("Test yakunlandi!" );
      navigate("/test/done");
    } catch (error) {
      console.error("Error submitting test result:", error);
    }
  };

  return (
      <div>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg flex items-center justify-center gap-6 text-center">
          <div>
            <img
                className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
                src={student.image}
                alt="Student"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">{student.second_name}</h2>
            <h2 className="text-xl font-bold text-gray-800">{student.first_name}</h2>
            <p className="text-indigo-600 font-medium">Guruhi talabasi: {student.group_name}</p>
          </div>
        </div>

        <div className="space-y-6">
          {test.map((item, index) => (
              <div
                  className="bg-white shadow-md rounded-xl p-6 mx-12 border border-gray-200"
                  key={item.id}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {index+1}. {item.testSuidsit}
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center p-3 border rounded-lg cursor-pointer transition hover:bg-gray-50 hover:shadow-sm">
                    <input
                        type="radio"
                        className="form-radio text-blue-600 w-5 h-5 mr-3"
                        name={`options-${item.id}`}
                        value="answer1"
                        onChange={() => handleOptionChange(item.id, "answer1")}
                        checked={answers[item.id] === "answer1"}
                    />
                    <span className="text-gray-700">{item.answer1}</span>
                  </label>

                  <label className="flex items-center p-3 border rounded-lg cursor-pointer transition hover:bg-gray-50 hover:shadow-sm">
                    <input
                        type="radio"
                        className="form-radio text-blue-600 w-5 h-5 mr-3"
                        name={`options-${item.id}`}
                        value="answer2"
                        onChange={() => handleOptionChange(item.id, "answer2")}
                        checked={answers[item.id] === "answer2"}
                    />
                    <span className="text-gray-700">{item.answer2}</span>
                  </label>
                </div>
              </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
              onClick={handleFinishTest}
              className={`mt-8 mb-2 ${
                  allAnswered
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-blue-400 cursor-not-allowed"
              } text-white font-semibold py-2 px-12 rounded-lg shadow-md transition duration-300`}
              disabled={!allAnswered}
          >
            Yakunlash
          </button>
        </div>
      </div>
  );
}

export default Test;
