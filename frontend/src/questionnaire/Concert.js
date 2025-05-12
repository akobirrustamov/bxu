import React, { useState } from "react";
import Select from "react-select";
import logo from "./logoMain.jpg";
import { useNavigate } from "react-router-dom";
import ApiCall from "../config/index";
function Concert() {
  const [formData, setFormData] = useState({
    reason: "",
    number: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await ApiCall("/api/v1/concert-questionnaire", "POST", formData);
      alert("Rahmat! Ma'lumotlaringiz saqlandi.");
      navigate("/");
    } catch (error) {
      console.error("Error submitting questionnaire:", error);
      alert("Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.");
    }
  };

  const handleChangeNumber = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 p-4 md:p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-lg p-6 md:p-8 w-full max-w-2xl space-y-6 transition-all duration-300 hover:shadow-2xl"
      >
        <div className="flex flex-col items-center">
          <img
            src={logo}
            alt="Buxoro xalqaro universiteti logosi"
            className="h-24 w-auto mb-4 object-contain"
          />
          <h1 className="text-xl md:text-2xl font-bold text-blue-800 text-center">
            Buxoro xalqaro universiteti
          </h1>
          <h2 className="text-lg md:text-xl text-gray-700 text-center mt-2">
            So'rovnomada qatnashing – har bir bergan ma'lumotingiz biz uchun
            qadrli!
          </h2>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="reason" className="block text-gray-700 font-medium">
              <span className="text-blue-600">1.</span> Siz nechi kishi bo'lib
              kelasiz?
              <input
                type="number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="Javobingizni yozing..."
                required
                name="number"
                value={formData.number}
                onChange={handleChangeNumber}
              />
            </label>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="reason" className="block text-gray-700 font-medium">
              <span className="text-blue-600">2.</span> Izoh qoldiring
              (ixtiyoriy)
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="Javobingizni yozing..."
              rows="3"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Yuborish
        </button>
      </form>
    </div>
  );
}

export default Concert;
