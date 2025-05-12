import React, { useState } from "react";
import Select from "react-select";
import logo from "./logoMain.jpg";
import { useNavigate } from "react-router-dom";
import ApiCall from "../config/index";

function Concert() {
  const [formData, setFormData] = useState({
    description: "",
    count: "",
    answer: "",
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
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={logo}
            alt="Buxoro xalqaro universiteti logosi"
            className="h-24 w-auto object-contain md:mr-4"
          />
          <div className="text-center md:text-left">
            <h1 className="text-xl md:text-2xl font-bold text-blue-800">
              Buxoro Xalqaro Universiteti
            </h1>
            <div className="w-16 h-1 bg-blue-600 mx-auto md:mx-0 my-3"></div>
            <h2 className="text-lg md:text-xl text-gray-700 mt-4">
              So'rovnomada qatnashing - bizga yordam bering eng yaxshi tadbirni
              tashkil etishimizga!
            </h2>
            <h2 className="text-lg md:text-xl text-gray-700 mt-3">
              21-may kuni Buxoro Xalqaro Universitetida bo'lib o'tadigan "Yozgi
              Konsert"ning
              <span className="text-blue-800 font-semibold">
                {" "}
                asosiy mehmoni - Zahriddin Hamrayev
              </span>{" "}
              bo'ladi!
            </h2>
          </div>
        </div>

        {/* Xarita qismi */}

        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="reason" className="block text-gray-700 font-medium">
              <span className="text-blue-600">1.</span> Siz nechi kishi bo'lib
              kelasiz?
              <input
                type="count"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="Javobingizni yozing..."
                required
                name="count"
                value={formData.count}
                onChange={handleChangeNumber}
              />
            </label>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="description"
              className="block text-gray-700 font-medium"
            >
              <span className="text-blue-600">2.</span> Izoh qoldiring
              (ixtiyoriy)
            </label>
            <textarea
              id="description"
              name="description"
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
        <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.215028847586!2d64.431045!3d39.809328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ4JzMzLjYiTiA2NMKwMjUnNTEuOCJF!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Buxoro Xalqaro Universiteti joylashuvi"
          ></iframe>
        </div>
      </form>
    </div>
  );
}

export default Concert;
